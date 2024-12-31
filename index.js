const messages = [
    "사랑하는 자여 네 영혼이 잘 됨 같이 네가 범사에 잘 되고 강건하기를 내가 간구하노라 (요한삼서 1:2)",
    "그러나 이 모든 일에 우리가 사랑하시는 이로 말미암아 우리가 넉넉히 이기느니라 (로마서 8:37)",
    "이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 환난을 당하나 담대하라 내가 세상을 이기었노라 (요한복음 16:33)",
    "우리가 무엇이든지 구하는 바를 들으시는 줄을 안즉 우리가 그에게 구한 그것을 얻은 줄을 또한 아니라 (요한일서 5:15)",
    "주께서 내게 응답하시고 나의 구원이 되셨으니 내가 주께 감사하리이다 (시편 118:21)",
    "웃음으로 네 입에, 즐거운 소리로 네 입술에 채우시리니 (욥기 8:21)",
    "하나님은 나의 구원이시라 내가 의뢰하고 두려움이 없으리니 (이사야 12:2)",
    "우리가 알거니와 하나님을 사랑하는 자 곧 그 뜻대로 부르심을 입은 자들에게는 모든것이 합력하여 선을 이루느니라 (로마서 8:28)",
    "여호와는 네게 복을 주시고 너를 지키시기를 원하며 (민수기 7:24)",
    "저희가 평온함을 인하여 기뻐하는 중에 여호와께서 저희를 소원의 항구로 인도하시는도다 (시편 107:30)",
    "내가 여호와께 구하매 내게 응답하시고 내 모든 두려움에서 나를 건지셨도다 (시편 34:4)",
    "내가 네게 명한 것이 아니냐 강하고 담대하라 두려워하며 놀라지말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라 (여호수아 1:9)",
    "네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니 (이사야 43:2)",
    "내가 천국 열쇠를 네게 주리니 네가 땅에서 무엇이든지 매면 하늘에서도 매일 것이요 땅에서 무엇이든지 풀면 하늘에서도 풀리리라 하시고 (마태복음 16:19)"
];

let isAnimating = false; // 애니메이션 진행 상태 변수

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.
    isAnimating = true; // 애니메이션이 시작됨을 표시합니다.

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false; // 애니메이션이 끝났음을 표시합니다.
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return; // 애니메이션 중이면 함수를 종료합니다.

    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVisibility(postcardElement, false);
    toggleVisibility(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVisibility(nameElement, true);
        });
        toggleVisibility(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage();
};
