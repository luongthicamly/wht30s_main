import React from 'react';
import '../scss/Footer.scss';
function Footer(props) {
    return (
        <footer>
            <div className='footer-body'>
                <div className='footer-left'>
                    <p>what happened</p>
                    <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                    <p>[공지] 29CM 강남 스토어 영업 종료</p>
                    <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                    <p>[공지] iOS 10 이하 버전 지원 중단 안내</p>
                    <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                </div>
                <div className='footer-right'>
                    <div className='item-footer'>
                        <ul>
                            <li>about us</li>
                            <li>회사 소개</li>
                            <li>인재 채용</li>
                            <li>상시 할인 혜택</li>
                        </ul>
                    </div>
                    <div className='item-footer'>
                        <ul>
                            <li>my oder</li>
                            <li>내 주문</li>
                            <li>주문 배송</li>
                            <li>취소 / 교환 / 반품 내역</li>
                            <li>상품 리뷰 내역</li>
                            <li>증빙 서류 발급</li>
                        </ul>
                    </div>
                    <div className='item-footer'>
                        <ul>
                            <li>my account</li>
                            <li>회원 정보 수정</li>
                            <li>회원 등급</li>
                            <li>마일리지 현황</li>
                            <li>쿠폰</li>
                        </ul>
                    </div>
                    <div className='item-footer'>
                        <ul>
                            <li>help</li>
                            <li>1 : 1 상담 내역</li>
                            <li>상품 Q & A 내역</li>
                            <li>공지 사항</li>
                            <li>자주하는 질문</li>
                            <li>고객의 소리</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-left'>
                    <ul className='first-bottom'>
                        <li>© 2020-2021 what happened corp</li>
                        <li>(주) 왓헤픈</li>
                        <li>대표자 : 홍길동</li>
                        <li>사업자 등록번호 : 356-00-00000</li>
                        <li>test0101@what happened.co.kr</li>
                    </ul>
                    <ul>
                        <li>서울특별시 강남구 도산대로 8길 17</li>
                        <li>FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul>
                        <li>
                            <img src='./assets/images/e-snsicon_01.png' alt='snsicon_01' />
                        </li>
                        <li>
                            <img src='./assets/images/e-snsicon_02.png' alt='snsicon_02' />
                        </li>
                        <li>
                            <img src='./assets/images/e-snsicon_03.png' alt='snsicon_03' />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;