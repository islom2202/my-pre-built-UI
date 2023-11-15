
  
  let hover1 = document.querySelectorAll(".hover1 li img")
  hover1.forEach((el) => {
    el.onmouseover = (e) => {
      hover1.forEach((el) => (el.style.filter = "grayscale(100%)"))
      e.target.style.filter = "grayscale(0)"
      console.log(1)
    }
  })
  hover1.forEach(
    (el) =>
      (el.onmouseout = () => {
        hover1.forEach((el) => (el.style.filter = "grayscale(0)"))
      })
  )

