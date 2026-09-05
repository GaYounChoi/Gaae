// ▼▼▼ 프로젝트를 추가하려면 이 배열에 객체 하나만 추가하면 됩니다 ▼▼▼
// id: 프로젝트 고유 이름 (영문/숫자, 공백 없이)
// name: 상세페이지 제목으로 표시될 이름
// thumbnail: 메인 그리드에 보여줄 썸네일 이미지 경로. 아직 없으면 '' (빈 문자열)로 두면 회색 박스로 표시됨
// images: 상세페이지에 순서대로 들어갈 이미지 경로 배열
// description: 상세페이지 설명 텍스트 (줄바꿈은 <br> 사용)

const projects = [
    {
        id: 'ava',
        name: 'AVA',
        thumbnail: '',
        images: ['images/ava-1.jpg', 'images/ava-2.jpg'],
        description: `홍익대학교와 국민대학교 AI 소모임 연합 프로젝트로, AR 글라스와 AI를 활용한 패션 브랜딩 프로젝트를 진행했습니다.<br>일상에서 발견한 패션을 아바타에 적용하고 다양한 스타일을 비교하며, 자신만의 취향을 탐색할 수 있는 경험을 제안합니다.`
    },
    {
        id: 'duldeum',
        name: 'Duldeum',
        thumbnail: 'thumbnail/duldeum.webp',
        images: [
            'images/1.webp',
            'images/2.webp',
            'images/3.webp',
            'images/4.webp',
            'images/5.webp',
            'images/6.webp',
            'images/7.webp',
            'images/8.webp',
            'images/9.webp',
            'images/10.webp'
        ],
        description: `여기에 Duldeum 프로젝트 설명 텍스트를 넣어주세요.`
    }
    // 새 프로젝트를 추가하고 싶으면 위 형식 그대로 콤마(,) 찍고 아래에 하나 더 추가하세요.
];
