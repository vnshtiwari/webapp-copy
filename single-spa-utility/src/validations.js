const emailIsValid = (email) => {
    if (!(typeof email === "string" || email instanceof String)) {
      console.error(`string expected, ${typeof email} provided`)
      return false
    }
    const expression = /\S+@\S+\.\S+/
    return expression.test(email)
  }