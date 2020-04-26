const go = (elem) => {
    window.scroll({       // 1
        top: document
      .querySelector( elem )
        .offsetTop,       // 2
        left: 0,
        behavior: 'smooth'// 3
     });
  }
  function soma(){
    var txt1=window.document.getElementById('numero1')
    var txt2=window.document.getElementById('numero2')
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var s = n1+n2
    resultado.innerText = (s)


  }