import styled from "styled-components";
import Center from "./Center";

const StyledFooter = styled.header`
  margin-top: 5rem;
  background-color: #333;
  @media screen and (min-width: 768px) {
  }
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Pretendard Variable", Pretendard;
  font-weight: 400;
  font-size: 0.8rem;
  align-items: center;
  color: whitesmoke;
  background-color: #333;
  div:last-child {
    margin-top: 1rem;
    color: #aaa;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    font-family: "Pretendard Variable", Pretendard;
    font-weight: 400;
    font-size: 1rem;
    color: whitesmoke;
    background-color: #333;
  }
`;

const Title = styled.div`
  font-family: "Pretendard Variable", Pretendard;
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Wraper>
          <FooterWrapper>
            <Title>고객센터</Title>
            <div>(평일 10:00 ~ 17:00, 점심 12:00 ~13:00)</div>
            <div>전화번호 : 010-1234-5678</div>
            <div>
              이용 약관ㅣ 개인정보처리방침ㅣ 사업자정보확인ㅣ 환불정책ㅣ
              공지사항ㅣ FAQ
            </div>
            <div>
              모비커스 주식회사 대표이사 홍길동 주소: 서울특별시 서초구 00-00,
              3층 사업자등록번호 : 000-00-00000
            </div>
            <div>
              통신판매업신고번호 :0000-서울-00000 개인정보보호책임자 : 홍길동
            </div>
            <div>Copyright © 모비커스 All Right Reserved.</div>
          </FooterWrapper>
        </Wraper>
      </Center>
    </StyledFooter>
  );
}
