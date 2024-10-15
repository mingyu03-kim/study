// 별도 값이 없으면, 숫자형 값으로 초기화된다. (값은 인덱스)
enum Shoes {
    Nike = '나이키', 
    Adidas = '아디다스' 

}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'


// 왜 쓰는가?
// 사용예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}


function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답')
    }
    if (answer === Answer.No) {
        console.log('오답')
    }
}

// enum에서 제공하는 데이터만 집어넣을 수 있다.
// dropdown에서 주로 목록이 필요할 때 사용한다.
askQuestion(Answer.Yes);