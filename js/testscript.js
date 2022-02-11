function formatMessage(message, maxLength) {
    const minresult = message.length
    let result = message.slice(maxLength, minresult);
    // Change code below this line
    if(minresult < maxLength){
      result = message;
    } else if(minresult > maxLength){
  
      result = message.replace(result, "...")
    }
    /// Change code above this line
    return result;
  }
  
console.log(formatMessage("Curabitur ligula sapien", 10));
  