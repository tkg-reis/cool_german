'use strict';
{
    // DOM
    const german = document.querySelector('input');
    const addBtn = document.querySelector('.add-btn');
    const removeBtn = document.querySelector('.remove-btn');
    const li = document.querySelector("li");
    const ul = document.querySelector('ul');
    // const longWord = "DonaudampferElektrizitätHauptfabrikBauabteilungUntergebeneGewerkschaft";
    // console.log(longWord.length);

    // 文字数を表示する。
    german.onkeyup = function() {
        const inputLength = document.querySelector('#inputLength');
        let germanLen = german.value;
        let strLen = germanLen.length;
        inputLength.innerHTML = strLen + "words/70words";
    }

    // ドイツ語の生成
    addBtn.addEventListener('click',() => {
        if(german.value === "" || german.value === null){
            return german.value = "";
        } else {
            let createGerman = document.createElement('li');
            let str = german.value;
            let upStr = str.toUpperCase();
            createGerman.textContent = upStr;
            german.value = '';
            german.focus();
            // 文字列の一致
            const sch = /SCH/;
            const ver = /VER/;
            const ei = /EI/;
            const ch = /CH/;
            const sp = /SP/;
            const au = /AU/;
            const eu = /EU/;
            const ie = /IE/;
            const st = /ST/;
            // ウムラウト
            const oe = /OE/;
            const ue = /UE/;
            const ae = /AE/;
            const aiueo = /[AIUEO]/;
            let randomNumber = Math.floor(Math.random() * 10 );
            // 生成されたドイツ語の得点を表示。(不可算)
            if(sch.test(upStr) === true || ver.test(upStr) === true){
                let point1 = randomNumber + 99 ;
                ul.textContent = point1 + "points!";
                ul.appendChild(createGerman);
            } else if (ei.test(upStr) === true || ch.test(upStr) === true || st.test(upStr) === true) {
                let point2 = randomNumber + 88 ;
                ul.textContent = point2 + "points!"; 
                ul.appendChild(createGerman);
            } else if (au.test(upStr) === true || eu.test(upStr) === true) {
                let point3 = randomNumber + 77 ;
                ul.textContent = point3 + "points!";
                ul.appendChild(createGerman);
            } else if(ie.test(upStr) === true) {
                let point4 = randomNumber + 50 ;
                ul.textContent = point4 + "points!";
                ul.appendChild(createGerman);
            }else if(ae.test(upStr) === true || oe.test(upStr)===true || ue.test(upStr) === true) {
                let point8 = randomNumber + 40 ;
                ul.textContent = point8 + "points!";
                ul.appendChild(createGerman);
            } else if(sp.test(upStr) === true) {
                let point5 = randomNumber + 30;
                ul.textContent = point5 + "points";
                ul.appendChild(createGerman);
            } else if(!(aiueo.test(upStr) === true)) {
                let point6 = randomNumber - 10;
                ul.textContent = point6 + "point";
                ul.appendChild(createGerman);
            } else {
                let point7 = randomNumber;
                ul.textContent = point7 + "points";
                ul.appendChild(createGerman);
            }
            // 生成されたドイツ語の得点を表示。(可算)
            
        }
    });
    // 生成したドイツ語と文字数を削除する
    removeBtn.addEventListener('click', () => {
        // ul.nextElementSibling.removeChild(li);
        // ul.children.textContent = "";
        // ul.removeChild(li);
        // this.parentNode.remove();
        // const deleteTarget = ul.nextElementSibling;
        // ul.removeChild(deleteTarget);
        const inputLength = document.querySelector('#inputLength');
        const li = document.querySelector('li');
        ul.textContent = "";
        inputLength.innerHTML = "input word";
        ul.removeChild(li);
    });
    // ローカル変数の越境は不可能↓
    // 関数式の越境は可能
    function abc (callback) {
        console.log('123');
        const tsch = /TSCH/;
        callback();
    }
    abc(function back() {
        console.log('456');
        console.log(tsch.length);
    });
}