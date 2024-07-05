// Data arrays

const friends_news = [
    { category: '미정', name: '유지민', img: addIconUrl, progress: "" },
    { category: '풀스택', name: '김민지', img: addIconUrl, progress: "" },
    { category: '프론트', name: '김민지', img: addIconUrl, progress: "" },
    { category: '백엔드', name: '윤지수', img: addIconUrl, progress: "" }
];

const problems = [
    { problem: '제 능력을 못믿는 분들이 있는 경우에는 어떻게 해야할까요?' },
    { problem: '다른 분들에게 조언을 얻고싶어요.' },
    { problem: '제 능력을 못믿는 분들이 있는 경우에는 어떻게 해야할까요?' }
      ];

      const todolists = [
        { img: "profile.png", category: '프론트', name: '김민지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '프론트', name: '여예원', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '프론트', name: '이지연', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '프론트', name: '김수로', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '석탈해', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '김알지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '김알지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '김알지', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '김춘추', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '오태경', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '박유빈', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '벡', name: '유다현', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '장유빈', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '안현준', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '이순신', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '수정이', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '동덕이', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '덕성이', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '프론트', name: '서울여', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '프론트', name: '이대로', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '숙명이', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '백엔드', name: '성신요', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '아이린', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '미정', name: '고윤정', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '예다현', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '이아주', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' },
        { img: "profile.png", category: '풀스택', name: '최예빈', completeWork1: '완료된 일1 입력', completeWork2: '완료된 일2 입력', completeWork3: '완료된 일3 입력', completeWork4: '완료된 일4 입력' }
      ];

// Get DOM elements
const friendNews = document.getElementById('achiveDegree');
const problemCards = document.getElementById('problems');
const todoBlock = document.getElementById('friendToDo');
const filterButtons = document.querySelectorAll('.filter-btn');

// Function to create friend news cards
function createCard(category, pername, img, progress) {
    const friend_news_card = document.createElement('div');
    friend_news_card.classList.add('friend_news_card');

    const friendImg = document.createElement('img');
    friendImg.classList.add('perImg');
    friendImg.src = img;

    const cardName = document.createElement('p');
    cardName.classList.add('pername');
    cardName.textContent = pername;

    const cardCate = document.createElement('p');
    cardCate.classList.add('category');
    cardCate.textContent = category;
    if (category === '프론트') {
        cardCate.classList.add('c_front');
    } else if (category === '풀스택') {
        cardCate.classList.add('c_full');
    } else if (category === '백엔드') {
        cardCate.classList.add('c_back');
    } else if (category === '미정') {
        cardCate.classList.add('c_unselect');
    }

    const progressElement = document.createElement('div');
    progressElement.classList.add('degree');
    progressElement.textContent = progress;

    const iconRight = document.createElement('img');
    iconRight.classList.add('iconRight');
    iconRight.src = addIconUrl3;

    // Add click event to iconRight to navigate to index2.html
    iconRight.addEventListener('click', function () {
        window.location.href = 'index2.html'; // Replace 'index2.html' with your desired destination
    });

    friend_news_card.appendChild(friendImg);
    friend_news_card.appendChild(cardName);
    friend_news_card.appendChild(cardCate);
    friend_news_card.appendChild(progressElement);
    friend_news_card.appendChild(iconRight);

    return friend_news_card;
}


// Check if friends_news array is empty
if (friends_news.length === 0) {
    const noFriendsImage = document.createElement('img');
    noFriendsImage.src = addIconUrl2;
    noFriendsImage.classList.add('addfriend');
    friendNews.appendChild(noFriendsImage);
} else {
    friends_news.forEach(friend => {
        const card = createCard(friend.category, friend.name, friend.img, friend.progress);
        friendNews.appendChild(card);
    });
}

// Function to create problem cards
function create_P_Card(problem) {
    const pcard = document.createElement('div');
    pcard.classList.add('problemCard');

    const cardText = document.createElement('p');
    cardText.classList.add('problemText');
    cardText.textContent = problem;

    pcard.appendChild(cardText);

    return pcard;
}

// Append problem cards
// problems.forEach(item => {
//     const problem = create_P_Card(item.problem);
//     problemCards.appendChild(problem);
// });

// Function to create todo cards
function createCompleteCard(img, category, name, completeWork1, completeWork2, completeWork3, completeWork4) {
    const complete_card = document.createElement('div');
    complete_card.classList.add('friend');

    const friend_profile = document.createElement('div');
    friend_profile.classList.add('friend_profile');
    complete_card.appendChild(friend_profile);

    const rightImage = document.createElement('img');
    rightImage.src = addIconUrl3;
    rightImage.classList.add('friend_iconRight');
    friend_profile.appendChild(rightImage);

    const friendImg = document.createElement('div');
    friendImg.classList.add('friendImg');
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = 'Profile Image';
    friendImg.appendChild(imgElement);
    friend_profile.appendChild(friendImg);

    const friendName = document.createElement('p');
    friendName.classList.add('friendName');
    friendName.textContent = name;
    friend_profile.appendChild(friendName);

    const friend_category = document.createElement('p');
    friend_category.classList.add('friend_category', category === '프론트' ? 'fc_front' : category === '백엔드' ? 'fc_back' : category === '풀스택' ? 'fc_full' : 'fc_undefined');
    friend_category.textContent = category;
    friend_profile.appendChild(friend_category);

    const complete_friend_todo = document.createElement('div');
    complete_friend_todo.classList.add('complete_friend_todo');
    complete_card.appendChild(complete_friend_todo);

    const completeToDo_list = document.createElement('div');
    completeToDo_list.classList.add('completeToDo_list');
    complete_friend_todo.appendChild(completeToDo_list);

    const works = [completeWork1, completeWork2, completeWork3, completeWork4];
    works.forEach(work => {
        const completeToDo = document.createElement('div');
        completeToDo.classList.add('completeToDo');
        completeToDo_list.appendChild(completeToDo);

        const checked = document.createElement('div');
        checked.classList.add('checked');
        const checkImg = document.createElement('img');
        checkImg.src = addIconUrl4;
        checked.appendChild(checkImg);
        completeToDo.appendChild(checked);

        const complete_work = document.createElement('p');
        complete_work.classList.add('complete_work');
        complete_work.textContent = work;
        completeToDo.appendChild(complete_work);
    });

    return complete_card;
}


// Function to render todos
function renderTodos(category) {
    todoBlock.innerHTML = ''; // Clear existing cards

    if (category === '전체') {
        renderRandomTodos();
        return;
    }

    todolists
        .filter(todo => category === '전체' || todo.category === category)
        .slice(0, 4)
        .forEach(item => {
            const complete_card = createCompleteCard(item.img, item.category, item.name, item.completeWork1, item.completeWork2, item.completeWork3, item.completeWork4);
            todoBlock.appendChild(complete_card);
        });
}

// Function to render random todos
function renderRandomTodos() {
    const shuffledTodos = todolists.sort(() => 0.5 - Math.random()).slice(0, 4);
    shuffledTodos.forEach(item => {
        const complete_card = createCompleteCard(item.img, item.category, item.name, item.completeWork1, item.completeWork2, item.completeWork3, item.completeWork4);
        todoBlock.appendChild(complete_card);
    });
}

// Initial render
renderTodos('전체');

// Filter button event listeners
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.flex-box div');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // 스타일 초기화
            categories.forEach(c => {
                c.style.backgroundColor = '#F7F7F7';
                c.style.border = '2px solid #ABABAB';
            });

            // 선택된 카테고리 스타일 변경
            this.style.backgroundColor = '#F8F0FE';
            this.style.border = '2px solid #7D08D9';

            // 선택된 카테고리에 따른 할 일 필터링
            const selectedCategory = this.getAttribute('data-category');
            renderTodos(selectedCategory);
        });
    });
});
