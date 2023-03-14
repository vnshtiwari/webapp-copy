const BasicDetailsHeadings = [
  "Lets get you an account so you can come back your quote later",
  "Great! Applying for health insurance takes only 5 minutes. Ready to go?",
];

const ReferenceName = {
  firstName: "First Name",
  lastName: "Last Name",
  dob: "Date of Birth",
  gender: "Gender",
  mobile: "Mobile number",
  email: "Email",
  aadharContact: "Aadhar Number",
  aadharEkyc: "Aadhar Number",
  pan: "PAN",
};

const HealthInsuranceQuestion = [
  {
    heading: "",
    question: "Used any form of tobacco or nicotine products?",
    type: 1,
  },
  {
    heading: "",
    question: "How many cigarettes do you smoke everyday?",
    type: 2,
  },
  {
    heading: "",
    question: "How many years have you been smoking?",
    type: 2,
  },
  {
    heading: "Have you been...",
    question:
      "diagnosed with having protein and/or microalbumin in your urine?",
    type: 1,
  },
  {
    heading: "In the past 10 years...",
    question:
      "Have you been treated for any serious health conditions like heart disease, liver problems, HIV, cancer, or schizophrenia?",
    type: 1,
  },
  {
    heading: "In the past 10 years..",
    question: "Have you used hard drugs, or frequently used marijuana?",
    type: 1,
  },
];

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "10",
  },
  {
    value: 60,
    label: "30",
  },
  {
    value: 100,
    label: "50+",
  },
];

export { BasicDetailsHeadings, ReferenceName, HealthInsuranceQuestion, marks };
