let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え (デバック用) : ' + kotae);

let kaisu = 0;

let btn = document.querySelector('#print');
btn.addEventListener('click', hantei); 

function hantei() {

  
    
    
  if(kaisu < 4){
    kaisu = kaisu + 1;
  }

  let n = document.querySelector('input[name="number"]');
  let number = n.value;

   let span = document.querySelector('span#kaisu');
   span.textContent = kaisu;

   let span1 = document.querySelector('span#answer');
   span1.textContent = number;
    
   if(kaisu < 3){
     if(kotae == number) {
      let p = document.querySelector('p#result');
        p.textContent = '正解です。おめでとう！';
      } else if(kotae > number){
        let p = document.querySelector('p#result');
        p.textContent = 'まちがい．答えはもっと大きいですよ';
      } else if(kotae < number) {
        let p = document.querySelector('p#result');
        p.textContent = 'まちがい．答えはもっと小さいですよ';
      }
    }

    else if(kaisu === 3){
        if(kotae == number) {
          let p = document.querySelector('p#result');
          p.textContent = '正解です。おめでとう！';
          } else if(kotae !== number){
            let p = document.querySelector('p#result');
            p.textContent = 'まちがい。 残念でした。答えは '  + kotae + 'です。';
          }
    }
    else if(kaisu > 3){
      let p = document.querySelector('p#result');
      p.textContent = '答えは ' + kotae + 'でした。すでにゲームは終わっています。';

    }

}



