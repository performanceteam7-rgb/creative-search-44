/* 44교시 생존수업 · 크리에이티브 서칭 대시보드
   실데이터: 웹검색·공식 플랫폼·Meta 광고 라이브러리 교차 확인 (2026-06-16 수집)
   정확도 등급: 정확(공식/원본) · 추정(정황·휴리스틱) · 수동(검색 보강) */
window.DATA = {
  meta: {
    title: "44교시 생존수업 · 크리에이티브 서칭",
    subtitle: "스릴러·공포 카테고리 화제작 광고 크리에이티브 벤치마크 — 자사 <44교시 생존수업> 재광고 인사이트",
    owner: "surv44",
    lastUpdated: "2026-06-16",
    dataMode: "real",
    sources: {
      meta:    { label: "Meta 광고 라이브러리", confidence: "정확", note: "광고주·집행여부 원본 확인" },
      youtube: { label: "YouTube (공식 예고편)", confidence: "정확", note: "썸네일·조회수 원본" },
      naver:   { label: "네이버웹툰", confidence: "정확", note: "공식 카피·키비주얼" },
      kakao:   { label: "카카오페이지", confidence: "정확", note: "공식 런칭 티저·카피" },
      google:  { label: "Google·언론", confidence: "수동", note: "기사·박스오피스 보강" }
    },
    note: "메타데이터·카피·키비주얼은 공식 출처 기준 [정확]. 화제성 일부 수치·해외 매출은 [추정]. 광고 노출 채널은 공식 채널 1차 확인, Meta 유료 집행 여부는 작품별 표기."
  },

  // ── 작품 프로필 (자사 1 + 벤치마크 5) ──
  works: [
    {
      key:"surv44", name:"44교시 생존수업", isOwner:true,
      type:"웹툰", category:"webtoon", platform:"네이버웹툰 (화요웹툰)",
      color:"#ff2e4d",
      genre:["스릴러","비주얼쇼크","학원·서바이벌"],
      release:"2025-02-24", author:"상C (한상현)",
      synopsis:"세상에 '검은 원'이라는 구멍이 생겨난다. 빠진 후 돌아온 사람은 없다. 도윤의 학교가 검은 원에 삼켜지고, 아이들은 출구를 찾아 탈출할 수 있을까?",
      image:"assets/kv_44_survival.jpg",
      advertiser:"네이버웹툰 (NAVER WEBTOON)",
      meta_ad_status:"none",
      meta_ad_note:"Meta 광고 라이브러리(KR) 직접 집행 0건 — 외부 유료광고 미집행 추정",
      buzz:[
        {metric:"관심수", value:"308,618", conf:"정확"},
        {metric:"연재", value:"매주 화요일 · 1부 35화 완결", conf:"정확"},
        {metric:"단행본", value:"전2권 출간 (2025-12)", conf:"정확"},
        {metric:"연령", value:"15세 이용가", conf:"정확"}
      ]
    },
    {
      key:"goedam", name:"괴담에 떨어져도 출근을 해야 하는구나",
      type:"웹툰", category:"webtoon", platform:"카카오페이지 (독점)",
      color:"#a06bff",
      genre:["현대판타지","괴담·공포","회귀·빙의"],
      release:"2026-06-05", author:"원작 백덕수 / 작화 캐롯스튜디오",
      synopsis:"좋아하던 작품 속 '괴담' 세계에 빙의해 대기업 신입사원이 된 주인공. 복지도 연봉도 좋은 꿈의 직장이지만, 장르가 '괴담'이라는 게 문제.",
      image:null,
      advertiser:"카카오페이지 / 카카오엔터 (추정)",
      meta_ad_status:"unknown",
      meta_ad_note:"카카오 자사 채널·오프라인 팝업 1차 확인 · Meta 집행 미확인",
      buzz:[
        {metric:"공개 2시간", value:"100만 조회", conf:"정확"},
        {metric:"당일 누적", value:"650만 조회", conf:"정확"},
        {metric:"누적(6/15)", value:"1,100만 · 댓글 3.2만", conf:"정확"},
        {metric:"별점", value:"10.0", conf:"정확"},
        {metric:"원작 웹소설", value:"누적 3.7억 · 연간 1위", conf:"정확"}
      ]
    },
    {
      key:"backrooms", name:"백룸 (Backrooms)",
      type:"영화", category:"movie", platform:"극장 · A24",
      color:"#ffcf3a",
      genre:["호러","리미널 스페이스","심리스릴러"],
      release:"2026-05-27", author:"케인 파슨스 감독 (20세)",
      synopsis:"환자가 '현실 너머'로 사라진 뒤, 치료사 메리가 끝없는 노란 벽과 형광등의 기이한 공간 '백룸'에 들어가 환자를 구하려 한다.",
      image:"assets/yt_backrooms_main.jpg",
      advertiser:"A24 / 바이포엠스튜디오·리바이브콘텐츠(KR, 추정)",
      meta_ad_status:"yes",
      meta_ad_note:"A24 글로벌·KR 배급 Meta/인스타 집행 확인 (캐릭터 포스터 릴)",
      buzz:[
        {metric:"글로벌 누적", value:"$200M+ (A24 역대 1위)", conf:"추정"},
        {metric:"북미 오프닝", value:"$81M (A24 최고)", conf:"정확"},
        {metric:"원작 유튜브", value:"누적 1.9억 뷰", conf:"추정"},
        {metric:"개봉", value:"한국 세계 최초 (5/27)", conf:"정확"}
      ]
    },
    {
      key:"colony", name:"군체 (COLONY)",
      type:"영화", category:"movie", platform:"극장 · 쇼박스",
      color:"#2fd6a6",
      genre:["좀비·크리처","재난호러","액션"],
      release:"2026-05-21", author:"연상호 감독 / 전지현·구교환·지창욱",
      synopsis:"초고층 빌딩에 정체불명 집단감염 발생. 처음엔 네발로 기던 감염자들이 '군체'로 정보를 공유하며 직립·진화해 인간을 사냥한다.",
      image:"assets/yt_colony_trailer.jpg",
      advertiser:"쇼박스 (Showbox)",
      meta_ad_status:"yes",
      meta_ad_note:"쇼박스 공식 SNS·YouTube 전방위 · 칸 초청 권위 마케팅",
      buzz:[
        {metric:"누적 관객", value:"347만+ (BEP 초과)", conf:"정확"},
        {metric:"속도", value:"개봉 4일 100만 · 11일 연속 1위", conf:"정확"},
        {metric:"칸", value:"제79회 미드나잇 스크리닝 초청", conf:"정확"},
        {metric:"스타", value:"전지현 11년 만 스크린 복귀", conf:"정확"}
      ]
    },
    {
      key:"devilsplan", name:"데블스플랜 (The Devil's Plan)",
      type:"넷플릭스", category:"ott", platform:"넷플릭스",
      color:"#e50914",
      genre:["두뇌서바이벌","심리전","리얼리티"],
      release:"2023-09-26", author:"정종연 PD / 넷플릭스·TEO",
      synopsis:"휴대폰 없이 6박 7일 합숙하며 매일 메인·데스 매치로 두뇌·전략·동맹을 겨뤄 최후의 1인을 가리는 두뇌 서바이벌. 시즌2 '데스룸'(2025).",
      image:"assets/yt_devilsplan_s2_main.jpg",
      advertiser:"Netflix Korea",
      meta_ad_status:"yes",
      meta_ad_note:"넷플릭스 YouTube·TikTok·Meta 전방위 · 출연진 숏폼 활용",
      buzz:[
        {metric:"공개 직후", value:"국내 1위 · 23개국 톱10", conf:"정확"},
        {metric:"화제성(S2)", value:"예능 화제성 1위 (12.83%)", conf:"추정"},
        {metric:"상금", value:"최대 5억 원", conf:"정확"},
        {metric:"시리즈", value:"시즌3 제작 확정", conf:"정확"}
      ]
    },
    {
      key:"aoud", name:"지금 우리 학교는",
      type:"넷플릭스", category:"ott", platform:"넷플릭스",
      color:"#1f8fff",
      genre:["좀비·호러","학원","생존"],
      release:"2022-01-28", author:"원작 웹툰 주동근 / 넷플릭스",
      synopsis:"좀비 바이러스가 처음 발생한 고등학교에 고립된 학생들이 탈출하거나 감염되며 벌어지는 극한의 생존극. 동명 네이버웹툰 원작.",
      image:"assets/yt_aoud_main.jpg",
      advertiser:"Netflix Korea",
      meta_ad_status:"yes",
      meta_ad_note:"넷플릭스 공식 YouTube·포스터·옥외 · 글로벌 1위 후 화제성 재활용",
      buzz:[
        {metric:"첫 주", value:"1.25억 시간 · 글로벌 1위", conf:"정확"},
        {metric:"도달", value:"91개국 톱10 · 29개국 1위", conf:"정확"},
        {metric:"1위 유지", value:"3주 연속", conf:"정확"},
        {metric:"4주 누적", value:"4.74억 시간", conf:"정확"}
      ]
    }
  ],

  // ── 크리에이티브 (실제 카피·키비주얼·후킹) ──
  creatives: [
    // 44교시 생존수업 (자사)
    {id:"c_surv44_1", work:"surv44", media:"naver", format:"image", target:"all",
      copy:"갑자기 세상에 '검은 원'이라는 구멍들이 생겨나기 시작했다. … 지금까지 빠진 후 돌아온 사람이 단 한 명도 없다. 과연 아이들은 출구를 찾아 탈출할 수 있을까?",
      visual:"적갈색 배경, 창백한 얼굴이 노란 '고등학교' 교과서로 입을 가린 채 눈을 부릅뜸. 핏빛 '44교시' 타이포. 일상 사물(교과서)+공포 인물 대비.",
      hook:"미지의 공포(검은 원)+학원 데스게임 생존. 일상 공간을 공포로 뒤집는 비주얼쇼크.",
      image:"assets/kv_44_survival.jpg", source_url:"https://comic.naver.com/webtoon/list?titleId=836848", conf:"정확"},
    {id:"c_surv44_2", work:"surv44", media:"naver", format:"image", target:"all",
      copy:"'검은 원'의 미스터리 — 참신한 발상과 분위기로 초반부터 시선을 사로잡은 웹툰. 미지의 존재를 통한 막연한 공포감.",
      visual:"언론(이데일리) 웹툰 소개 칼럼 내 작품 컷·포스터 인용.",
      hook:"검은 원 미스터리·공포 분위기 강조 (에디토리얼 후킹).",
      image:null, source_url:"https://www.edaily.co.kr/News/Read?newsId=01374326642105944", conf:"정확"},

    // 괴담에 떨어져도 출근을 해야 하는구나
    {id:"c_goedam_1", work:"goedam", media:"kakao", format:"image", target:"all",
      copy:"집에 보내주세요, 제발.",
      visual:"괴담(공포) 무드 캐릭터 키비주얼 + 카피 오버레이. 웹툰 버전 홍보.",
      hook:"'꿈의 직장'에 빙의됐지만 정작 집에 가고 싶다는 역설 — 직장인 공감 + 공포 결합.",
      image:null, source_url:"https://page.kakao.com/event/3b7eb67ae23b836ceea73d3b31999fcd", conf:"정확"},
    {id:"c_goedam_2", work:"goedam", media:"kakao", format:"image", target:"all",
      copy:"회사 복지: 소원 이뤄드림! 단, 죽지 말 것.",
      visual:"기업 복지 안내문 톤의 카피 + 괴담 비주얼. 원작 웹소설 홍보.",
      hook:"복지 좋은 대기업 vs 죽음의 괴담이라는 블랙코미디형 반전.",
      image:null, source_url:"https://page.kakao.com/event/3b7eb67ae23b836ceea73d3b31999fcd", conf:"정확"},
    {id:"c_goedam_3", work:"goedam", media:"kakao", format:"image", target:"all",
      copy:"반갑습니다 친구! 조명을 꺼 드릴까요?",
      visual:"괴담 속 존재(괴이)의 대사형 카피. 호러 무드 캐릭터 컷.",
      hook:"친근한 인사말로 위장한 공포 — 괴담 특유의 섬뜩함을 대사로 전달.",
      image:null, source_url:"https://page.kakao.com/event/3b7eb67ae23b836ceea73d3b31999fcd", conf:"정확"},
    {id:"c_goedam_4", work:"goedam", media:"kakao", format:"image", target:"all",
      copy:"6/5(금) 22시 coming soon — 김솔음·백사헌·고영은·은하제·박민성 캐릭터 순차 공개",
      visual:"13종 캐릭터/장면 티저로 구성된 론칭 예고. 인물 티저 5/31~6/4 순차 공개.",
      hook:"정식 연재 카운트다운 + 캐릭터 순차 공개로 기대감 누적.",
      image:null, source_url:"https://page.kakao.com/event/dfbf1eb54bdc71f88e5e607f0be744b3", conf:"정확"},

    // 백룸
    {id:"c_backrooms_1", work:"backrooms", media:"meta", format:"image", target:"all",
      copy:"5월 27일 전 세계 최초 극장 개봉 / 전 세계를 놀라게 한 #백룸, 입장하시겠습니까?",
      visual:"단색 노란 벽에 기댄 메리와 위를 올려다보는 클락 2종 캐릭터 포스터.",
      hook:"리미널 공간의 상징 노란 벽지 + '한국 세계 최초 개봉' 희소성 강조.",
      image:null, source_url:"https://www.instagram.com/reel/DWkOFBtTBES/", conf:"정확"},
    {id:"c_backrooms_2", work:"backrooms", media:"youtube", format:"video", target:"all",
      copy:"noclip out of reality — 현실에서 빠져나가면 백룸에 갇힌다. 원작 밈의 글귀를 광고 카피로 차용.",
      visual:"끝없이 이어지는 노란 복도, 윙윙대는 형광등, 녹아내리는 괴생명체. (noclip 예고편)",
      hook:"밈 원전 텍스트를 그대로 카피화 — 팬덤 자극 + '탈출 불가' 폐소공포.",
      image:"assets/yt_backrooms_noclip.jpg", source_url:"https://www.youtube.com/watch?v=jv_SZycSQUw", conf:"정확"},
    {id:"c_backrooms_3", work:"backrooms", media:"meta", format:"image", target:"all",
      copy:"(카피 없음 — 비주얼 단독) 미니멀 티저 포스터",
      visual:"텍스트·로고 없이 누런 백룸 벽지만 가득 채운 키비주얼. A24가 실제 '벽지' 굿즈로도 판매.",
      hook:"아이코닉한 벽지만으로 IP 인지도에 베팅 — '설명 없는 불안감' 자체가 후킹.",
      image:null, source_url:"https://www.dreadcentral.com/news/559037/", conf:"정확"},
    {id:"c_backrooms_4", work:"backrooms", media:"youtube", format:"video", target:"all",
      copy:"가구 매장에서 시작된 이상 현상이 정체불명 공간으로 이어진다. (메인 예고편)",
      visual:"평범한 가구 매장 → 노클립 → 무한 분절된 빈 방으로 전환되는 현실 붕괴 시퀀스.",
      hook:"일상 공간(가구점)에서 시작하는 점진적 현실 이탈 — 1인칭 발견 호러.",
      image:"assets/yt_backrooms_main.jpg", source_url:"https://www.youtube.com/watch?v=SiXvLh2FMO8", conf:"추정"},

    // 군체
    {id:"c_colony_1", work:"colony", media:"youtube", format:"video", target:"all",
      copy:"진화하는 좀비라는 새로운 악몽 / 한 개체가 습득한 정보가 곧장 다른 개체로 전송돼 군체 전체가 동시 학습한다.",
      visual:"봉쇄된 초고층 빌딩 내부, 네발로 기던 감염자가 직립보행하며 인간을 추격하는 '초고속 진화' 시퀀스. 흰색 점액질 비주얼.",
      hook:"기존 좀비물 문법 전복 — 떼로 몰리는 게 아니라 '학습·진화하는 집단지성' 좀비.",
      image:"assets/yt_colony_trailer.jpg", source_url:"https://www.youtube.com/watch?v=RjdGmIUbYIQ", conf:"정확"},
    {id:"c_colony_2", work:"colony", media:"google", format:"image", target:"all",
      copy:"전지현 11년 만의 스크린 복귀 / 좀비에 쫓겨도 흐트러짐 없는 카리스마",
      visual:"메인 키비주얼 — 6인 주연을 한 컷에 압축, 진화한 감염자들에 둘러싸인 구도. 전지현 단독 리더 비주얼 강조.",
      hook:"스타 파워 마케팅 — 전지현 복귀 + 초호화 캐스팅을 전면에 내세운 티켓파워.",
      image:null, source_url:"https://www.news1.kr/entertain/movie/6189075", conf:"정확"},
    {id:"c_colony_3", work:"colony", media:"youtube", format:"video", target:"all",
      copy:"Colony — Official Teaser (2026). K-좀비 마스터 연상호(부산행·반도) 브랜딩.",
      visual:"글로벌향 티저 — 빌딩 봉쇄·집단 감염·진화체 액션 하이라이트 편집.",
      hook:"해외 관객 대상 '연상호=K-좀비 거장' 브랜드 후킹 + 칸 초청작 권위.",
      image:"assets/yt_colony_eng.jpg", source_url:"https://www.youtube.com/watch?v=HKD9U1bDw9c", conf:"추정"},

    // 데블스플랜
    {id:"c_devilsplan_1", work:"devilsplan", media:"youtube", format:"video", target:"all",
      copy:"최고의 브레인 자리를 두고 모인 참가자들. 6박 7일 합숙 서바이벌에서 살아남을 최후의 1인은?",
      visual:"가면 쓴 진행자가 정체를 드러낸 뒤 참가자들이 입장해 게임에 임하는 시퀀스. '두뇌 서바이벌' 강조.",
      hook:"최고의 브레인 + 합숙 서바이벌 + 최대 상금 5억 (생존·전략 앵글).",
      image:"assets/yt_devilsplan_s2_main.jpg", source_url:"https://www.youtube.com/watch?v=HIHlu6-csZg", conf:"정확"},
    {id:"c_devilsplan_2", work:"devilsplan", media:"youtube", format:"video", target:"all",
      copy:"악마는 게임을 제안했을 뿐, 당신의 인성과 인생을 평가하지 않습니다. 더 잔혹해진 두뇌 서바이벌.",
      visual:"시즌2 공식 티저 — '악마(Devil)' 콘셉트, 데스룸 감옥형 세트 키비주얼.",
      hook:"심리전·악마의 게임 콘셉트, 실력주의 강조.",
      image:"assets/yt_devilsplan_s2_teaser.jpg", source_url:"https://www.youtube.com/watch?v=lRyKEjuw7qo", conf:"추정"},
    {id:"c_devilsplan_3", work:"devilsplan", media:"meta", format:"video", target:"all",
      copy:"더 교묘해진 전략, 더 위험해진 동맹 — 독보적 두뇌 서바이벌의 귀환.",
      visual:"시즌2 '데스룸' 메인 예고편 — 확장된 세트, 데스 매치 긴장감 연출.",
      hook:"동맹과 배신, 더 잔혹해진 두뇌 서바이벌의 귀환.",
      image:null, source_url:"https://www.youtube.com/watch?v=HIHlu6-csZg", conf:"추정"},

    // 지금 우리 학교는
    {id:"c_aoud_1", work:"aoud", media:"youtube", format:"video", target:"all",
      copy:"죽기 싫다, 죽이고 싶지 않다 / 죽이고 싶다",
      visual:"평화로운 등굣길 → 한 학생의 이상 증세로 일상 붕괴 → 바이러스가 학교 전역 확산. 생존 장면.",
      hook:"친구가 가장 위험한 적이 되는 상황 — '죽기 싫다'는 생존 의지와 '죽이고 싶다'는 분노의 대비.",
      image:"assets/yt_aoud_main.jpg", source_url:"https://www.youtube.com/watch?v=lXLWXjukWqU", conf:"정확"},
    {id:"c_aoud_2", work:"aoud", media:"meta", format:"image", target:"all",
      copy:"죽기 싫다. 죽이고 싶지 않다",
      visual:"좀비에게 몰려 절체절명의 위기에 놓인 아이들 — 좀비로 뒤덮인 학교 배경의 메인 포스터.",
      hook:"절체절명의 위기 속 생존 본능 자극, '학교=공포의 공간' 반전.",
      image:null, source_url:"https://news.nate.com/view/20220121n08025", conf:"정확"},
    {id:"c_aoud_3", work:"aoud", media:"meta", format:"image", target:"all",
      copy:"글로벌 1위 기념 스페셜 포스터 · 미공개 스틸",
      visual:"글로벌 흥행 직후 공개된 스페셜 포스터·미공개 스틸컷 (좀비 학교/생존).",
      hook:"화제성(글로벌 1위)을 마케팅 후킹으로 재활용한 사후 콘텐츠.",
      image:null, source_url:"https://www.sedaily.com/NewsView/2621SBHDCN", conf:"추정"}
  ],

  // ── 후킹 패턴 사전 (카피·비주얼·후킹 텍스트 매칭) ──
  hookDict: {
    "일상공간 전복":      ["학교","교실","교과서","회사","복지","출근","가구 매장","등굣길","일상"],
    "미지의 공포·정체불명": ["검은 원","미스터리","정체불명","미지","설명 없는","이상 현상","괴담","조명을 꺼"],
    "반전·블랙코미디 카피": ["제발","단,","위장","역설","평가하지 않습니다","악마는 게임"],
    "생존·데스게임 긴장":  ["생존","탈출","살아남","서바이벌","죽기 싫다","최후의 1인","데스"],
    "심리전·동맹·배신":   ["전략","동맹","두뇌","심리","배신","브레인"],
    "스타·IP 파워":       ["전지현","연상호","원작","밈","케인","주동근","웹툰"],
    "화제성·희소성 수치":  ["세계 최초","전 세계를 놀라게","글로벌 1위","억 뷰","역대","기념"],
    "진화·차별화 설정":   ["진화","집단 학습","새로운 악몽","귀환","문법"]
  },

  // ── 비교 분석 (자사 vs 벤치마크) — 아젠다 1 ──
  comparison: [
    {axis:"유료 광고 집행", surv44:"Meta 직접 집행 0건 (외부 유료광고 미집행 추정)", bench:"전 작품 Meta·YouTube·SNS 전방위 집행", gap:"critical"},
    {axis:"크리에이티브 포맷", surv44:"플랫폼 정지 포스터 1종 중심", bench:"예고편 영상·캐릭터 포스터·티저 등 멀티포맷", gap:"high"},
    {axis:"후킹 카피 전략", surv44:"플랫폼 시놉시스에 의존", bench:"반전·역설 카피 ('집에 보내주세요', '악마는 게임을…')", gap:"high"},
    {axis:"화제성 수치 활용", surv44:"관심수 30.8만 보유, 소재 미활용", bench:"뷰수·순위·박스오피스를 카피 전면에", gap:"high"},
    {axis:"캐릭터·스타 마케팅", surv44:"미진행", bench:"캐릭터 순차 티저(괴담)·스타 파워(군체)", gap:"mid"},
    {axis:"코어 강점 (공통)", surv44:"일상공간 전복+미지의 공포 (강력한 키비주얼 보유)", bench:"동일 코드 적극 활용 (학교·회사·가구점)", gap:"asset"}
  ],

  // ── 재광고 적용 인사이트 — 아젠다 2 ──
  applyInsights: [
    {t:"외부 유료광고 = 최대 기회", d:"30.8만 관심수의 인지 IP인데 Meta/YouTube 미집행. 재광고 시 신규 유입 여지가 가장 큼. 최소 Meta(인스타 릴)+YouTube 예고편부터 시작."},
    {t:"정지 포스터 → 모션 크리에이티브", d:"벤치마크 전부 예고편 영상 보유. 강력한 키비주얼(교과서로 입 가린 인물)을 5~10초 세로 모션 영상으로 전환 — '검은 원' 등장 연출."},
    {t:"반전·역설 카피 도입", d:"'집에 보내주세요, 제발'(괴담)처럼 일상↔공포 대비 카피. 44교시는 '쉬는 시간 없는 학교' '하교가 없는 학교' 류 반전 카피로 호기심 갭 생성."},
    {t:"일상공간 전복 비주얼 강화", d:"교과서·교실·시간표 등 친숙한 학교 사물을 공포로 비트는 비주얼. '44교시'라는 제목 자체가 비현실(보통 7교시) → 시간표/교시 모티프 적극 활용."},
    {t:"생존·데스게임 긴장 앵글", d:"데블스플랜·지금우리학교는의 위닝 코드 = '탈출/생존'. '검은 원에서 살아 나갈 수 있을까' 식 생존 서스펜스 카피·영상."},
    {t:"화제성 수치 전면화", d:"벤치마크는 뷰수·순위·매출을 카피로 노출. 44교시는 관심수 30만+·단행본 출간을 소셜 프루프로 — '30만이 본 그 학교'."},
    {t:"캐릭터 순차 공개 재런칭", d:"괴담식 캐릭터 순차 티저로 재연재/재조명 기대감 누적. 도윤 등 주요 인물 카운트다운 공개."}
  ],

  // ── 재광고 실행 플랜 (집행 단계 가이드) ──
  // 카피 시안은 수집 데이터가 아닌 '제안'이며 [제안]으로 구분. 그 외는 벤치마크 근거 기반.
  actionPlan: {
    // 즉시 A/B 테스트용 카피 시안 (벤치마크 위닝 패턴을 44교시에 적용한 '제안')
    copyDrafts: [
      {type:"반전·역설형", copy:"44교시. 이 학교엔 쉬는 시간이 없다.", basis:"괴담 '집에 보내주세요' / 데블스플랜 '악마는 게임을…' — 일상↔공포 대비"},
      {type:"미지의 공포형", copy:"검은 원에 빠진 후, 돌아온 사람은 없었다.", basis:"백룸 'noclip out of reality' — 정체불명·탈출불가 후킹"},
      {type:"소셜 프루프형", copy:"30만이 지켜본 그 학교가, 다시 열린다.", basis:"지금우리학교는 '글로벌 1위' / 괴담 '뷰수' — 화제성 수치 전면화"},
      {type:"생존·데스게임형", copy:"출구는 있다. 살아서 나갈 수 있다면.", basis:"지금우리학교는 '죽기 싫다' / 데블스플랜 '최후의 1인' — 생존 서스펜스"},
      {type:"호기심 갭형", copy:"왜 하필 44교시일까? 끝나지 않는 시간표.", basis:"44교시 제목의 비현실성(보통 7교시) — 호기심 갭"}
    ],
    blocks: [
      {icon:"🎯", title:"타겟 오디언스 (Meta·YouTube)", items:[
        {h:"코어", d:"네이버웹툰·카카오페이지 헤비 리더 (웹툰/웹소설 앱 사용자)"},
        {h:"관심사", d:"좀비·데스게임·호러 — 지금우리학교는·데블스플랜·오징어게임·스릴러 시청자"},
        {h:"리타게팅", d:"44교시 작품 페이지 방문자 + 관심수 등록 30.8만 기반 시드"},
        {h:"유사타겟", d:"기존 관심 독자 Lookalike 1~3%"},
        {h:"연령", d:"15세 이용가 → 핵심 15~29세 (10대 후반·20대)"}
      ]},
      {icon:"📱", title:"매체 믹스 & 포맷 권장", items:[
        {h:"1순위", d:"Meta 인스타 릴·스토리 (9:16 세로) — 벤치마크 다수 집행 채널"},
        {h:"2순위", d:"YouTube 쇼츠·인스트림 — 모션 예고편 자산 활용"},
        {h:"3순위", d:"네이버 자사 지면 + 작품 딥링크 (전환 마무리)"},
        {h:"규격", d:"6초 범퍼 / 15초 인스트림 / 9:16 릴 · 첫 3초 후킹 필수"},
        {h:"제작", d:"정지 키비주얼 → 5~10초 모션(검은 원 등장 연출)부터 우선"}
      ]},
      {icon:"🗓️", title:"재광고 타이밍 모멘텀", items:[
        {h:"성수기", d:"여름 납량 시즌 · 할로윈(10월) 호러 수요 집중기"},
        {h:"IP 모멘텀", d:"단행본 전2권 출간(2025-12) · 1부 완결 → 2부 재연재 시점 연계"},
        {h:"경쟁 회피", d:"괴담(카카오)·군체·백룸 등 동일 카테고리 대형 화제 시기와 겹치면 묻힘 주의"}
      ]},
      {icon:"📊", title:"KPI 기준 & 측정", items:[
        {h:"후킹", d:"3초 영상 시청률 · Thumb-stop rate (첫 3초 유지)"},
        {h:"효율", d:"CTR · CPC · 작품 페이지 유입 CPA"},
        {h:"전환", d:"신규 관심수 등록 · 첫 화 열람 · 유료 전환"},
        {h:"비교군", d:"포맷별(영상 vs 이미지)·후킹별 소재 분리 측정으로 위닝 도출"}
      ]},
      {icon:"⚠️", title:"리스크 & 컴플라이언스", items:[
        {h:"광고 정책", d:"Meta는 과도한 유혈·공포 비주얼 거부 위험 → 암시적 연출(노란 교과서·검은 원 실루엣) 권장"},
        {h:"등급 톤", d:"15세 이용가 톤 유지 — 직접적 잔혹 묘사보다 분위기·미스터리 강조"}
      ]}
    ]
  },

  // 캠페인/공개 타임라인
  timeline: [
    {work:"surv44", label:"44교시 생존수업 연재", date:"2025-02-24"},
    {work:"aoud", label:"지금 우리 학교는 공개", date:"2022-01-28"},
    {work:"devilsplan", label:"데블스플랜 S1", date:"2023-09-26"},
    {work:"devilsplan", label:"데블스플랜 S2 데스룸", date:"2025-05-06"},
    {work:"colony", label:"군체 개봉", date:"2026-05-21"},
    {work:"backrooms", label:"백룸 한국 세계최초 개봉", date:"2026-05-27"},
    {work:"goedam", label:"괴담에 떨어져도… 웹툰 연재", date:"2026-06-05"}
  ]
};
