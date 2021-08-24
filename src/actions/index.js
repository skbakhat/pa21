export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    paylode:num
  }
}

export const decNumber = () => {
  return {
    type: "DECREMENT",
    
  }
}

export const reSet = () => {
  return {
    type: "RESET"
  }
}
