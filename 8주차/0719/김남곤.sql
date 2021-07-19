-- 1. 사원 테이블과 부서 테이블에서 사원 번호와 사원 이름, 소속부서 번호, 소속부서 이름을 출력하도록 표준 inner join 코드를 생성하세요
SELECT e.empno,
       e.ename,
       e.deptno,
       d.dname
FROM   emp e,
       dept d
WHERE  e.deptno = d.deptno;

--2. 사원 테이블과 부서 테이블에서 사원 번호와 사원이름, 소속부서 번호와 소속부서 이름을 출력하도록 natural join 코드를 생성하세요.
SELECT  e.empno,
        e.ename,
        deptno,  -- 식별자 가질수 없다.
        d.dname
FROM    emp e NATURAL JOIN dept d;

--3. Player 테이블에서 정남일 선수 소속팀의 선수들에 대한 선수명, 포지션, 백넘버를 출력하는 서브쿼리를 작성하세요. 선수이름으로 오름차순 정렬
SELECT  p.player_name 선수명,
        p.POSITION 포지션 ,
        p.back_no 백넘버 
FROM    player p
WHERE   p.team_id = (
             SELECT p2.team_id
             FROM   player p2
             WHERE  p2.player_name = '정남일'
        )
ORDER BY p.player_name;


--4. 선수들 중에서 키가 평균 이하인 선수들의 선수명, 포지션, 백넘버를 출력하는 서브쿼리를 작성하세요. 선수이름 오름차순 정렬
SELECT  p.player_name 선수명,
        p.POSITION 포지션 ,
        p.back_no 백넘버 
FROM    player p
WHERE   p.height <= (
             SELECT avg(p2.height)
             FROM   player p2
        )
ORDER BY p.player_name;

--5. 선수테이블과 팀테이블을 조인하여, 선수 자신이 속한 팀의 평균 키보다 작은 선수들의 정보를 출력하는 연관 서브쿼리를 작성하세요. 선수명으로 오름차순 정렬
SELECT   t.team_name 팀명,
         p.team_id,
         p.player_name 선수명,
         p.POSITION 포지션,
         p.back_no 백넘버,
         p.HEIGHT 키 
FROM     player p, team t
WHERE    p.team_id = t.TEAM_ID
AND      p.height < (
             SELECT  avg(p2.height)
             FROM    player p2
             WHERE   p2.team_id = p.team_id
             GROUP BY p2.team_id
         )
ORDER BY p.player_name;

-- 6. 부서명과 업무명을 기준으로 사원수와 급여 합을 GROUP BY SQL 문장을 생성하세요, 부서, 업부별 오름차순정렬
SELECT   d.dname,
         e.job,
         count(*) AS 사원수,
         sum(e.sal) AS 급여합
FROM     dept d,
         emp  e
WHERE    d.deptno = e.deptno
GROUP BY d.dname, e.job
ORDER BY d.dname, e.job;

-- 7. 부서명과 업무명을 기준으로 집계한 일반적인 GROUP BY SQL 문장에 ROLLUP 함수를 사용하여 사원수와 급여합계에 대한 소계를 출력하세요
-- 부서, 업무별로 오름차순 정렬
SELECT   d.dname,
         e.job,
         count(*) AS 사원수,
         sum(e.sal) AS 급여합
FROM     dept d,
         emp e
WHERE    d.deptno = e.deptno
GROUP BY ROLLUP (d.dname, e.job);


--8. 사원 'JONES'인 직속상사인 사원번호, 사원이름, 직속상사번호를 조회하는 셀프조인을 작성하세요.
-- 관리자(MGR)가 'JONES'의 EMPNO인 행 조회
SELECT   e2.empno 사원번호,
         e2.ename 사원이름,
         e2.mgr   직속상사번호
FROM     emp e1,
         emp e2 
WHERE    e1.ename = 'JONES'
AND      e2.mgr = e1.empno;

--9. 홍길동 선수를 INSERT하려고 할때 PLAYER_ID값은 기존 최대값에 + 1을 더한 값으로 넣고자 합니다. VALUES절에 서브쿼리를 사용해 SQL을 작성하세요.
INSERT INTO player(player_id, player_name, team_id)
VALUES (
          (
           SELECT to_char(max(to_number(player_id)) + 1)
           FROM   player
          ), '홍길동','K06'
       )
;
-- 홍길동 조회 
SELECT player_id,
       player_name,
       team_id
FROM   player
ORDER BY player_id desc
;


-- 10. 선수 테이블의 포지션이 NULL인 선수들의 포지션을 ‘MF’로 수정하세요.

UPDATE   player p
SET      p.POSITION = 'MF'
WHERE    p.POSITION IS NULL;
