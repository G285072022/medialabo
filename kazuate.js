let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え (デバック用) : ' + kotae);

let kaisu = 0;

hantei();




function hantei() {
    
    let yoso = 4;
    kaisu = kaisu + 1;

   let span = document.querySelector('span#kaisu');
   span.textContent = kaisu;
    if(kaisu < 3){
    
    if(kotae === yoso) {
      let p = document.querySelector('p#result');
        p.textContent = '正解です。おめでとう！';
      } else if(kotae > yoso){
        let p = document.querySelector('p#result');
        p.textContent = 'まちがい．答えはもっと大きいですよ';
      } else if(kotae < yoso) {
        let p = document.querySelector('p#result');
        p.textContent = 'まちがい．答えはもっと小さいですよ';
      }
    }

    else if(kaisu === 3){
        if(kotae === yoso) {
          let p = document.querySelector('p#result');
          p.textContent = '正解です。おめでとう！';
          } else if(kotae !== yoso){
            let p = document.querySelector('p#result');
            p.textContent = 'まちがい。 残念でした。答えは '  + kotae + 'です。';
          }
    }
    else if(kaisu > 3){
      let p = document.querySelector('p#result');
      p.textContent = '答えは ' + kotae + 'でした。すでにゲームは終わっています。';

    }

}



