import { projects } from './Projects.jsx';
const games = projects.map(p=>({...p,description:p.tagline}));
const tools = [
  {
    name: "Godot 4.7",
    role: "게임 엔진",
    body: "세 작품 모두 Godot으로 만듭니다. Garden Eel Cove는 데스크톱 투명 창으로, Lonely Candle과 Swing Golf는 모바일 렌더러로 빌드합니다.",
  },
  {
    name: "Blender",
    role: "시뮬레이션 · 렌더",
    body: "Mantaflow 유체 시뮬레이션으로 촛불을 만들고, 그 렌더 결과를 실시간 셰이더가 따라가야 할 기준으로 씁니다.",
  },
  {
    name: "Python",
    role: "제작 자동화",
    body: "Blender 시뮬 실행, 프레임 렌더, 결과 진단을 스크립트로 돌립니다. Lonely Candle 저장소에만 9개가 있습니다.",
  },
  {
    name: "Claude Code",
    role: "반복 작업",
    body: "릴리스 절차를 스킬로 만들어 저장소에 넣어 두고 호출합니다. 버전 동기화부터 빌드·태그·업로드까지 한 번에 돕니다.",
  },
];

const principles = [
  {
    title: "반복은 AI에, 사람은 재미에",
    body: "버전 문자열 맞추기, 빌드, 태그, 업로드 같은 일은 사람이 매번 할 이유가 없습니다. 릴리스 전 과정을 스킬 하나로 묶어 두고, 남는 시간은 만지면 반응하는 감각을 다듬는 데 씁니다.",
  },
  {
    title: "작게 만들어 빨리 내놓는다",
    body: "앞선 두 작품은 저장소를 만든 당일 또는 다음 날 첫 릴리스가 나갔고 Swing Golf는 이틀 만에 두 스토어 심사에 올라갔습니다. 오래 다듬어 큰 것을 내놓기보다, 손에 잡히는 크기로 만들어 실제로 돌아가는 것을 먼저 확인합니다.",
  },
  {
    title: "기획부터 릴리스까지 한 사람이",
    body: "아이디어, 셰이더, 상호작용, 빌드, 배포, 실기 검증까지 한 사람이 끌고 갑니다. 넘기는 구간이 없으니 판단이 빠르고, 대신 자동화할 수 있는 것은 전부 자동화해 둡니다.",
  },
  {
    title: "화면 위에 놓인다는 것",
    body: "게임을 실행하는 시간이 아니라 평소 쓰는 화면 위에 존재하는 것을 만듭니다. 바탕화면 아래에서 장어가 나왔다 숨고, 손안의 촛불이 입김에 흔들립니다. 방해하지 않으면서 곁에 있는 정도를 찾는 일입니다.",
  },
];

export default function StudioPage() {
  return (
    <>
      
      <main>
        <section >
          <div >
            <h1 >
              letspets
            </h1>
            <p >
              화면 위에 재미를 올려놓는 1인 창작 스튜디오입니다. 반복은 AI에
              맡기고, 기획부터 릴리스까지 한 사람이 끌고 갑니다.
            </p>
            <p >
              게임을 실행하는 동안만 존재하는 것이 아니라, 평소 쓰는 화면 위에
              머무는 것을 만듭니다. 바탕화면 아래 모래밭에 사는 정원장어, 입김에
              꺼지는 촛불, 폰을 휘둘러 치는 골프가 지금까지 내놓은 결과물입니다.
            </p>
          </div>
        </section>

        <section
          id="how-we-work"
          
        >
          <div >
            <h2 >일하는 방식</h2>
            <div className="studio-info-grid">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="studio-info-card"
                >
                  <h3 >{item.title}</h3>
                  <p >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tools"
          
        >
          <div >
            <h2 >창작 도구</h2>
            <div className="studio-info-grid">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="studio-info-card"
                >
                  <p >
                    {tool.role}
                  </p>
                  <h3 >{tool.name}</h3>
                  <p >
                    {tool.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section >
          <div >
            <h2 >만든 것</h2>
            <div className="studio-info-grid">
              {games.map((game) => (
                <a
                  key={game.slug}
                  className="studio-info-card"
                  href={`/projects/${game.slug}`}
                >
                  <h3 >{game.title}</h3>
                  <p >
                    {game.description}
                  </p>
                  <span >
                    자세히 보기
                    
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section >
          <div >
            <h2 >연락</h2>
            <div className="studio-info-card">
              <p >
                작업이나 협업에 관한 이야기는 이메일로, 기술적인 내용은 GitHub
                이슈로 받고 있습니다.
              </p>
              <a
                
                href="mailto:4sizn@naver.com"
              >
                
                4sizn@naver.com
              </a>
              <a
                
                href="https://github.com/4sizn"
              >
                github.com/4sizn
                
              </a>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
