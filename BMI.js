export default class BMI{
  bmiCal(w,h,r){
    const val =  w/h**2;
    if(r === "asia"){
      if(val <= 18.5){
        return "Under weight";
      }
      if(val  > 18.5 && val <= 24.9){
        return "Normal weight";
      }
      if(val <= 29.9 && val > 24.9){
        return "Overweight";
      }
      if(val > 29.9){
        return "Obesity";
      }
    }
    else{
      if(val <= 19.5){
        return "Under weight";
      }
      if(val  > 19.5 && val <= 34.9){
        return "Normal weight";
      }
      if(val <= 39.9 && val > 34.9){
        return "Overweight";
      }
      if(val > 39.9){
        return "Obesity";
      }
    }
  }
}
