import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { HealthInsuranceQuestion, marks } from "../constants";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function InsuranceQuestionnair({ setLoader, setPolicyStatus }) {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [answer, setAnswer] = useState([]);

  function handleClick(opt) {
    if (opt == "no" && step == 0) {
      setStep(step + 3);
    } else next();
  }

  let [arr, setArr] = useState({});
  let [question, setQuestion] = useState("");
  let [currAnswer, setCurrAnswer] = useState("");

  let [questionType, setQuestionType] = useState("");

  let [currQuestion, setCurrQuestion] = useState({});

  let [quesSeq, setQuesSeq] = useState([]);

  let [currIdx, setCurrIdx] = useState(0);
  let [questionObj, setQuestionObj] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch(
      "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/questions"
    ) //api for the get request
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let questionObj = data;
        debugger;
        setArr([{ obj: questionObj.questions, index: 0 }]);
        setQuestion(questionObj.questions[0].question);
        setQuestionType(questionObj.questions[0].answerFormat);
        setCurrQuestion(questionObj.questions[0]);
        quesSeq.push();
        console.log(data);
        setLoader(false);
      });

    gtag("event", "underwriting_init");

    // let [ques, setQues] = useState({ ...questionObj });
  }, []);

  function nextQ(res) {
    let elem = arr[arr.length - 1];

    for (let i = 0; i < answer.length; i++) {
      if (answer[i].id == elem.obj[elem.index].id) {
        answer.splice(i, 1);
      }
    }

    if (res == "yes" || res == "no") {
      answer.push({
        id: elem.obj[elem.index].id,
        key: elem.obj[elem.index].key,
        answer: res == "yes" ? true : false,
      });
    } else
      answer.push({
        id: elem.obj[elem.index].id,
        key: elem.obj[elem.index].key,
        answer: currAnswer,
      });
    setAnswer([...answer]);
    console.log(answer);

    if (elem.index >= elem.obj.length - 1) {
      arr.pop();
      if (arr.length == 0) {
        let data = {
          requestId: "uw_70880",
          customerId: 124,
          answers: [...answer],
        };

        setLoader(true);
        fetch(
          "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/answers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setLoader(false);
            setPolicyStatus(data.statusId);
            gtag("event", "underwriting_done");
            navigate("../policyIssuance");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (arr.length != 0) {
        elem = arr[arr.length - 1];
        elem.index = elem.index + 1;
        // while (elem.index >= elem.obj.length - 1) {}
        setQuestion(elem.obj[elem.index].question);
        setQuestionType(elem.obj[elem.index].answerFormat);
        setCurrQuestion(elem.obj[elem.index]);
      }

      setArr([...arr]);
      return;
    }

    if (elem.obj[elem.index].hasNext && res == "yes") {
      arr.push({ obj: elem.obj[elem.index].next, index: 0 });

      setQuestion(elem.obj[elem.index].next[0].question);
      setQuestionType(elem.obj[elem.index].next[0].answerFormat);
      setCurrQuestion(elem.obj[elem.index].next[0]);

      //elem.index = elem.index + 1;

      setArr([...arr]);
    } else {
      elem.index = elem.index + 1;
      setQuestion(elem.obj[elem.index].question);
      setQuestionType(elem.obj[elem.index].answerFormat);
      setCurrQuestion(elem.obj[elem.index]);

      setArr([...arr]);
    }
    console.log(currQuestion);
    setCurrAnswer("");
  }

  function previousQ(res) {
    let elem = arr[arr.length - 1];
    if (arr.length == 0) {
      return;
    }
    // if (res == "yes" || res == "no") {
    //   answer.push({
    //     id: elem.obj[elem.index].id,
    //     answer: res == "yes" ? true : false,
    //   });
    // } else answer.push({ id: elem.obj[elem.index].id, answer: currAnswer });
    answer.pop();
    setAnswer([...answer]);
    console.log(answer);

    if (elem.index <= 0) {
      arr.pop();
      if (arr.length == 0) {
        return;
      }
      if (arr.length != 0) {
        elem = arr[arr.length - 1];
        // elem.index = elem.index - 1;
        // while (elem.index >= elem.obj.length - 1) {}
        setQuestion(elem.obj[elem.index].question);
        setQuestionType(elem.obj[elem.index].answerFormat);
        setCurrQuestion(elem.obj[elem.index]);
      }

      setArr([...arr]);
      return;
    } else {
      elem.index = elem.index - 1;
      // while (elem.index >= elem.obj.length - 1) {}
      setQuestion(elem.obj[elem.index].question);
      setQuestionType(elem.obj[elem.index].answerFormat);
      setCurrQuestion(elem.obj[elem.index]);
    }

    // if (elem.obj[elem.index].hasNext && res == "yes") {
    //   arr.push({ obj: elem.obj[elem.index].next, index: 0 });

    //   setQuestion(elem.obj[elem.index].next[0].question);
    //   setQuestionType(elem.obj[elem.index].next[0].answerFormat);
    //   setCurrQuestion(elem.obj[elem.index].next[0]);

    //   //elem.index = elem.index + 1;

    //   setArr([...arr]);
    // } else {
    //   elem.index = elem.index + 1;
    //   setQuestion(elem.obj[elem.index].question);
    //   setQuestionType(elem.obj[elem.index].answerFormat);
    //   setCurrQuestion(elem.obj[elem.index]);

    //   setArr([...arr]);
    // }
    console.log(currQuestion);
    setCurrAnswer("");
  }

  function next() {
    if (step < HealthInsuranceQuestion.length - 1) {
      setStep(++step);
    } else {
      navigate("../plans");
    }
  }
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Let's make sure our health offering is right for you
            </h3>
            {/* <p class="StyledElements__QuestionSubHeader-vnab5o-1 ChatQuestionWrapper__SubHeader-sc-1uvt1f0-3 kDtpEG kkAEss">
              Just answer these 3 quick&nbsp;questions
            </p> */}

            <form autocomplete="off" novalidate="" class="bcuijq">
              <ChevronLeftIcon
                style={{
                  position: "relative",
                  left: "-50px",
                  top: "100px",
                  "font-size": "40px",
                  cursor: "pointer",
                }}
                onClick={previousQ}
              />

              <div
                className="question-form"
                style={{ width: "100%", "min-width": "300px" }}
              >
                <div style={{ "max-width": "416px" }} class="faXeTW hLEbcr">
                  <div style={{ width: "100%" }} class="cZobsb gLeraX">
                    <div class="cGIqAI gQDvru" style={{ opacity: "1" }}>
                      <div height="auto,57" class="ifOqJt kIFXiF">
                        <div timeout="400" class="flgDQF" reversed="">
                          <div class="cGIqAI gLeraX enter-done">
                            <div class="cDIwQB gQIPbk">
                              {/* {HealthInsuranceQuestion[step].question} */}
                              {question}
                            </div>
                          </div>
                        </div>
                      </div>
                      {questionType == "number" && (
                        <Slider
                          style={{ color: "red", marginTop: "20px" }}
                          aria-label="Always visible"
                          defaultValue={10}
                          getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          step={1}
                          value={parseInt(currAnswer)}
                          key={question}
                          onChange={(event, newValue) => {
                            console.log(currQuestion, marks);

                            setCurrAnswer(newValue);
                          }}
                          // marks={marks}
                          marks={
                            currQuestion.key == "height"
                              ? marks["height"]
                              : marks["age"]
                          }
                        />
                      )}
                      {questionType == "string" &&
                        currQuestion.answerOptions === undefined && (
                          <TextField
                            sx={{
                              marginTop: 4,
                            }}
                            id="filled-basic"
                            fullWidth
                            variant="outlined"
                            spellCheck={false}
                            type="string"
                            value={currAnswer}
                            key={question}
                            onChange={(event) => {
                              setCurrAnswer(event.target.value);
                              console.log(currQuestion);
                            }}
                          />
                        )}

                      {questionType == "string" &&
                        currQuestion.answerOptions != undefined && (
                          <FormControl
                            sx={{
                              marginTop: 4,
                            }}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-label">
                              Options
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={currAnswer}
                              label="Options"
                              onChange={(event) => {
                                setCurrAnswer(event.target.value);
                              }}
                            >
                              {currQuestion.answerOptions.map((elem) => {
                                return (
                                  <MenuItem key={elem} value={elem}>
                                    {elem}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        )}

                      {questionType == "boolean" && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => nextQ("no")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            No
                          </Button>
                          <Button
                            onClick={(e) => nextQ("yes")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Yes
                          </Button>
                        </div>
                      )}
                      {(questionType == "string" ||
                        questionType == "number") && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => nextQ("next")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </span>
    </section>
  );
}
