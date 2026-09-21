// 개정 시 시행일만 갱신한다 (최초 작성일은 고정).
const EFFECTIVE_DATE = "2026년 9월 21일";
const FIRST_WRITTEN_DATE = "2026년 7월 29일";

export default function PrivacyPolicyPage() {
  return (
    <>
      
      <main>
        <section >
          <div >
            <h1 >
              개인정보처리방침
            </h1>
            <p >
              시행일 : {EFFECTIVE_DATE} ｜ 최초 작성일 : {FIRST_WRITTEN_DATE}
            </p>

            <div >
              <section>
                <h2 >1. 방침의 주체와 적용 범위</h2>
                <p >
                  본 방침은 <strong >letspets</strong>
                  (개발자 : 4sizn, 1인 제작)가 배포하는 아래 애플리케이션과 본
                  웹사이트에 적용됩니다.
                </p>
                <ul >
                  <li >
                    <h3 >Garden Eel Cove</h3>
                    <p >
                      바탕화면 데스크톱 앱 ｜ macOS, Windows ｜ GitHub Releases 배포
                    </p>
                  </li>
                  <li >
                    <h3 >Lonely Candle</h3>
                    <p >
                      모바일 앱 ｜ Android, iOS ｜ GitHub Releases 배포 (APK),
                      App Store
                    </p>
                  </li>
                  <li >
                    <h3 >Swing Golf</h3>
                    <p >
                      모바일 게임 ｜ iOS ｜ App Store 배포
                    </p>
                  </li>
                  <li >
                    <h3 >모아</h3>
                    <p >
                      모바일 앱 ｜ iOS ｜ App Store 배포
                    </p>
                  </li>
                  <li >
                    <h3 >지뢰찾기:구름</h3>
                    <p >
                      모바일 앱 ｜ iOS ｜ App Store 배포
                    </p>
                  </li>
                  <li >
                    <h3 >유리 카메라</h3>
                    <p >
                      모바일 앱 ｜ iOS ｜ App Store 배포
                    </p>
                  </li>
                  <li >
                    <h3 >letspets 웹사이트</h3>
                    <p >
                      본 사이트 ｜ 정적 페이지
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 >
                  2. 수집·처리하는 정보
                </h2>
                <p >
                  Garden Eel Cove와 모아, 지뢰찾기:구름, 유리 카메라는 광고·분석 SDK를
                  포함하지 않습니다. 모아와 지뢰찾기:구름, 유리 카메라는 네트워크 통신을
                  하지 않으며, 사진과 영상, 분석 결과를 서버로 보내지 않습니다. 세 앱 모두
                  계정을 만들지 않습니다. Lonely Candle과
                  Swing Golf도 계정, 연락처, 위치, 사진·파일, 결제 정보를 직접
                  수집하거나 요구하지 않습니다. 다만 두 앱에 표시되는 광고를 제공·측정·
                  사기 방지하기 위해 Google Mobile Ads SDK(AdMob)가 아래 정보를
                  자동으로 처리할 수 있습니다.
                </p>
                <ul >
                  <li>광고 식별자와 기기·앱 정보</li>
                  <li>IP 주소 등 네트워크 정보</li>
                  <li>광고 표시·상호작용 정보 및 광고 성능 측정 정보</li>
                  <li>광고 제공 과정의 진단·사기 방지 정보</li>
                </ul>
                <p >
                  이 정보는 Google이 광고 제공, 측정, 보안 및 정책 준수를 위해
                  처리하며, 처리 범위와 보관 방식에는 Google의 개인정보처리방침이
                  적용됩니다. letspets는 광고 SDK가 수집한 원시 식별자에 접근하거나
                  이를 판매하지 않습니다.
                </p>
              </section>

              <section>
                <h2 >
                  3. 민감한 권한 접근 : 마이크와 동작 센서
                </h2>
                <p >
                  Lonely Candle은 촛불을 입으로 불어서 끄는 상호작용을 위해, Swing
                  Golf는 기기를 실제로 휘두르는 스윙을 읽기 위해 아래 권한을
                  사용합니다. 모든 경우 입력값은 기기 안에서 즉시 계산에 쓰인 뒤
                  버려지며, 저장하거나 외부로 전송하지 않습니다.
                </p>
                <div >
                  <div >
                    <h3 >
                      마이크 (Android RECORD_AUDIO)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        바람 세기를 판정해 불꽃을 흔들거나 끕니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        마이크 입력의 실시간 음량(RMS)만 읽어 바람 세기 값으로
                        변환합니다. 음성 인식을 하지 않으며, 무엇을 말하는지 알 수
                        없습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        녹음 파일을 만들지 않고, 오디오를 기기에 저장하지 않으며,
                        기기 밖으로 전송하지 않습니다.
                      </li>
                      <li>
                        <strong >거부 시</strong> :
                        마이크 권한을 허용하지 않아도 앱은 정상 동작하며, 불어서
                        끄는 기능만 동작하지 않습니다. 화면의 심지를 눌러도 촛불을
                        끌 수 있습니다.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      동작 센서 (자이로스코프, 가속도계, 중력)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        Lonely Candle은 기기를 기울이면 불꽃이 중력 방향으로
                        출렁이게 합니다. Swing Golf는 팔을 휘두르는 동작의 세기를
                        읽어 공을 치는 파워로 씁니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        현재 기울기·가속도 값만 그 프레임의 화면 표현과 파워 계산에
                        사용합니다. Android와 iOS 모두 동작 센서는 별도 권한이
                        필요하지 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        센서 값 자체는 저장하거나 전송하지 않습니다. Swing Golf의
                        스윙 감도 설정과 캘리브레이션 값만 기기 안에 남습니다(아래
                        4항).
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      사진 보관함 읽기 (모아, iOS 사진 접근 권한)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        보관함에 쌓인 스크린샷을 내용별 폴더와 태그로 정리합니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        iOS가 스크린샷으로 표시한 이미지만 읽습니다. 일반 사진,
                        Live Photo, 화면 녹화는 읽지 않습니다. 글자 인식과 이미지
                        분석은 앱에 포함된 모델과 iOS의 기기 내 기능으로 아이폰
                        안에서 끝납니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        사진 원본을 복사하거나 변경하지 않고, 사진 앱의 앨범도
                        건드리지 않습니다. 이미지와 인식한 글자를 기기 밖으로
                        전송하지 않습니다.
                      </li>
                      <li>
                        <strong >거부 시</strong> :
                        권한을 허용하지 않아도 앱은 열리며, 샘플 화면으로 기능을
                        둘러볼 수 있습니다. 일부만 허용하면 허용한 스크린샷만
                        정리합니다.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      카메라 (지뢰찾기:구름, iOS 카메라 권한)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        하늘을 촬영해 사진 속 구름 모양으로 지뢰찾기 판을 만듭니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        촬영한 사진의 구름 영역 판독은 앱에 포함된 모델로 아이폰
                        안에서 끝납니다. 사진 보관함을 읽지 않고, 촬영한 사진을
                        보관함에 저장하지도 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        사진과 판독 결과를 기기 밖으로 전송하지 않습니다. 판을 만든
                        뒤에는 촬영 임시 파일 삭제를 시도합니다. 앱이 비정상 종료되면
                        임시 파일이 남을 수 있고, 이 경우 앱을 삭제하면 함께
                        제거됩니다.
                      </li>
                      <li>
                        <strong >거부 시</strong> :
                        촬영으로 판을 만들 수 없습니다. 권한 안내에서 시스템 앱
                        설정으로 이동해 다시 허용할 수 있습니다.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      기기 방향 (지뢰찾기:구름, 회전 센서)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        수집한 구름을 휴대폰이 향한 방향의 하늘에 배치하고 다시
                        찾아볼 수 있게 합니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        운영체제가 계산한 방향 값만 화면을 그리는 데 사용합니다.
                        별도 권한이 필요하지 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        센서 값 자체는 저장하거나 전송하지 않습니다. 구름을 걸어 둔
                        방향만 기기 안의 도감에 남습니다(아래 4항).
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      카메라 (유리 카메라, iOS 카메라 권한)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        눈앞의 장면을 패턴 유리 너머로 보여 주고, 화면에 보이는
                        그대로 사진과 동영상을 촬영합니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        유리 굴절 계산은 아이폰의 GPU에서 매 프레임 끝납니다.
                        영상 프레임을 앱 밖으로 보내지 않고, 얼굴이나 사물을
                        인식하지도 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        촬영하지 않은 미리보기 프레임은 저장하지 않습니다. 촬영한
                        결과물만 아래 사진 보관함 항목대로 처리합니다. 카메라
                        권한을 거부하면 앱에 포함된 샘플 사진으로 효과를 볼 수
                        있습니다.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      마이크 (유리 카메라, iOS 마이크 권한)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        동영상을 녹화할 때 주변 소리를 함께 담습니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        녹음한 소리는 그 자리에서 영상 파일에 실립니다. 음성을
                        인식하거나 분석하지 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        완성한 영상 파일 안에만 남고 기기 밖으로 전송하지 않습니다.
                        권한을 거부하면 소리 없는 영상으로 녹화합니다.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      사진 보관함 저장 (유리 카메라, iOS 사진 추가 권한)
                    </h3>
                    <ul >
                      <li>
                        <strong >사용 목적</strong> :
                        촬영한 사진과 동영상을 이용자의 사진 보관함에 저장합니다.
                      </li>
                      <li>
                        <strong >처리 방식</strong> :
                        추가 권한만 사용하며 보관함을 읽지 않습니다. 이용자가 직접
                        사진을 불러와 효과를 보는 경우에는 운영체제의 사진 선택
                        화면을 쓰므로 앱이 보관함 전체에 접근하지 않습니다.
                      </li>
                      <li>
                        <strong >저장·전송</strong> :
                        저장은 이용자의 기기 안에서만 일어납니다. 보관함 저장에
                        실패하면 결과물을 앱 안에 남겨 두고 다시 저장하거나 공유할
                        수 있게 합니다.
                      </li>
                    </ul>
                  </div>
                </div>
                <p >
                  Garden Eel Cove는 마이크, 카메라, 위치 등 민감한 권한을 사용하지
                  않습니다. 마우스 커서 위치는 장어가 도망갈지 판단하기 위해 화면
                  좌표로만 참조하며 기록하지 않습니다.
                </p>
              </section>

              <section>
                <h2 >4. 기기에 저장되는 정보</h2>
                <ul >
                  <li>
                    <strong >Garden Eel Cove</strong> :
                    잡은 장어 수와 먹인 밥 수는 실행 중 메모리에만 존재하며, 앱을
                    종료하면 사라집니다. 별도의 저장 파일을 만들지 않습니다.
                  </li>
                  <li>
                    <strong >
                      Garden Eel Cove (Windows 한정)
                    </strong>{" "}
                    : 창의 클릭 통과 여부를 판단하는 내부 상태값 하나를 앱 데이터
                    폴더의 파일에 기록합니다. 이용자를 식별할 수 있는 정보가 아닙니다.
                  </li>
                  <li>
                    <strong >Lonely Candle</strong> :
                    촛불의 실제 소화 횟수와 광고 표시 주기 상태를 앱 저장 영역에
                    기록합니다. 이 값은 기기 안에서만 사용되며 이용자를 식별하지
                    않습니다. 앱을 삭제하면 함께 제거됩니다.
                  </li>
                  <li>
                    <strong >모아</strong> : 스크린샷에서
                    인식한 글자, 자동으로 정한 분류와 태그, 이용자가 고친 제목·폴더·
                    즐겨찾기를 아이폰 안의 앱 저장 영역에만 기록합니다. 이 파일은
                    iCloud 백업에서 제외하며, 앱을 삭제하면 함께 사라집니다. 사진
                    원본은 영향을 받지 않습니다.
                  </li>
                  <li>
                    <strong >지뢰찾기:구름</strong> :
                    완성한 구름 조각의 모양과 난이도, 성공 기록, 걸어 둔 방향과
                    거리를 아이폰 안의 앱 저장 영역에만 기록합니다. 진행 중이던
                    판을 복구하기 위한 직전 상태도 같은 영역에 남습니다. 이용자를
                    식별할 수 있는 정보가 아니며, 앱을 삭제하면 함께 사라집니다.
                    운영체제 설정에 따라 이 파일이 기기 백업에 포함될 수 있습니다.
                  </li>
                  <li>
                    <strong >유리 카메라</strong> :
                    고른 유리 패턴과 다이얼 값(셀 크기, 굴곡, 두께 등)을 아이폰 안의
                    앱 저장 영역에만 기록합니다. 촬영한 사진과 영상은 사진 보관함에
                    넣기 전 앱의 임시 영역에 잠시 머무르며, 보관함 저장이 끝나면
                    정리합니다. 이용자를 식별할 수 있는 정보가 아니며, 앱을 삭제하면
                    설정과 임시 파일이 함께 사라집니다.
                  </li>
                  <li>
                    <strong >Swing Golf</strong> : 홀별
                    최고 기록(타수·시간), 스윙·퍼터 감도 설정, 캘리브레이션으로
                    등록한 최대 스윙 값, 게임 모드 선택을 기기 안의 앱 저장
                    영역에만 기록합니다. 라운드 후 만드는 스코어 카드 이미지도
                    기기에 저장되며, 공유는 이용자가 직접 선택할 때만 일어납니다.
                    모두 이용자를 식별할 수 있는 정보가 아니고, 앱을 삭제하면 함께
                    사라집니다.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >5. 제3자 제공 및 광고 동의</h2>
                <p >
                  letspets는 이용자 정보를 직접 판매하거나 광고주에게 제공하지
                  않습니다. Lonely Candle과 Swing Golf는 Google Mobile Ads SDK를 통해
                  광고를 제공하며, Google은 위 2항의 정보를 자체 개인정보처리방침에
                  따라 처리할 수 있습니다. Google의 처리 방식은{" "}
                  <a
                    
                    href="https://policies.google.com/privacy"
                  >
                    Google 개인정보처리방침
                  </a>
                  에서 확인할 수 있습니다.
                </p>
                <p >
                  두 앱은 필요한 지역에서 Google User Messaging Platform(UMP)을 통해
                  광고 관련 동의를 요청하고, 동의 상태를 확인할 수 없거나 동의가
                  필요한데 완료되지 않은 경우 광고 요청을 시작하지 않습니다. 동의
                  선택과 관련한 안내·철회 경로는 Google이 제공하는 동의 화면에
                  표시됩니다.
                </p>
                <ul >
                  <li>
                    <strong >GitHub</strong> : 설치
                    파일을 GitHub Releases로 배포합니다. 파일을 내려받을 때의 접속
                    기록은 GitHub이 처리합니다.
                  </li>
                  <li>
                    <strong >Apple App Store</strong> :
                    Swing Golf, 모아, 지뢰찾기:구름, 유리 카메라, iOS용 Lonely Candle을
                    App Store로 배포합니다.
                    설치·구매 내역과 기기 정보는 Apple이 처리하며, 개발자는 Apple이
                    제공하는 집계된 통계만 볼 수 있습니다.
                  </li>
                  <li>
                    <strong >Google Fonts</strong> : 본
                    웹사이트는 아이콘 표시를 위해 Google Fonts에서 아이콘 폰트를
                    불러옵니다. 이 과정에서 방문자의 IP 주소와 브라우저 정보가
                    Google에 전달될 수 있습니다. 본문 글꼴은 사이트 자체에서 제공하므로 추가 요청이 발생하지 않습니다.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >6. 웹사이트 이용 정보</h2>
                <p >
                  본 웹사이트는 쿠키를 사용하지 않고, 브라우저 저장소에 데이터를
                  기록하지 않으며, 접속 분석 도구를 설치하지 않았습니다. 방문자를
                  식별하거나 추적하지 않습니다.
                </p>
                <p >
                  본 웹사이트는 Vercel Inc.의 호스팅 서비스로 제공됩니다. 서비스
                  운영에 필요한 표준 접속 기록(요청 시각, IP 주소 등)은 Vercel이
                  처리하며, 이 부분은{" "}
                  <a
                    
                    href="https://vercel.com/legal/privacy-policy"
                  >
                    Vercel의 개인정보 보호 정책
                  </a>
                  을 따릅니다. letspets는 이 기록에 접근해 방문자를 분석하지
                  않습니다.
                </p>
              </section>

              <section>
                <h2 >
                  7. 데이터 보관 기간과 삭제
                </h2>
                <ul >
                  <li>
                    letspets는 계정·연락처 등 이용자 데이터를 자체 서버에 저장하지
                    않습니다. 다만 Lonely Candle과 Swing Golf의 광고 제공 과정에서
                    Google이 처리하는 정보의 보관·삭제는 Google의 개인정보처리방침을
                    따릅니다.
                  </li>
                  <li>
                    마이크와 센서 입력은 화면을 그리는 즉시 사용되고 폐기되며,
                    어디에도 남지 않습니다.
                  </li>
                  <li>
                    기기에 남는 정보(위 4항)는 앱을 삭제하면 함께 제거됩니다.
                    Windows의 상태 파일은 앱 데이터 폴더를 지우면 삭제됩니다.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >8. 안전한 데이터 처리</h2>
                <p >
                  letspets는 계정·연락처 정보를 자체 서버에 저장하지 않습니다. Lonely
                  Candle과 Swing Golf의 광고 요청은 TLS가 적용된 Google Mobile Ads SDK를
                  통해 처리되며, Google이 처리하는 광고 정보의 보안은 Google의 정책과
                  기술적 보호조치를 따릅니다.
                </p>
                <p >
                  설치 파일과 관련해 밝혀 둘 사항이 있습니다. 현재 macOS 빌드는
                  자체 서명(adhoc), Windows 빌드는 코드 서명이 되어 있지 않아 설치
                  시 Gatekeeper 또는 SmartScreen 경고가 표시됩니다. 파일을 내려받을
                  때는 위 GitHub Releases 경로에서만 받으시기를 권합니다.
                </p>
              </section>

              <section>
                <h2 >9. 아동의 개인정보</h2>
                <p >
                  letspets는 연령을 묻거나 저장하지 않습니다. 다만 Lonely Candle과
                  Swing Golf의 광고 SDK는 위 2항에 적힌 정보를 처리할 수 있습니다. 보호자는
                  자녀의 앱 사용과 광고 관련 선택에 관한 문의를 아래 연락처로
                  보내실 수 있습니다.
                </p>
              </section>

              <section>
                <h2 >10. 방침 변경</h2>
                <p >
                  본 방침이 변경되면 이 페이지에 개정 내용과 시행일을 게시합니다.
                  데이터 처리 방식이 실질적으로 바뀌는 경우에는 변경 사항을 시행일
                  전에 안내합니다.
                </p>
              </section>

              <section>
                <h2 >11. 문의</h2>
                <p >
                  본 방침이나 개인정보 처리에 관한 문의는 아래 이메일로 보내
                  주시면 확인합니다. 기술적인 내용은 GitHub 이슈로 남겨 주셔도
                  됩니다.
                </p>
                <div >
                  <p >
                    개발자 : 4sizn (letspets)
                  </p>
                  <a
                    
                    href="mailto:4sizn@naver.com"
                  >
                    <span >mail</span>
                    4sizn@naver.com
                  </a>
                  <a
                    
                    href="https://github.com/4sizn/gardeneel-desktop/issues"
                  >
                    github.com/4sizn/gardeneel-desktop/issues
                    
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
