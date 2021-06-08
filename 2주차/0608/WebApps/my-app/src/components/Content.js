import React, { useState } from 'react';

// 클래스 컴포넌트에서 함수 형태로 바꾸었기 때문에 render가 필요가 없다.
// export default를 앞에 세팅해도 된다. 이러면 굉장히 편해진다.
// 이것을 hooks 형태라고 한다.
// useState나 useEffect를 사용하기 위해선 다음과 같이 작성해야 한다.
export default function Content() {
  // textTest와 변경textTest는 useState를 이용해 값을 주고 변경한다.
  let [ textTest, setTextTest ] = useState([ "HTML", "React" ]);
  return(
    <article>
      <h2>{textTest[0]}</h2>
      <p>HTML이 가장 시웠어요. 리액트 써보시면 좋아요</p>
    </article>
  );
}