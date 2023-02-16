let result = document.querySelector('.screen');
let num = document.querySelectorAll('.num');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');
let equal = document.querySelector('.equal');
let char = document.querySelectorAll('.char');

num.forEach((e)=> {
    e.addEventListener('click',()=> {
        result.innerHTML += e.innerHTML;
        if (e.innerHTML == '.') {
            e.classList.add('disable')
        }
    })
})

char.forEach((e)=> {
    e.addEventListener('click',()=> {
        result.innerHTML += e.innerHTML;
    document.querySelector('.dot').classList.remove('disable')

    })
})

equal.addEventListener('click',()=> {
    result.innerHTML = eval(result.innerHTML)
})

reset.addEventListener('click',()=> {
    result.innerHTML=''
    document.querySelector('.dot').classList.remove('disable')
})

del.addEventListener('click',()=> {
   let arr = result.innerHTML.split('');
   arr.pop();
   result.innerHTML=arr.join('');
})





let prog = document.querySelector('.prog')
let i = 1;
prog.addEventListener('click',()=> {
    i++;
    if (i == 2) {
        prog.classList.add('them-2');
        document.body.classList.add('them-2');
    }
    else if (i == 3) {
        prog.classList.add('them-3');
        prog.classList.remove('them-2');
        document.body.classList.remove('them-2');
        document.body.classList.add('them-3');

    }
    else {
        i=1
        prog.classList.remove('them-3');
        document.body.classList.remove('them-3');

    }
})