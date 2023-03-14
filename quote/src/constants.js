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
  pincode: "PIN Code",
};

const HealthInsuranceQuestion = [
  {
    heading: "Have you ever...",
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

const marks = {
  age: [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ],
  height: [
    {
      value: 0,
      label: "0 CM",
    },
    {
      value: 50,
      label: "100 CM",
    },
    {
      value: 100,
      label: "200 CM",
    },
  ],
};

export { BasicDetailsHeadings, ReferenceName, HealthInsuranceQuestion, marks };
