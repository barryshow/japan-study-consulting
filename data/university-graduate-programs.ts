// ============================================================
// 日本高度人才加分校（SGU Top Type A类 + 扩展校）大学院 研究科·修士/博士项目·教授
// 按各大学官网2025-2026年实际数据整理
// 教授数据来源：各研究科教員一覧页 + 研究者数据库
// 教授名单为代表性举例，非完整名簿（完整教员列表请访问各校facultyUrl）
// ============================================================

import { graduateProgramsSupplement } from "./university-graduate-programs-supplement";

export interface Professor {
  name: string;           // 教授名（日文/中文）
  nameEn?: string;        // 英文名
  title: string;          // 职称（教授/准教授/講師）
  researchArea: string;   // 研究领域
  labUrl?: string;        // 研究室URL
}

export interface GraduateProgram {
  name: string;           // 专攻名（日文）
  nameEn?: string;        // 英文名
  degree: "修士" | "博士" | "修士/博士";
  description?: string;   // 简介
  professors: Professor[];
}

export interface GraduateSchoolDetail {
  name: string;           // 研究科名（中文）
  nameJa: string;         // 日文名
  nameEn?: string;        // 英文名
  programs: GraduateProgram[];
  admissionUrl: string;   // 入试情报URL
  facultyUrl: string;     // 教员一览URL
  hasEnglishProgram: boolean;
  intakeMonths: string[];
  notes?: string;
}

export interface UniversityGraduateData {
  universityId: string;
  universityName: string;
  type: "national" | "private" | "public";
  tier: string;
  portalUrl: string;
  aaoSystem?: string;
  professorSearchUrl: string;
  tuitionInfo: {
    examFee: string;
    admissionFee: string;
    annualTuition: string;
  };
  graduateSchools: GraduateSchoolDetail[];
  dataSources: string[];
}

export const universitiesGraduateData: UniversityGraduateData[] = [

  // ============================================================
  // 東京大学
  // ============================================================
  {
    universityId: "utokyo",
    universityName: "东京大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.u-tokyo.ac.jp/ja/prospective-students/graduate.html",
    professorSearchUrl: "https://www.u-tokyo.ac.jp/en/research/faculty.html",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      {
        name: "情报理工学系研究科",
        nameJa: "情報理工学系研究科", nameEn: "Graduate School of Information Science and Technology",
        admissionUrl: "https://www.i.u-tokyo.ac.jp/edu/entra/entra_e.shtml",
        facultyUrl: "https://www.i.u-tokyo.ac.jp/edu/stud/teach_e.shtml",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "夏季入试（全专攻）+ 冬季（部分）。TOEFL必须。修士竞争率38%-47%。",
        programs: [
          { name: "コンピュータ科学専攻", nameEn: "Computer Science", degree: "修士/博士", description: "算法、编程语言、体系结构、机器学习、自然语言处理、计算机视觉",
            professors: [
              { name: "河原林健一", title: "教授", researchArea: "算法/离散数学" },
              { name: "杉山将", title: "教授", researchArea: "机器学习" },
              { name: "五十嵐健夫", title: "教授", researchArea: "UI/计算机图形学" },
              { name: "宮尾祐介", title: "教授", researchArea: "自然语言处理" },
              { name: "佐藤一誠", title: "教授", researchArea: "统计机器学习" },
              { name: "品川高廣", title: "教授", researchArea: "OS/安全" },
            ]
          },
          { name: "数理情報学専攻", nameEn: "Mathematical Informatics", degree: "修士/博士", description: "数理模型、统计、优化、密码、信息几何",
            professors: [
              { name: "岩田覚", title: "教授", researchArea: "算法/组合优化" },
              { name: "駒木文保", title: "教授", researchArea: "统计学/贝叶斯理论" },
              { name: "鈴木大慈", title: "教授", researchArea: "机器学习/学习理论" },
              { name: "高木剛", title: "教授", researchArea: "暗号/后量子密码" },
              { name: "武田朗子", title: "教授", researchArea: "连续最优化/运筹学" },
              { name: "山西健司", title: "教授", researchArea: "数据挖掘/异常检测" },
            ]
          },
          { name: "電子情報学専攻", nameEn: "Information & Communication Engineering", degree: "修士/博士", description: "计算机网络、通信系统、信号处理、媒体技术",
            professors: [
              { name: "江崎浩", title: "教授", researchArea: "智能互联网" },
              { name: "入江英嗣", title: "教授", researchArea: "计算机体系结构" },
              { name: "田浦健次朗", title: "教授", researchArea: "并行分散计算" },
            ]
          },
          { name: "知能機械情報学専攻", nameEn: "Mechano-Informatics", degree: "修士/博士", description: "智能机器人、形态运动结构统合、人形机器人",
            professors: [
              { name: "中村仁彦", title: "教授", researchArea: "机器人学" },
              { name: "稲葉雅幸", title: "教授", researchArea: "智能机器人" },
              { name: "國吉康夫", title: "教授", researchArea: "认知机器人" },
              { name: "原田達也", title: "教授", researchArea: "机械知觉" },
            ]
          },
          { name: "創造情報学専攻", nameEn: "Creative Informatics", degree: "修士/博士", description: "实践教育研究、跨学科融合、新兴信息学领域",
            professors: [
              { name: "原田達也", title: "教授", researchArea: "実世界知能" },
              { name: "猿渡洋", title: "教授", researchArea: "音声処理" },
              { name: "中山英樹", title: "教授", researchArea: "多媒体认识" },
            ]
          },
        ]
      },
      {
        name: "工学系研究科",
        nameJa: "工学系研究科", nameEn: "Graduate School of Engineering",
        admissionUrl: "https://www.t.u-tokyo.ac.jp/en/study-at-utokyo/soe",
        facultyUrl: "https://www.t.u-tokyo.ac.jp/en/soe/faculty",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "18专攻。IME英语项目（International Multidisciplinary Engineering）覆盖多数专攻。",
        programs: [
          { name: "社会基盤学専攻", nameEn: "Civil Engineering", degree: "修士/博士",
            professors: [
              { name: "古関潤一", title: "教授", researchArea: "地盘工学" },
              { name: "布施孝志", title: "教授", researchArea: "空间情报" },
              { name: "福田大輔", title: "教授", researchArea: "交通工学" },
              { name: "石田哲也", title: "教授", researchArea: "混凝土工学" },
            ]
          },
          { name: "建築学専攻", nameEn: "Architecture", degree: "修士/博士",
            professors: [
              { name: "千葉学", title: "教授", researchArea: "建筑意匠" },
              { name: "川口健一", title: "教授", researchArea: "建筑构造" },
              { name: "大岡龍三", title: "教授", researchArea: "建筑环境" },
              { name: "野口貴文", title: "教授", researchArea: "建筑材料" },
              { name: "隈研吾", title: "教授", researchArea: "建筑设计（世界著名建筑师）" },
            ]
          },
          { name: "機械工学専攻", nameEn: "Mechanical Engineering", degree: "修士/博士",
            professors: [
              { name: "丸山茂夫", title: "教授", researchArea: "纳米碳管/热工学" },
              { name: "光石衛", title: "教授", researchArea: "远隔手术机器人" },
              { name: "塩見淳一郎", title: "教授", researchArea: "热物理" },
            ]
          },
          { name: "航空宇宙工学専攻", nameEn: "Aeronautics and Astronautics", degree: "修士/博士",
            professors: [
              { name: "中须賀真一", title: "教授", researchArea: "宇宙机构造" },
              { name: "津田雄一", title: "教授", researchArea: "はやぶさ2" },
              { name: "西成活裕", title: "教授", researchArea: "非线性动力学" },
            ]
          },
          { name: "電気系工学専攻", nameEn: "Electrical Engineering", degree: "修士/博士",
            professors: [
              { name: "大崎博之", title: "教授", researchArea: "超伝導" },
              { name: "田中雅明", title: "教授", researchArea: "スピントロニクス" },
              { name: "岩本敏", title: "教授", researchArea: "量子纳米光子学" },
            ]
          },
          { name: "物理工学専攻", nameEn: "Applied Physics", degree: "修士/博士",
            professors: [
              { name: "十倉好紀", title: "教授", researchArea: "强关联电子系" },
              { name: "古澤明", title: "教授", researchArea: "量子光学" },
              { name: "沙川貴大", title: "教授", researchArea: "量子信息" },
            ]
          },
          { name: "マテリアル工学専攻", nameEn: "Materials Engineering", degree: "修士/博士",
            professors: [
              { name: "幾原雄一", title: "教授", researchArea: "界面/原子级TEM" },
              { name: "溝口照康", title: "教授", researchArea: "材料设计/机械学习" },
              { name: "町田友樹", title: "教授", researchArea: "石墨烯" },
            ]
          },
          { name: "応用化学専攻", nameEn: "Applied Chemistry", degree: "修士/博士",
            professors: [
              { name: "西林仁昭", title: "教授", researchArea: "分子触媒" },
              { name: "柳田剛", title: "教授", researchArea: "纳米材料/分子识别" },
              { name: "鈴木康介", title: "教授", researchArea: "分子离子学" },
            ]
          },
          { name: "システム創成学専攻", nameEn: "Systems Innovation", degree: "修士/博士",
            professors: [
              { name: "加藤泰浩", title: "教授", researchArea: "地球资源/稀土" },
              { name: "鈴木英之", title: "教授", researchArea: "海洋工学/浮体式风电" },
              { name: "吉村忍", title: "教授", researchArea: "大规模计算力学" },
            ]
          },
          { name: "技術経営戦略学専攻", nameEn: "Technology Management for Innovation", degree: "修士/博士", description: "MOT（技术经营）·イノベーション·知识财产",
            professors: [
              { name: "渡部俊也", title: "教授", researchArea: "技术经营/知识产权战略" },
              { name: "妹尾堅一郎", title: "教授", researchArea: "知识财产管理" },
              { name: "梶川裕矢", title: "准教授", researchArea: "创新管理" },
            ]
          },
        ]
      },
      {
        name: "经济学研究科",
        nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.student.e.u-tokyo.ac.jp/grad/",
        facultyUrl: "https://www.e.u-tokyo.ac.jp/fservice/faculty/viewrfe.html",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "2025年改革：経済専攻入试一本化为「教育プログラム入试」,出願不需要日语成绩,需要TOEFL+GRE。英语项目：UTIPE。",
        programs: [
          { name: "経済専攻", nameEn: "Division of Economics", degree: "修士/博士", description: "经济学、统计学、地域研究、经济史",
            professors: [
              { name: "神取道宏", title: "University Professor", researchArea: "博弈论（世界级权威）" },
              { name: "青木浩介", title: "教授", researchArea: "宏观经济学" },
              { name: "古澤泰治", title: "教授", researchArea: "国际贸易" },
              { name: "川口大司", title: "教授", researchArea: "劳动经济学" },
              { name: "小島武仁", title: "教授", researchArea: "市场设计/匹配理论" },
              { name: "澤田康幸", title: "教授", researchArea: "开发经济学" },
              { name: "大橋弘", title: "教授", researchArea: "产业组织论/竞争政策" },
            ]
          },
          { name: "経営専攻", nameEn: "Division of Management", degree: "修士/博士", description: "经营学、数量金融",
            professors: [
              { name: "粕谷誠", title: "教授", researchArea: "日本经营史" },
              { name: "首藤昭信", title: "教授", researchArea: "财务会计" },
              { name: "稲水伸行", title: "教授", researchArea: "经营科学/组织行动论" },
            ]
          },
        ]
      },
      {
        name: "理学系研究科",
        nameJa: "理学系研究科", nameEn: "Graduate School of Science",
        admissionUrl: "https://www.s.u-tokyo.ac.jp/en/admission/graduate.html",
        facultyUrl: "https://www.s.u-tokyo.ac.jp/en/people/index.html",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        programs: [
          { name: "物理学専攻", nameEn: "Physics", degree: "修士/博士", description: "素粒子、原子核、凝聚态、生物物理、天体物理（8个子コース）",
            professors: [
              { name: "福嶋健二", title: "教授", researchArea: "强相互作用/QCD" },
              { name: "江尻晶", title: "教授", researchArea: "等离子体物理" },
              { name: "有田亮太郎", title: "教授", researchArea: "物性理论" },
              { name: "安東正樹", title: "教授", researchArea: "重力波天文学" },
            ]
          },
          { name: "化学専攻", nameEn: "Chemistry", degree: "修士/博士", description: "物理化学、有机化学、无机分析化学（全英语授课）",
            professors: [
              { name: "山内薫", title: "教授", researchArea: "阿秒激光科学" },
              { name: "小林修", title: "教授", researchArea: "绿色物质变换" },
            ]
          },
          { name: "生物科学専攻", nameEn: "Biological Sciences", degree: "修士/博士", description: "约80实验室",
            professors: [
              { name: "濡木理", title: "教授", researchArea: "结构生命科学" },
              { name: "塩見美喜子", title: "教授", researchArea: "RNA生物学" },
              { name: "黒田真也", title: "教授", researchArea: "系统生物学" },
              { name: "榎本和生", title: "教授", researchArea: "脑功能学" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.i.u-tokyo.ac.jp/edu/stud/teach_e.shtml", "https://www.t.u-tokyo.ac.jp/en/soe/faculty", "https://www.e.u-tokyo.ac.jp/fservice/faculty/viewrfe.html", "https://www.s.u-tokyo.ac.jp/en/people/index.html"],
  },

  // ============================================================
  // 京都大学
  // ============================================================
  {
    universityId: "kyoto-u",
    universityName: "京都大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.kyoto-u.ac.jp/ja/admissions/graduate",
    professorSearchUrl: "https://kdb.iimc.kyoto-u.ac.jp/",
    aaoSystem: "AAO事前审查：海外大学出身者必须通过AAO在线审查后方可联系教授。https://www.kyoto-u.ac.jp/ja/admissions/aao 处理约2-4周",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      {
        name: "情報学研究科",
        nameJa: "情報学研究科", nameEn: "Graduate School of Informatics",
        admissionUrl: "https://web.i.kyoto-u.ac.jp/en/admission/application.html",
        facultyUrl: "https://www.i.kyoto-u.ac.jp/en/faculty/professor/",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "2023年大改组后从6专攻精简为1专攻7コース。日本首个以「情报学」命名的大学院。设有英语国际コース。",
        programs: [
          { name: "知能情報学コース", nameEn: "Intelligence Science and Technology", degree: "修士/博士", description: "认知情报学、智能媒体、认知系统",
            professors: [
              { name: "河原達也", title: "教授", researchArea: "音声/音响处理" },
              { name: "鹿島久嗣", title: "教授", researchArea: "机器学习/数据挖掘" },
              { name: "西田眞也", title: "教授", researchArea: "认知情报学" },
              { name: "谷口忠大", title: "教授", researchArea: "认知系统" },
            ]
          },
          { name: "社会情報学コース", nameEn: "Social Informatics", degree: "修士/博士", description: "信息模型、信息安全、画像情报",
            professors: [
              { name: "伊藤孝行", title: "教授", researchArea: "多智能体系统" },
              { name: "神田崇行", title: "教授", researchArea: "人机交互" },
              { name: "舩冨卓哉", title: "教授", researchArea: "画像情报学" },
            ]
          },
          { name: "通信情報システムコース", nameEn: "Communications and Information Systems", degree: "修士/博士", description: "通信工学、情報ネットワーク",
            professors: []
          },
          { name: "データ科学コース", nameEn: "Data Science", degree: "修士/博士", description: "2023年新设，大数据/数据科学",
            professors: [
              { name: "田中利幸", title: "教授", researchArea: "统计的推論" },
            ]
          },
          { name: "先端数理科学コース", nameEn: "Advanced Mathematical Sciences", degree: "修士/博士",
            professors: []
          },
          { name: "数理工学コース", nameEn: "Applied Mathematics and Engineering", degree: "修士/博士",
            professors: []
          },
          { name: "システム科学コース", nameEn: "Systems Science", degree: "修士/博士",
            professors: [
              { name: "石井信", title: "教授", researchArea: "統合系统生物学/生物信息" },
            ]
          },
        ]
      },
      {
        name: "工学研究科",
        nameJa: "工学研究科", nameEn: "Graduate School of Engineering",
        admissionUrl: "https://www.t.kyoto-u.ac.jp/en/admissions/graduate/exam1",
        facultyUrl: "https://www.t.kyoto-u.ac.jp/en/research/people",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "17专攻。统合博士プログラム（5年一贯制），最短3年获修士+博士双学位。",
        programs: [
          { name: "社会基盤工学専攻", nameEn: "Civil Engineering", degree: "修士/博士",
            professors: [
              { name: "藤田正治", title: "教授", researchArea: "砂防学/河川" },
              { name: "中北英一", title: "教授", researchArea: "水文气象/洪水预测" },
              { name: "立川康人", title: "教授", researchArea: "水文学/水资源" },
            ]
          },
          { name: "建築学専攻", nameEn: "Architecture", degree: "修士/博士",
            professors: [
              { name: "荒木慶一", title: "教授", researchArea: "耐震/形状记忆合金" },
              { name: "張景耀", title: "教授", researchArea: "空间构造" },
            ]
          },
          { name: "機械理工学専攻", nameEn: "Mechanical Engineering", degree: "修士/博士",
            professors: [
              { name: "西脇眞二", title: "教授", researchArea: "最优设计/拓扑最优化" },
              { name: "北條正樹", title: "教授", researchArea: "复合材料" },
              { name: "細田耕", title: "教授", researchArea: "机器人工程" },
            ]
          },
          { name: "電子工学専攻", nameEn: "Electronic Science and Engineering", degree: "修士/博士",
            professors: [
              { name: "木本恒暢", title: "教授", researchArea: "SiC半导体器件（世界权威）" },
              { name: "野田進", title: "教授", researchArea: "光子晶体/量子光电子学" },
              { name: "竹内繁樹", title: "教授", researchArea: "应用量子电子学" },
            ]
          },
          { name: "材料工学専攻", nameEn: "Materials Science", degree: "修士/博士",
            professors: [
              { name: "宇田哲也", title: "教授", researchArea: "电化学/热力学" },
              { name: "辻伸浩", title: "教授", researchArea: "金属组织学" },
            ]
          },
          { name: "合成・生物化学専攻", nameEn: "Synthetic Chemistry & Biological Chemistry", degree: "修士/博士",
            professors: [
              { name: "杉野目道紀", title: "教授", researchArea: "有机设计学" },
            ]
          },
        ]
      },
      {
        name: "经济学研究科",
        nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "http://www.econ.kyoto-u.ac.jp/kueac/application/masters/",
        facultyUrl: "http://www.econ.kyoto-u.ac.jp/en/faculty-members/professor/",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "EAプログラム全英文授课（10月入学）。GLOCAL与格拉斯哥大学+巴塞罗那大学联合学位。博士与格拉斯哥大学双学位。",
        programs: [
          { name: "経済学専攻", nameEn: "Economics", degree: "修士/博士", description: "研究者养成(R)+高度专门人才(P)+EA英语三轨制",
            professors: [
              { name: "若井克俊", title: "教授", researchArea: "微观经济学/金融" },
              { name: "安井大真", title: "教授", researchArea: "宏观经济/劳动" },
              { name: "西山慎一", title: "教授", researchArea: "宏观经济/公共财政" },
              { name: "神事直人", title: "教授", researchArea: "国际经济学" },
              { name: "依田高典", title: "教授", researchArea: "应用经济学" },
              { name: "砂川伸幸", title: "教授", researchArea: "金融/经营学" },
            ]
          },
        ]
      },
      {
        name: "理学研究科",
        nameJa: "理学研究科", nameEn: "Graduate School of Science",
        admissionUrl: "https://sci.kyoto-u.ac.jp/en/admissions/laboratories",
        facultyUrl: "https://sci.kyoto-u.ac.jp/en/admissions/laboratories",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        programs: [
          { name: "物理学・宇宙物理学専攻", nameEn: "Physics and Astronomy", degree: "修士/博士",
            professors: [
              { name: "川合光", title: "教授", researchArea: "理论物理" },
              { name: "髙柳匡", title: "教授", researchArea: "理论物理/基础物理学研究所" },
              { name: "前野悦輝", title: "教授", researchArea: "物性/超伝導" },
            ]
          },
          { name: "化学専攻", nameEn: "Chemistry", degree: "修士/博士",
            professors: [
              { name: "北川宏", title: "教授", researchArea: "固体化学" },
              { name: "依光英樹", title: "教授", researchArea: "有机化学" },
              { name: "林重彦", title: "教授", researchArea: "理论化学" },
            ]
          },
          { name: "生物科学専攻", nameEn: "Biological Sciences", degree: "修士/博士",
            professors: [
              { name: "曽田貞滋", title: "教授", researchArea: "生态学/进化生物学" },
              { name: "高橋淑子", title: "教授", researchArea: "発生生物学" },
              { name: "森和俊", title: "教授", researchArea: "生物物理学/小胞体ストレス" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.i.kyoto-u.ac.jp/en/faculty/professor/", "https://www.t.kyoto-u.ac.jp/en/research/people", "http://www.econ.kyoto-u.ac.jp/en/faculty-members/professor/", "https://sci.kyoto-u.ac.jp/en/admissions/laboratories"],
  },

  // ============================================================
  // 早稻田大学
  // ============================================================
  {
    universityId: "waseda",
    universityName: "早稻田大学",
    type: "private",
    tier: "Top Type (S)·私立",
    portalUrl: "https://www.waseda.jp/inst/admission/graduate/",
    professorSearchUrl: "https://w-rdb.waseda.jp/",
    tuitionInfo: { examFee: "35,000円（海外5,000円）", admissionFee: "200,000円", annualTuition: "约100-160万円（研究科不同）" },
    graduateSchools: [
      {
        name: "政治学研究科",
        nameJa: "政治学研究科", nameEn: "Graduate School of Political Science (GSPS)",
        admissionUrl: "https://www.waseda.jp/fpse/gsps/",
        facultyUrl: "https://www.waseda.jp/fpse/gsps/en/about/faculty/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "MA/PhD in Political Science。4个子领域：政治方法论、政治思想史、比较政治、国際関係。",
        programs: [
          { name: "政治学専攻（政治方法論・分析）", nameEn: "Political Methodology & Analysis", degree: "修士/博士",
            professors: [
              { name: "小野芳邦", title: "教授", researchArea: "政治行为/性别/日本政治" },
              { name: "河野勝", title: "教授", researchArea: "日本政治/国际关系" },
              { name: "久米郁男", title: "教授", researchArea: "贸易政治/比较政治经济学" },
              { name: "小林哲郎", title: "教授", researchArea: "政治沟通/政治心理学" },
            ]
          },
          { name: "政治学専攻（国際関係）", nameEn: "International Relations", degree: "修士/博士",
            professors: [
              { name: "多湖淳", title: "教授", researchArea: "国际关系科学研究" },
              { name: "栗崎周平", title: "准教授", researchArea: "国际安全/核策略" },
              { name: "都丸潤子", title: "教授", researchArea: "国际移民/跨国关系" },
            ]
          },
          { name: "政治学専攻（比較政治）", nameEn: "Comparative Politics", degree: "修士/博士",
            professors: [
              { name: "唐亮", title: "教授", researchArea: "中国政治与外交（中国籍教授）" },
              { name: "久保慶一", title: "教授", researchArea: "比较政治/前南斯拉夫政治" },
            ]
          },
        ]
      },
      {
        name: "経済学研究科",
        nameJa: "経済学研究科", nameEn: "Graduate School of Economics (GSE)",
        admissionUrl: "https://www.waseda.jp/fpse/gse/",
        facultyUrl: "https://www.waseda.jp/fpse/gse/en/about/faculty/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "MA/PhD in Economics。2026年9月入学起英语成绩必须化。40+教授。",
        programs: [
          { name: "経済学専攻", nameEn: "Economics", degree: "修士/博士",
            professors: [
              { name: "上田晃三", title: "教授", researchArea: "货币政策/通胀动态" },
              { name: "戸堂康之", title: "教授", researchArea: "开发经济学/国际经济学" },
              { name: "有村俊秀", title: "教授", researchArea: "环境·能源经济学" },
              { name: "船木由喜彦", title: "教授", researchArea: "博弈论/实验经济学" },
              { name: "別所俊一郎", title: "教授", researchArea: "公共经济学/社会保障" },
            ]
          },
        ]
      },
      {
        name: "アジア太平洋研究科",
        nameJa: "アジア太平洋研究科", nameEn: "Graduate School of Asia-Pacific Studies (GSAPS)",
        admissionUrl: "https://www.waseda.jp/fire/gsaps/en/admissions/project",
        facultyUrl: "https://www.waseda.jp/fire/gsaps/en/admissions/project#anc_2",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "MA International Relations / PhD International Studies。最受中国留学生欢迎的研究科之一。MA=書類選考のみ（无笔试面试）。日英双语授课。",
        programs: [
          { name: "国際関係学専攻（地域研究）", nameEn: "Area Studies", degree: "修士/博士",
            professors: [
              { name: "青山瑠妙", title: "教授", researchArea: "中国国际关系与政治" },
              { name: "Gracia Liu-Farrer", title: "教授", researchArea: "移民/全球化" },
              { name: "中島清央", title: "教授", researchArea: "亚洲大众文化（含中国创意产业）" },
            ]
          },
          { name: "国際関係学専攻（国際関係）", nameEn: "International Relations", degree: "修士/博士",
            professors: [
              { name: "植木千可子", title: "教授", researchArea: "东亚安全与国际关系" },
              { name: "篠原初枝", title: "教授", researchArea: "美日关系/外交" },
            ]
          },
          { name: "国際関係学専攻（国際協力·政策）", nameEn: "International Development", degree: "修士/博士",
            professors: [
              { name: "勝間靖", title: "教授", researchArea: "和平/人权/社会发展" },
              { name: "黒田一雄", title: "教授", researchArea: "国际教育政策" },
            ]
          },
        ]
      },
      {
        name: "経営管理研究科（WBS）",
        nameJa: "経営管理研究科", nameEn: "Waseda Business School",
        admissionUrl: "https://www.waseda.jp/fcom/wbs/en/admission",
        facultyUrl: "https://www.waseda.jp/fcom/wbs/tag/faculty-en",
        hasEnglishProgram: true, intakeMonths: ["9月"],
        notes: "MBA/MSc in Finance/PhD。英语MBA track可选。",
        programs: [
          { name: "MBA", degree: "修士",
            professors: [
              { name: "入山章栄", title: "教授", researchArea: "战略管理/国际经营" },
              { name: "内田和成", title: "教授", researchArea: "竞争战略/领导力（原BCG日本代表）" },
              { name: "浅羽茂", title: "教授", researchArea: "企业战略/事业战略" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://w-rdb.waseda.jp/", "https://www.waseda.jp/fpse/gsps/en/about/faculty/", "https://www.waseda.jp/fpse/gse/en/about/faculty/", "https://www.waseda.jp/fire/gsaps/en/admissions/project"],
  },

  // ============================================================
  // 庆应义塾大学
  // ============================================================
  {
    universityId: "keio",
    universityName: "庆应义塾大学",
    type: "private",
    tier: "Top Type (S)·私立",
    portalUrl: "https://www.keio.ac.jp/ja/admissions/graduate/",
    professorSearchUrl: "https://k-ris.keio.ac.jp/",
    tuitionInfo: { examFee: "10,000〜35,000円", admissionFee: "200,000円", annualTuition: "约100-170万円（研究科不同）" },
    graduateSchools: [
      {
        name: "理工学研究科",
        nameJa: "理工学研究科", nameEn: "Graduate School of Science and Technology",
        admissionUrl: "https://www.st.keio.ac.jp/graduate/",
        facultyUrl: "https://www.keio.ac.jp/en/st/faculty/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "287名教员。IGP英语项目（2003年创设）。3大学校（基礎理工学/総合デザイン工学/開放環境科学）。出愿前必须取得教授内诺。",
        programs: [
          { name: "基礎理工学専攻", nameEn: "Fundamental Science and Technology", degree: "修士/博士", description: "数学、物理、分子化学、応用物理情報、化学生物学、生物科学情報学",
            professors: []
          },
          { name: "総合デザイン工学専攻", nameEn: "Integrated Design Engineering", degree: "修士/博士", description: "多领域设计科学、系统统合、电气电子、材料设计科学",
            professors: [
              { name: "野田啓", title: "教授", researchArea: "应用表面科学/电子材料" },
            ]
          },
          { name: "開放環境科学専攻", nameEn: "Science for Open and Environmental Systems", degree: "修士/博士", description: "空间环境设计、环境能源科学、应用计算力学、信息计算机科学",
            professors: [
              { name: "奥田知明", title: "教授", researchArea: "环境化学/气溶胶工程" },
            ]
          },
        ]
      },
      {
        name: "政策・メディア研究科",
        nameJa: "政策・メディア研究科", nameEn: "Graduate School of Media and Governance (SFC)",
        admissionUrl: "https://www.sfc.keio.ac.jp/gsmg/",
        facultyUrl: "https://www.keio.ac.jp/en/sfc-pem/faculty/gsmg/",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "⚠️ 出願前に教授署名入り「受入確認書」必須（教授決定制最严格）。不可同时联系多位教授。最受留学生欢迎的研究科之一。",
        programs: [
          { name: "政策・メディア専攻（サイバーインフォマティクス）", nameEn: "Cyber Informatics", degree: "修士/博士",
            professors: [
              { name: "高汐一紀", title: "教授（研究科委員長）", researchArea: "HCI/混合现实/软体机器人" },
              { name: "中澤仁", title: "教授", researchArea: "IoT/感知/机器学习" },
              { name: "Van Meter Rodney", title: "教授", researchArea: "量子计算/量子网络" },
            ]
          },
          { name: "政策・メディア専攻（環境ガバナンス）", nameEn: "Environmental Governance", degree: "修士/博士",
            professors: [
              { name: "蟹江憲史", title: "教授", researchArea: "国际关系/地球系统治理" },
              { name: "小林博人", title: "教授", researchArea: "建築/都市农村设计" },
              { name: "Rajib Shaw", title: "教授", researchArea: "环境/灾害管理" },
            ]
          },
          { name: "政策・メディア専攻（バイオインフォマティクス）", nameEn: "Bioinformatics", degree: "修士/博士",
            professors: [
              { name: "荒川和晴", title: "教授", researchArea: "生物信息学/系统生物学" },
              { name: "杉本昌弘", title: "教授", researchArea: "医疗数据科学" },
            ]
          },
        ]
      },
      {
        name: "経済学研究科",
        nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.econ.keio.ac.jp/graduate/",
        facultyUrl: "https://www.econ.keio.ac.jp/en/about/faculty-list",
        hasEnglishProgram: true, intakeMonths: ["4月", "9月"],
        notes: "1906年创立，日本最古之一。Faculty列表中 * = 大学院委員会委員（核心指导教授）。",
        programs: [
          { name: "経済学専攻", nameEn: "Economics", degree: "修士/博士",
            professors: [
              { name: "廣瀬康生*", title: "教授", researchArea: "宏观经济学/货币经济学" },
              { name: "帆苅亨*", title: "教授", researchArea: "博弈论（合作博弈）/数理经济学" },
              { name: "河井啓希*", title: "教授", researchArea: "计量经济学/实证产业组织" },
              { name: "井深陽子*", title: "教授", researchArea: "健康经济学" },
              { name: "土居丈朗*", title: "教授", researchArea: "公共经济学/公共选择" },
              { name: "亀井憲樹*", title: "教授", researchArea: "行为实验经济学/公共经济学" },
              { name: "鍛治順*", title: "教授", researchArea: "中国经济史/东亚近代经济史" },
            ]
          },
        ]
      },
      {
        name: "商学研究科",
        nameJa: "商学研究科", nameEn: "Graduate School of Business and Commerce",
        admissionUrl: "https://www.gakuji.keio.ac.jp/hiyoshi/gs/",
        facultyUrl: "https://fbc.keio.ac.jp/en/faculty/index.html",
        hasEnglishProgram: true, intakeMonths: ["4月"],
        notes: "Master/PhD in Commerce。年1次入试（夏季）。事前联系教授可选但推荐（专设事前联系表）。",
        programs: [
          { name: "商学専攻", nameEn: "Commerce", degree: "修士/博士", description: "金融证券、保险、产业组织、计量经济学、国际贸易、经营史、人力资源管理",
            professors: [
              { name: "辻幸民", title: "教授", researchArea: "企业金融/证券市场" },
              { name: "王英燕", title: "教授", researchArea: "组织行为/国际人力资源管理（中国籍）" },
              { name: "山本勲", title: "教授", researchArea: "应用微观计量/劳动经济学" },
              { name: "権丈善一", title: "教授", researchArea: "社会保障/再分配政策" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://k-ris.keio.ac.jp/", "https://www.keio.ac.jp/en/st/faculty/", "https://www.keio.ac.jp/en/sfc-pem/faculty/gsmg/", "https://www.econ.keio.ac.jp/en/about/faculty-list", "https://fbc.keio.ac.jp/en/faculty/index.html"],
  },

  // ============================================================
  // 大阪大学
  // ============================================================
  {
    universityId: "osaka-u",
    universityName: "大阪大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.osaka-u.ac.jp/en/admissions/graduate",
    professorSearchUrl: "https://rd.iai.osaka-u.ac.jp/",
    aaoSystem: "AAD（Dragon Gate系统）：海外大学出身者必须通过AAD联系教授。https://www.osaka-u.ac.jp/en/international/inbound/dragongate",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      {
        name: "情報科学研究科",
        nameJa: "情報科学研究科", nameEn: "Graduate School of Information Science and Technology",
        admissionUrl: "https://www.ist.osaka-u.ac.jp/english/examinees/admission/guidelines2026.php",
        facultyUrl: "https://www.ist.osaka-u.ac.jp/english/researcher/list.php",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "7专攻。教员列表最完整的大阪大学研究科。",
        programs: [
          { name: "コンピュータサイエンス専攻", nameEn: "Computer Science", degree: "修士/博士",
            professors: [
              { name: "肥後芳樹", title: "教授", researchArea: "软件工程" },
            ]
          },
          { name: "情報ネットワーク学専攻", nameEn: "Information Networking", degree: "修士/博士",
            professors: [
              { name: "下西英之", title: "教授", researchArea: "网络" },
              { name: "猪俣敦夫", title: "教授", researchArea: "信息安全" },
              { name: "大下裕一", title: "准教授", researchArea: "网络" },
            ]
          },
          { name: "マルチメディア工学専攻", nameEn: "Multimedia Engineering", degree: "修士/博士",
            professors: [
              { name: "原隆浩", title: "教授", researchArea: "数据工程" },
              { name: "鬼塚真", title: "教授", researchArea: "大数据" },
              { name: "天方大地", title: "准教授", researchArea: "数据工程" },
            ]
          },
          { name: "情報基礎数学専攻", nameEn: "Pure and Applied Mathematics", degree: "修士/博士",
            professors: [
              { name: "宗政昭弘", title: "教授", researchArea: "离散几何/组合数学" },
            ]
          },
          { name: "バイオ情報工学専攻", nameEn: "Bioinformatic Engineering", degree: "修士/博士",
            professors: [
              { name: "妹尾茂樹", title: "准教授", researchArea: "基因组信息学" },
            ]
          },
        ]
      },
      {
        name: "工学研究科",
        nameJa: "工学研究科", nameEn: "Graduate School of Engineering",
        admissionUrl: "https://www.eng.osaka-u.ac.jp/en/entrance/f_admissions/",
        facultyUrl: "https://www.eng.osaka-u.ac.jp/en/school/ug_divisions/",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "9专攻。2027年度入学考试选拔方法有变更。全专攻有英语track（SGU）。",
        programs: [
          { name: "応用化学専攻", nameEn: "Applied Chemistry", degree: "修士/博士",
            professors: [
              { name: "林高史", title: "教授", researchArea: "生物无机化学" },
              { name: "佐伯昭紀", title: "教授", researchArea: "高分子科学/AI材料" },
            ]
          },
          { name: "ビジネスエンジニアリング専攻", nameEn: "Management of Industry and Technology", degree: "修士/博士",
            professors: [
              { name: "上西啓介", title: "教授", researchArea: "MOT/电子封装" },
            ]
          },
        ]
      },
      {
        name: "経済学研究科",
        nameJa: "経済学研究科", nameEn: "Graduate School of Economics",
        admissionUrl: "https://www.econ.osaka-u.ac.jp/en/en-graduate/en-g-notice/",
        facultyUrl: "https://www.econ.osaka-u.ac.jp/en/en-faculty/",
        hasEnglishProgram: true, intakeMonths: ["4月"],
        notes: "Sustainable Economy Program全英文可。",
        programs: [
          { name: "経済学専攻", nameEn: "Economics", degree: "修士/博士",
            professors: [
              { name: "岩壷健太郎", title: "教授", researchArea: "宏观经济学" },
              { name: "小野哲生", title: "教授", researchArea: "公共经济学" },
              { name: "大竹文雄", title: "特任教授", researchArea: "行为/劳动经济学" },
              { name: "浦井健", title: "教授", researchArea: "一般均衡理论" },
            ]
          },
          { name: "経営学専攻", nameEn: "Business and Management", degree: "修士/博士",
            professors: [
              { name: "開本浩矢", title: "教授", researchArea: "组织行为/人力资源管理" },
              { name: "松村直宏", title: "教授", researchArea: "数据挖掘" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.ist.osaka-u.ac.jp/english/researcher/list.php", "https://www.eng.osaka-u.ac.jp/en/", "https://www.econ.osaka-u.ac.jp/en/en-faculty/"],
  },

  // ============================================================
  // 东北大学
  // ============================================================
  {
    universityId: "tohoku",
    universityName: "东北大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.tohoku.ac.jp/en/admissions/graduate.html",
    professorSearchUrl: "https://www.r-info.tohoku.ac.jp/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      {
        name: "工学研究科",
        nameJa: "工学研究科", nameEn: "Graduate School of Engineering",
        admissionUrl: "https://www.eng.tohoku.ac.jp/english/admission/programs.html",
        facultyUrl: "https://www.eng.tohoku.ac.jp/english/research/search/?id=9",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "18专攻/5学术集群。335名教员。年收修士666名+博士174名。",
        programs: [
          { name: "機械システム工学専攻", nameEn: "Mechanical Systems Engineering", degree: "修士/博士",
            professors: [
              { name: "燈明泰造", title: "教授", researchArea: "流体工学/计算流体力学" },
              { name: "和田山智之", title: "教授", researchArea: "材料力学/固体力学" },
              { name: "祖山均", title: "教授", researchArea: "精密加工/キャビテーション" },
              { name: "髙木敏行", title: "教授", researchArea: "机械システム/故障诊断" },
            ]
          },
          { name: "航空宇宙工学専攻", nameEn: "Aerospace Engineering", degree: "修士/博士",
            professors: [
              { name: "淺井圭介", title: "教授", researchArea: "航空宇宙推进/流体计测" },
              { name: "永井大樹", title: "教授", researchArea: "高速空气力学/冲击波" },
              { name: "大林茂", title: "教授", researchArea: "CFD/数值流体力学" },
              { name: "吉田和哉", title: "教授", researchArea: "宇宙システム/探査ロボット" },
            ]
          },
          { name: "ロボティクス専攻", nameEn: "Robotics", degree: "修士/博士",
            professors: [
              { name: "田所諭", title: "教授", researchArea: "灾害机器人/遠隔操作" },
              { name: "昆陽雅司", title: "教授", researchArea: "触觉界面/ハプティクス" },
              { name: "平田泰久", title: "教授", researchArea: "人-ロボット協調" },
              { name: "鏡慎吾", title: "教授", researchArea: "マイクロロボット/MEMS" },
            ]
          },
          { name: "金属フロンティア工学専攻", nameEn: "Metallurgy", degree: "修士/博士", description: "世界第一的材料科学研究（材料科学QS世界1位）",
            professors: [
              { name: "古原忠", title: "教授", researchArea: "鉄鋼材料/组织制御/材料科学" },
              { name: "粉川博之", title: "教授", researchArea: "溶接工学/接合界面" },
              { name: "加藤秀実", title: "教授", researchArea: "非平衡材料/金属ガラス" },
              { name: "杉本諭", title: "教授", researchArea: "磁性材料/永久磁石" },
              { name: "中村崇", title: "教授", researchArea: "资源循环/非鉄製錬" },
            ]
          },
          { name: "土木環境工学専攻", nameEn: "Civil and Environmental Engineering", degree: "修士/博士",
            professors: [
              { name: "Bamunawala Janaka", title: "准教授", researchArea: "海岸形态学/土木工程" },
            ]
          },
        ]
      },
      {
        name: "情報科学研究科",
        nameJa: "情報科学研究科", nameEn: "Graduate School of Information Sciences",
        admissionUrl: "https://www.is.tohoku.ac.jp/en/entrance/exam.html",
        facultyUrl: "https://www.r-info.tohoku.ac.jp/en/f62dd6d021e1e3b9ddee4276ab2e93c6.html",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "4专攻。跨学科特色（人文/社会/工学融合）。可自由跨专攻选课。",
        programs: [
          { name: "情報基礎科学専攻", nameEn: "Computer and Mathematical Sciences", degree: "修士/博士",
            professors: [
              { name: "青木孝文", title: "教授", researchArea: "计算机体系结构/图像处理" },
              { name: "亀山充隆", title: "教授", researchArea: "智能集成系统" },
            ]
          },
          { name: "システム情報科学専攻", nameEn: "System Information Sciences", degree: "修士/博士",
            professors: [
              { name: "乾健太郎", title: "教授", researchArea: "自然语言处理" },
              { name: "岡谷貴之", title: "教授", researchArea: "计算机视觉" },
              { name: "橋本浩一", title: "教授", researchArea: "智能机器人" },
            ]
          },
          { name: "人間社会情報科学専攻", nameEn: "Human-Social Information Sciences", degree: "修士/博士",
            professors: [
              { name: "堀田龍也", title: "教授", researchArea: "教育IT" },
              { name: "赤松隆", title: "教授", researchArea: "交通工程" },
            ]
          },
          { name: "応用情報科学専攻", nameEn: "Applied Information Sciences", degree: "修士/博士",
            professors: [
              { name: "加藤寧", title: "教授", researchArea: "网络通信" },
              { name: "田所諭", title: "教授", researchArea: "灾害机器人" },
            ]
          },
        ]
      },
      {
        name: "国際文化研究科",
        nameJa: "国際文化研究科", nameEn: "Graduate School of International Cultural Studies",
        admissionUrl: "https://www.intcul.tohoku.ac.jp/en/contents/admission_info",
        facultyUrl: "https://www.intcul.tohoku.ac.jp/en/faculty",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "完全なfaculty列表在线。G2SD英语项目。GPJS日本研究英语项目。",
        programs: [
          { name: "地域文化研究専攻", nameEn: "Regional Cultural Studies", degree: "修士/博士",
            professors: [
              { name: "Godart Clinton", title: "教授", researchArea: "日本宗教/思想史" },
              { name: "勝山稔", title: "教授", researchArea: "亚洲/非洲研究" },
              { name: "朱琳", title: "准教授", researchArea: "亚洲研究（中国籍）" },
            ]
          },
          { name: "グローバル社会研究専攻", nameEn: "Global Societal Studies", degree: "修士/博士",
            professors: [
              { name: "劉庭秀", title: "教授", researchArea: "国际政治经济学" },
              { name: "池田亮", title: "教授", researchArea: "国际政治" },
            ]
          },
          { name: "言語研究専攻", nameEn: "Language Studies", degree: "修士/博士",
            professors: [
              { name: "江藤裕之", title: "教授", researchArea: "理论语言学" },
              { name: "菅谷奈津恵", title: "教授", researchArea: "应用语言学/日语教育" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://www.eng.tohoku.ac.jp/english/research/search/?id=9", "https://www.is.tohoku.ac.jp/en/", "https://www.intcul.tohoku.ac.jp/en/faculty"],
  },

  // ============================================================
  // 名古屋大学
  // ============================================================
  {
    universityId: "nagoya-u",
    universityName: "名古屋大学",
    type: "national",
    tier: "Top Type (S)",
    portalUrl: "https://www.nagoya-u.ac.jp/admission/",
    professorSearchUrl: "https://profs.provost.nagoya-u.ac.jp/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      {
        name: "工学研究科",
        nameJa: "工学研究科", nameEn: "Graduate School of Engineering",
        admissionUrl: "https://int-office.engg.nagoya-u.ac.jp/prospectivestudents/rs/",
        facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=0000044",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "18专攻。G30国际项目可用。約303名研究者。天野浩（诺贝尔物理学奖2014/GaN蓝色LED）所属。",
        programs: [
          { name: "電子工学専攻", nameEn: "Electronic Engineering", degree: "修士/博士",
            professors: [
              { name: "天野浩", title: "教授", researchArea: "GaN半导体/蓝色LED（诺贝尔物理学奖2014）" },
              { name: "宮崎誠一", title: "教授", researchArea: "半导体电子" },
              { name: "須田淳", title: "教授", researchArea: "半导体" },
            ]
          },
          { name: "応用物理学専攻", nameEn: "Applied Physics", degree: "修士/博士",
            professors: [
              { name: "竹延大志", title: "教授", researchArea: "有机电子" },
              { name: "竹中康司", title: "教授", researchArea: "磁性材料" },
            ]
          },
          { name: "土木工学専攻", nameEn: "Civil Engineering", degree: "修士/博士",
            professors: [
              { name: "舘石和雄", title: "教授", researchArea: "钢结构" },
              { name: "中村光", title: "教授", researchArea: "混凝土工学" },
            ]
          },
        ]
      },
      {
        name: "情報学研究科",
        nameJa: "情報学研究科", nameEn: "Graduate School of Informatics",
        admissionUrl: "https://www.i.nagoya-u.ac.jp/en/gs/entranceexamination/admission02/",
        facultyUrl: "https://profs.provost.nagoya-u.ac.jp/search?m=affiliation&l=en&a2=1000631",
        hasEnglishProgram: true, intakeMonths: ["4月", "10月"],
        notes: "6专攻+未来価値創造センター。約97名研究者。",
        programs: [
          { name: "数理情報学専攻", nameEn: "Mathematical Informatics", degree: "修士/博士",
            professors: []
          },
          { name: "複雑系科学専攻", nameEn: "Complex Systems Science", degree: "修士/博士",
            professors: [
              { name: "畔上秀幸", title: "教授", researchArea: "应用数学/形状最优化" },
              { name: "鈴木麗璽", title: "教授", researchArea: "人工生命" },
            ]
          },
          { name: "社会情報学専攻", nameEn: "Social Informatics", degree: "修士/博士",
            professors: [
              { name: "秋庭史典", title: "教授", researchArea: "美学" },
            ]
          },
          { name: "知能システム学専攻", nameEn: "Intelligent Systems", degree: "修士/博士",
            professors: [
              { name: "村瀬洋", title: "特任教授", researchArea: "图像识别" },
              { name: "出口大輔", title: "准教授", researchArea: "计算机视觉" },
            ]
          },
        ]
      },
    ],
    dataSources: ["https://profs.provost.nagoya-u.ac.jp/", "https://www.engg.nagoya-u.ac.jp/", "https://www.i.nagoya-u.ac.jp/en/gs/"],
  },

  // ============================================================
  // 北海道大学 / 九州大学 / 东京科学大学 / 筑波大学 / 広島大学
  // （研究科+项目·专攻，教授请参照各校研究者数据库）
  // ============================================================
  {
    universityId: "hokkaido-u",
    universityName: "北海道大学",
    type: "national", tier: "Top Type (S)",
    portalUrl: "https://www.hokudai.ac.jp/admission/graduate/",
    professorSearchUrl: "https://researchers.general.hokudai.ac.jp/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "文学研究院", nameJa: "文学研究院", nameEn: "Graduate School of Humanities and Human Sciences", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "人文学専攻", degree: "修士/博士", description: "哲学·史学·文学·言語学·地域研究",
          professors: [
            { name: "宮崎隆志", title: "教授", researchArea: "社会教育学/成人教育" },
            { name: "瀧口義浩", title: "教授", researchArea: "歴史学/近代日本史" },
            { name: "伊藤俊治", title: "教授", researchArea: "哲学/現象学" },
            { name: "田村雅史", title: "教授", researchArea: "言語学/日本語学" },
          ]
        },
      ]},
      { name: "法学研究科", nameJa: "法学研究科", nameEn: "Graduate School of Law", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "法学専攻", degree: "修士/博士",
          professors: [
            { name: "鈴木賢", title: "教授", researchArea: "中国法/比较法" },
            { name: "曽野裕夫", title: "教授", researchArea: "民法/契約法" },
            { name: "長谷川晃", title: "教授", researchArea: "法哲学/法社会学" },
            { name: "池田悠太", title: "教授", researchArea: "労働法" },
          ]
        },
      ]},
      { name: "经济学研究院", nameJa: "経済学研究院", nameEn: "Graduate School of Economics and Business", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "经济学専攻", degree: "修士/博士",
          professors: [
            { name: "橋本努", title: "教授", researchArea: "経済思想/社会哲学" },
            { name: "町野和夫", title: "教授", researchArea: "財政学/公共経済学" },
            { name: "山田雅俊", title: "教授", researchArea: "マクロ経済学" },
          ]
        },
        { name: "経営学専攻", degree: "修士/博士",
          professors: [
            { name: "平本健太", title: "教授", researchArea: "経営戦略/イノベーション" },
            { name: "松尾睦", title: "教授", researchArea: "組織行動/人材育成" },
            { name: "坂川裕司", title: "教授", researchArea: "マーケティング" },
          ]
        },
      ]},
      { name: "理学研究院", nameJa: "理学研究院", nameEn: "Graduate School of Science", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [
            { name: "中村郁", title: "教授", researchArea: "代数幾何学/数论" },
            { name: "神保秀一", title: "教授", researchArea: "偏微分方程式" },
            { name: "行木孝夫", title: "教授", researchArea: "トポロジー/応用数学" },
          ]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [
            { name: "丹田聡", title: "教授", researchArea: "物性物理/超伝導" },
            { name: "池田和弘", title: "教授", researchArea: "素粒子論" },
            { name: "堀口隆良", title: "教授", researchArea: "宇宙物理学" },
          ]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [
            { name: "澤村正也", title: "教授", researchArea: "有機金属化学/触媒" },
            { name: "伊藤肇", title: "教授", researchArea: "有機合成化学" },
            { name: "石森浩一郎", title: "教授", researchArea: "生物無機化学" },
          ]
        },
        { name: "生物科学専攻", degree: "修士/博士",
          professors: [
            { name: "栃内新", title: "教授", researchArea: "発生生物学" },
            { name: "堀口健雄", title: "教授", researchArea: "藻類学/植物プランクトン" },
            { name: "鈴木誠", title: "教授", researchArea: "分子生物学" },
          ]
        },
      ]},
      { name: "工学研究院", nameJa: "工学研究院", nameEn: "Graduate School of Engineering", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "機械宇宙工学専攻", degree: "修士/博士",
          professors: [
            { name: "藤田修", title: "教授", researchArea: "燃焼工学/宇宙推進" },
            { name: "大島伸行", title: "教授", researchArea: "流体力学/数値シミュレーション" },
            { name: "坪井伸幸", title: "教授", researchArea: "衝撃波/高速流体" },
          ]
        },
        { name: "人間機械システムデザイン専攻", degree: "修士/博士",
          professors: [
            { name: "川村貞夫", title: "教授", researchArea: "ロボット制御/マニピュレータ" },
            { name: "小野里雅彦", title: "教授", researchArea: "生産加工/デジタル製造" },
          ]
        },
        { name: "応用物理学専攻", degree: "修士/博士",
          professors: [
            { name: "末宗幾夫", title: "教授", researchArea: "半導体物理/光物性" },
            { name: "浅野雅春", title: "教授", researchArea: "高分子物理" },
          ]
        },
        { name: "応用化学専攻", degree: "修士/博士",
          professors: [
            { name: "島田敏宏", title: "教授", researchArea: "無機材料化学/結晶成長" },
            { name: "大熊毅", title: "教授", researchArea: "触媒化学/有機金属" },
          ]
        },
        { name: "電気電子情報工学専攻", degree: "修士/博士",
          professors: [
            { name: "橋本修", title: "教授", researchArea: "アンテナ/電磁波工学" },
            { name: "池辺将之", title: "教授", researchArea: "集積回路/VLSI" },
          ]
        },
        { name: "情報科学専攻", degree: "修士/博士",
          professors: [
            { name: "栗原正仁", title: "教授", researchArea: "人工知能/知識科学" },
            { name: "山本雅人", title: "教授", researchArea: "複雑系/最適化" },
          ]
        },
        { name: "建築都市空間デザイン専攻", degree: "修士/博士",
          professors: [
            { name: "瀬戸口剛", title: "教授", researchArea: "都市デザイン/寒冷地建築" },
            { name: "羽山広文", title: "教授", researchArea: "建築環境工学" },
          ]
        },
      ]},
      { name: "農学院", nameJa: "農学院", nameEn: "Graduate School of Agriculture", admissionUrl: "https://www.agr.hokudai.ac.jp/", facultyUrl: "https://www.agr.hokudai.ac.jp/en/r/faculty", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "農学専攻", degree: "修士/博士", description: "作物科学·食品科学·林学·农业经济学",
          professors: [
            { name: "岩間和人", title: "教授", researchArea: "作物学/環境ストレス生理" },
            { name: "森春英", title: "教授", researchArea: "応用微生物学" },
            { name: "澤山茂樹", title: "教授", researchArea: "農業経済学" },
            { name: "渋谷正人", title: "教授", researchArea: "森林生態学" },
            { name: "川端潤", title: "教授", researchArea: "食品科学/有機化学" },
          ]
        },
        { name: "生命科学IGP", degree: "修士/博士", description: "全英文プログラム",
          professors: [
            { name: "藤田知道", title: "教授", researchArea: "植物分子生物学" },
            { name: "Mark Tamas", title: "教授", researchArea: "植物生理生態学" },
          ]
        },
      ]},
      { name: "医学研究科", nameJa: "医学研究科", nameEn: "Graduate School of Medicine", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "医学専攻", degree: "博士",
          professors: [
            { name: "畠山鎮次", title: "教授", researchArea: "免疫学/分子医科学" },
            { name: "近藤亨", title: "教授", researchArea: "腫瘍生物学" },
            { name: "福原崇介", title: "教授", researchArea: "ウイルス学" },
          ]
        },
      ]},
      { name: "歯学院", nameJa: "歯学院", nameEn: "Graduate School of Dental Medicine", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "歯学専攻", degree: "博士",
          professors: [
            { name: "吉田篤", title: "教授", researchArea: "歯科矯正学" },
            { name: "井上哲", title: "教授", researchArea: "口腔解剖学" },
          ]
        },
      ]},
      { name: "水産科学院", nameJa: "水産科学院", nameEn: "Graduate School of Fisheries Sciences", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "水産科学専攻", degree: "修士/博士", description: "海洋生物资源·水产増殖·食品科学",
          professors: [
            { name: "桜井泰憲", title: "教授", researchArea: "海洋生物学/頭足類生態" },
            { name: "都木靖彰", title: "教授", researchArea: "水産増殖学/サケ科魚類" },
            { name: "今村央", title: "教授", researchArea: "魚類系統分類学" },
          ]
        },
      ]},
      { name: "環境科学院", nameJa: "環境科学院", nameEn: "Graduate School of Environmental Science", admissionUrl: "https://www.ees.hokudai.ac.jp/?page_id=2783", facultyUrl: "https://www.ees.hokudai.ac.jp/kigaku/?page_id=38&lang=en", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "環境科学専攻", degree: "修士/博士", description: "含スペシャルグラント（全額免除+RA、4年総支援約450万円）",
          professors: [
            { name: "山中康裕", title: "教授", researchArea: "地球システムモデリング" },
            { name: "露崎史朗", title: "教授", researchArea: "植物生態学/植生動態" },
            { name: "渡邉悌二", title: "教授", researchArea: "環境地理学/自然保護" },
            { name: "藤井賢彦", title: "教授", researchArea: "海洋環境科学" },
          ]
        },
      ]},
      { name: "医理工学院", nameJa: "医理工学院", nameEn: "Graduate School of Biomedical Engineering", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月"], programs: [
        { name: "医理工学専攻", degree: "修士/博士",
          professors: [
            { name: "清水孝一", title: "教授", researchArea: "生体医用光学/医用画像" },
            { name: "武田晴治", title: "教授", researchArea: "バイオメカニクス" },
          ]
        },
      ]},
      { name: "生命科学院", nameJa: "生命科学院", nameEn: "Graduate School of Life Science", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "生命科学専攻", degree: "修士/博士",
          professors: [
            { name: "綾部時芳", title: "教授", researchArea: "分子発生生物学" },
            { name: "髙木睦", title: "教授", researchArea: "細胞工学/バイオプロセス" },
            { name: "尾之内均", title: "教授", researchArea: "植物分子遺伝学" },
          ]
        },
        { name: "IGP特別枠（MEXT奖学金）", degree: "修士/博士", professors: [] },
      ]},
      { name: "国際広報メディア·観光学院", nameJa: "国際広報メディア·観光学院", nameEn: "Graduate School of International Media, Communication and Tourism Studies", admissionUrl: "https://www.imc.hokudai.ac.jp/", facultyUrl: "https://www.imc.hokudai.ac.jp/english/academics/faculty_profiles/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "国際広報メディア·観光専攻", degree: "修士/博士", description: "传媒学·观光学·国际传播",
          professors: [
            { name: "西村宣彦", title: "教授", researchArea: "ジャーナリズム論/メディア法" },
            { name: "山田義裕", title: "教授", researchArea: "国際コミュニケーション" },
            { name: "山村高淑", title: "教授", researchArea: "観光学/文化遺産マネジメント" },
            { name: "石井クンツ昌子", title: "教授", researchArea: "国際社会学/家族社会学" },
          ]
        },
      ]},
      { name: "保健科学院", nameJa: "保健科学院", nameEn: "Graduate School of Health Sciences", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "保健科学専攻", degree: "修士/博士", description: "看護学·放射線技術科学·検査技術科学",
          professors: [
            { name: "丸山知子", title: "教授", researchArea: "看護学/在宅ケア" },
            { name: "杉森博行", title: "教授", researchArea: "医用画像工学" },
          ]
        },
      ]},
      { name: "獣医学院", nameJa: "獣医学院", nameEn: "Graduate School of Veterinary Medicine", admissionUrl: "https://www.hokudai.ac.jp/", facultyUrl: "https://researchers.general.hokudai.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月"], programs: [
        { name: "獣医学専攻", degree: "博士", description: "国際学生向け博士課程MEXT有",
          professors: [
            { name: "木村享史", title: "教授", researchArea: "獣医内科学/感染症" },
            { name: "滝口満喜", title: "教授", researchArea: "獣医外科学" },
          ]
        },
      ]},
    ],
    dataSources: ["https://researchers.general.hokudai.ac.jp/", "https://www.agr.hokudai.ac.jp/en/r/faculty", "https://www.imc.hokudai.ac.jp/english/academics/faculty_profiles/", "https://www.ees.hokudai.ac.jp/?page_id=2783"],
  },
  {
    universityId: "kyushu-u",
    universityName: "九州大学",
    type: "national", tier: "Top Type (S)",
    portalUrl: "https://www.kyushu-u.ac.jp/en/admission/",
    professorSearchUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search",
    tuitionInfo: { examFee: "30,000円（研究生9,800円）", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人文科学府", nameJa: "人文科学府", nameEn: "Graduate School of Humanities", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "哲学専攻", degree: "修士/博士", professors: [] },
        { name: "史学専攻", degree: "修士/博士", professors: [] },
        { name: "文学専攻", degree: "修士/博士", professors: [] },
        { name: "言語学専攻", degree: "修士/博士", professors: [] },
      ]},
      { name: "人間環境学府", nameJa: "人間環境学府", nameEn: "Graduate School of Human-Environment Studies", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "持続可能な建築·都市システム（国際修士）", degree: "修士", professors: [] },
        { name: "都市共生デザイン専攻", degree: "修士/博士", professors: [] },
      ]},
      { name: "法学府", nameJa: "法学府", nameEn: "Graduate School of Law", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "法律学専攻", degree: "修士/博士", professors: [] },
      ]},
      { name: "経済学府", nameJa: "経済学府", nameEn: "Graduate School of Economics", admissionUrl: "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_15/", facultyUrl: "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_14/", hasEnglishProgram: true, intakeMonths: ["10月"], programs: [
        { name: "IPPE（国际政治経済プログラム）", degree: "修士/博士", professors: [] },
        { name: "IPFBE（国际企业金融プログラム）", degree: "修士/博士", professors: [] },
        { name: "IPMA（国际経営プログラム）", degree: "修士/博士", professors: [] },
      ]},
      { name: "理学府", nameJa: "理学府", nameEn: "Graduate School of Science", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "物理学専攻", degree: "修士/博士", professors: [] },
        { name: "化学専攻", degree: "修士/博士", professors: [] },
        { name: "地球惑星科学専攻", degree: "修士/博士", professors: [] },
      ]},
      { name: "工学府", nameJa: "工学府", nameEn: "Graduate School of Engineering", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [{ name: "高松洋", title: "教授", researchArea: "熱工学/伝熱制御" }, { name: "澤田廉士", title: "教授", researchArea: "MEMS/マイクロセンサー" }]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [{ name: "古賀雅史", title: "教授", researchArea: "電子デバイス/半導体" }, { name: "佐々木隆", title: "教授", researchArea: "電力变换工学" }]
        },
        { name: "材料工学専攻", degree: "修士/博士",
          professors: [{ name: "中野博昭", title: "教授", researchArea: "表面処理/電析" }, { name: "田中將己", title: "教授", researchArea: "結晶塑性/金属組織" }]
        },
        { name: "応用化学専攻", degree: "修士/博士",
          professors: [{ name: "林潤一郎", title: "教授", researchArea: "反应工学/バイオマス変換" }, { name: "島ノ江憲剛", title: "教授", researchArea: "セラミックス/ガスセンサー" }]
        },
        { name: "建設工学専攻", degree: "修士/博士",
          professors: [{ name: "善功企", title: "教授", researchArea: "海岸工学/環境水理学" }]
        },
      ]},
      { name: "システム情報科学府", nameJa: "システム情報科学府", nameEn: "Graduate School of Information Science and Electrical Engineering", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "情報科学専攻", degree: "修士/博士", description: "コンピュータ科学·AI·网络安全",
          professors: [{ name: "竹田正幸", title: "教授", researchArea: "アルゴリズム/情報検索" }, { name: "實藤雅和", title: "教授", researchArea: "プログラミング言語" }, { name: "内田誠一", title: "教授", researchArea: "パターン認識/画像処理" }]
        },
        { name: "電気電子システム専攻", degree: "修士/博士",
          professors: [{ name: "古関隆章", title: "教授", researchArea: "電力システム/スマートグリッド" }, { name: "古賀雅史", title: "教授", researchArea: "電子デバイス" }]
        },
      ]},
      { name: "農学府", nameJa: "農学府", nameEn: "Graduate School of Bioresource and Bioenvironmental Sciences", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "生物資源環境科学専攻", degree: "修士/博士",
          professors: [{ name: "森田茂樹", title: "教授", researchArea: "植物遺伝育種学" }, { name: "吉村淳", title: "教授", researchArea: "環境土壌学" }]
        },
      ]},
      { name: "医学系学府", nameJa: "医学系学府", nameEn: "Graduate School of Medical Sciences", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月"], programs: [
        { name: "博士課程（国際教育研究コース）", degree: "博士", description: "年2回入试",
          professors: [{ name: "中山敬一", title: "教授", researchArea: "分子細胞生物学" }, { name: "福井宣規", title: "教授", researchArea: "免疫学" }]
        },
      ]},
      { name: "薬学府", nameJa: "薬学府", nameEn: "Graduate School of Pharmaceutical Sciences", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "薬科学専攻", degree: "修士/博士",
          professors: [{ name: "大嶽康敬", title: "教授", researchArea: "有機化学/創薬化学" }, { name: "神谷雅子", title: "教授", researchArea: "生化学/蛋白質科学" }]
        },
        { name: "薬学専攻", degree: "博士", professors: [] },
      ]},
      { name: "芸術工学府", nameJa: "芸術工学府", nameEn: "Graduate School of Design", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: false, intakeMonths: ["4月", "10月"], programs: [
        { name: "デザイン専攻", degree: "修士/博士", description: "成績優秀者選抜+一般入試。音響·画像·環境·ストラテジック",
          professors: [{ name: "尾方義人", title: "教授", researchArea: "プロダクトデザイン" }, { name: "池田史子", title: "教授", researchArea: "ビジュアルデザイン" }]
        },
      ]},
      { name: "統合新領域学府", nameJa: "統合新領域学府", nameEn: "Graduate School of Integrated Frontier Sciences", admissionUrl: "https://www.kyushu-u.ac.jp/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["10月"], programs: [
        { name: "自動車科学専攻", degree: "修士/博士", description: "外国人留学生特別選抜。自動車のリサイクル·安全·エネルギー",
          professors: [{ name: "北條春夫", title: "教授", researchArea: "自動車工学/振動制御" }, { name: "吉永耕二", title: "教授", researchArea: "LCA/リサイクル工学" }]
        },
      ]},
      { name: "総合理工学府（IGSES）", nameJa: "総合理工学府", nameEn: "Interdisciplinary Graduate School of Engineering Sciences", admissionUrl: "https://www.tj.kyushu-u.ac.jp/en/exam/", facultyUrl: "https://hyoka.ofc.kyushu-u.ac.jp/search", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "国際修士プログラム", degree: "修士", description: "留学生最常用入口，覆盖工学全领域",
          professors: [{ name: "古山通久", title: "教授", researchArea: "計算材料科学/触媒" }, { name: "松村晶", title: "教授", researchArea: "電子顕微鏡/ナノ材料" }, { name: "日野英逸", title: "教授", researchArea: "機械学習/データ科学" }]
        },
        { name: "博士プログラム", degree: "博士", professors: [] },
      ]},
    ],
    dataSources: ["https://hyoka.ofc.kyushu-u.ac.jp/search", "https://www.econ.kyushu-u.ac.jp/english/pa_index/pa_index2/pa_14/", "https://www.design.kyushu-u.ac.jp/en/faculty/"],
  },
  {
    universityId: "titech",
    universityName: "东京科学大学",
    type: "national", tier: "Top Type (S)",
    portalUrl: "https://admissions.isct.ac.jp",
    professorSearchUrl: "https://search.star.titech.ac.jp/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "635,400円" },
    graduateSchools: [
      { name: "理学院", nameJa: "理学院", nameEn: "School of Science", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [{ name: "谷口隆晴", title: "教授", researchArea: "幾何学/位相幾何学" }, { name: "志甫淳", title: "教授", researchArea: "数论/代数幾何" }]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [{ name: "藤澤利正", title: "教授", researchArea: "量子ナノ物性/メゾスコピック系" }, { name: "笹川崇男", title: "教授", researchArea: "強相関電子系/超伝導" }, { name: "高橋篤司", title: "教授", researchArea: "素粒子理論" }]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [{ name: "岩澤伸治", title: "教授", researchArea: "有機合成化学/天然物合成" }, { name: "大谷文章", title: "教授", researchArea: "光触媒/光化学" }, { name: "田中健", title: "教授", researchArea: "有機金属化学" }]
        },
        { name: "地球惑星科学専攻", degree: "修士/博士",
          professors: [{ name: "中村佳子", title: "教授", researchArea: "地球惑星内部物理学" }, { name: "関根康人", title: "教授", researchArea: "地球生命環境科学" }]
        },
      ]},
      { name: "工学院", nameJa: "工学院", nameEn: "School of Engineering", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://www.titech.ac.jp/english/prospective-students/faculty/ee", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [{ name: "井上裕嗣", title: "教授", researchArea: "材料力学/破壊力学" }, { name: "岡田健一", title: "教授", researchArea: "マイクロマシン/加工技術" }, { name: "小酒英範", title: "教授", researchArea: "燃焼工学/发动机" }]
        },
        { name: "電気電子工学専攻", degree: "修士/博士",
          professors: [{ name: "波多野睦子", title: "教授", researchArea: "量子デバイス/ダイヤモンド半導体" }, { name: "宮本恭幸", title: "教授", researchArea: "化合物半導体デバイス" }]
        },
        { name: "情報通信工学専攻", degree: "修士/博士",
          professors: [{ name: "山田功", title: "教授", researchArea: "無線通信/信号処理" }, { name: "府川和彦", title: "教授", researchArea: "移動通信/MIMO" }]
        },
        { name: "システム制御工学専攻", degree: "修士/博士",
          professors: [{ name: "三平満司", title: "教授", researchArea: "ロボット制御/非線形制御" }, { name: "井村順一", title: "教授", researchArea: "制御理論/ネットワーク制御" }]
        },
        { name: "経営工学専攻", degree: "修士/博士",
          professors: [{ name: "圓川隆夫", title: "教授", researchArea: "生産管理/品質管理" }, { name: "水山元", title: "教授", researchArea: "オペレーションズリサーチ" }]
        },
      ]},
      { name: "物質理工学院", nameJa: "物質理工学院", nameEn: "School of Materials and Chemical Technology", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://educ.titech.ac.jp/mat/eng/faculty/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "材料工学専攻", degree: "修士/博士",
          professors: [{ name: "細田秀樹", title: "教授", researchArea: "形状記憶合金/金属组织" }, { name: "中村吉男", title: "教授", researchArea: "電子顕微鏡/界面構造" }]
        },
        { name: "応用化学専攻", degree: "修士/博士",
          professors: [{ name: "小西玄一", title: "教授", researchArea: "高分子化学/機能材料" }, { name: "稲木信介", title: "教授", researchArea: "電気化学/有機電解合成" }]
        },
      ]},
      { name: "情報理工学院", nameJa: "情報理工学院", nameEn: "School of Computing", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "情報工学専攻", degree: "修士/博士", description: "AI·数据科学·软件工程·日本最强CS",
          professors: [{ name: "岡崎直観", title: "教授", researchArea: "自然言語処理/機械学習" }, { name: "佐藤いまり", title: "教授", researchArea: "コンピュータビジョン" }, { name: "渡辺治", title: "教授", researchArea: "計算理論/量子計算" }, { name: "田中圭介", title: "教授", researchArea: "暗号/情報セキュリティ" }]
        },
        { name: "数理·計算科学専攻", degree: "修士/博士",
          professors: [{ name: "山下真", title: "教授", researchArea: "数理最適化" }, { name: "小島定吉", title: "教授", researchArea: "計算幾何学" }]
        },
      ]},
      { name: "生命理工学院", nameJa: "生命理工学院", nameEn: "School of Life Science and Technology", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "生命理工学専攻", degree: "修士/博士",
          professors: [{ name: "上田宏", title: "教授", researchArea: "蛋白質工学/抗体工学" }, { name: "田口英樹", title: "教授", researchArea: "分子シャペロン/蛋白質科学" }]
        },
      ]},
      { name: "環境·社会理工学院", nameJa: "環境·社会理工学院", nameEn: "School of Environment and Society", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://educ.titech.ac.jp/tse/eng/faculty/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "建築学専攻", degree: "修士/博士",
          professors: [{ name: "藤田康仁", title: "教授", researchArea: "建築計画/施設マネジメント" }, { name: "山田哲", title: "教授", researchArea: "建築構造/耐震工学" }]
        },
        { name: "土木工学専攻", degree: "修士/博士",
          professors: [{ name: "二羽淳一郎", title: "教授", researchArea: "コンクリート工学" }, { name: "高橋章浩", title: "教授", researchArea: "地盤工学/地震防災" }]
        },
        { name: "都市工学専攻", degree: "修士/博士",
          professors: [{ name: "室町泰徳", title: "教授", researchArea: "交通計画/都市計画" }, { name: "髙木泰士", title: "教授", researchArea: "水環境/都市水文学" }]
        },
        { name: "社会·人間科学専攻", degree: "修士/博士",
          professors: [{ name: "金子宏直", title: "教授", researchArea: "知的財産法/技術経営" }, { name: "中島秀人", title: "教授", researchArea: "科学技術史/STS" }]
        },
        { name: "イノベーション科学専攻", degree: "修士/博士",
          professors: [{ name: "仙石愼太郎", title: "教授", researchArea: "技術経営/イノベーション論" }]
        },
      ]},
      { name: "医歯学総合研究科", nameJa: "医歯学総合研究科", nameEn: "Graduate School of Medical and Dental Sciences", admissionUrl: "https://admissions.isct.ac.jp", facultyUrl: "https://search.star.titech.ac.jp/", hasEnglishProgram: true, intakeMonths: ["4月", "9月"], programs: [
        { name: "医科学専攻", degree: "修士/博士",
          professors: [{ name: "田中博", title: "教授", researchArea: "バイオインフォマティクス" }, { name: "高柳広", title: "教授", researchArea: "骨免疫学" }]
        },
        { name: "歯科学専攻", degree: "博士", professors: [] },
      ]},
    ],
    dataSources: ["https://search.star.titech.ac.jp/", "https://admissions.isct.ac.jp", "https://educ.titech.ac.jp/mat/eng/faculty/", "https://educ.titech.ac.jp/tse/eng/faculty/"],
  },
  {
    universityId: "tsukuba",
    universityName: "筑波大学",
    type: "national", tier: "Top Type (S)",
    portalUrl: "https://eng.ap-graduate.tsukuba.ac.jp/",
    professorSearchUrl: "https://trios.tsukuba.ac.jp/en/",
    tuitionInfo: { examFee: "30,000円", admissionFee: "282,000円", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人文社会科学研究群", nameJa: "人文社会科学研究群", nameEn: "Degree Programs in Humanities and Social Sciences", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "人文学専攻", degree: "修士/博士", description: "哲学·史学·文学·考古学",
          professors: [{ name: "武田篤志", title: "教授", researchArea: "日本史学/近世史" }, { name: "大貫隆", title: "教授", researchArea: "宗教学/初期キリスト教" }, { name: "伊藤たかね", title: "教授", researchArea: "言語学/英語学" }]
        },
        { name: "国際公共政策（IPP）", degree: "修士/博士",
          professors: [{ name: "辻中豊", title: "教授", researchArea: "政治学/NPO·市民社会" }, { name: "大西隆", title: "教授", researchArea: "都市計画/地域政策" }]
        },
        { name: "国際日本研究専攻", degree: "修士/博士",
          professors: [{ name: "五十嵐浩也", title: "教授", researchArea: "日本文化研究/感性情報" }, { name: "朴ジョンヨン", title: "教授", researchArea: "日本語教育/異文化間教育" }]
        },
      ]},
      { name: "数理物質科学研究群", nameJa: "数理物質科学研究群", nameEn: "Degree Programs in Pure and Applied Sciences", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [{ name: "木村達雄", title: "教授", researchArea: "代数学/数论幾何" }, { name: "竹内潔", title: "教授", researchArea: "代数解析/D-加群" }]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [{ name: "日野健一", title: "教授", researchArea: "量子ダイナミクス/物性理論" }, { name: "金信弘", title: "教授", researchArea: "高エネルギー物理学" }]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [{ name: "山本泰彦", title: "教授", researchArea: "生物無機化学/ヘム蛋白質" }, { name: "鍋島達弥", title: "教授", researchArea: "超分子化学" }]
        },
        { name: "応用理工学専攻", degree: "修士/博士", description: "材料·物理工学",
          professors: [{ name: "櫻井岳暁", title: "教授", researchArea: "半導体工学/太陽電池" }, { name: "関場大一郎", title: "教授", researchArea: "電子顕微鏡/ナノ材料" }]
        },
      ]},
      { name: "システム情報工学研究群", nameJa: "システム情報工学研究群", nameEn: "Degree Programs in Systems and Information Engineering", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "社会工学専攻", degree: "修士/博士",
          professors: [{ name: "岡本直久", title: "教授", researchArea: "交通計画/都市経済" }, { name: "石田東生", title: "教授", researchArea: "交通工学/まちづくり" }]
        },
        { name: "サービス工学専攻", degree: "修士/博士",
          professors: [{ name: "原辰徳", title: "教授", researchArea: "サービス科学/価値共創" }, { name: "吉田健一", title: "教授", researchArea: "ビジネスモデル/経営情報" }]
        },
        { name: "リスク工学専攻", degree: "修士/博士",
          professors: [{ name: "糸井川栄一", title: "教授", researchArea: "防災/危機管理" }, { name: "鈴木勉", title: "教授", researchArea: "空間情報/GIS" }]
        },
        { name: "情報理工（CS）専攻", degree: "修士/博士", description: "コンピュータ科学·ソフトウェア工学",
          professors: [{ name: "三谷純", title: "教授", researchArea: "CG/形状モデリング" }, { name: "亀山幸義", title: "教授", researchArea: "プログラム言語/コンパイラ" }, { name: "佐久間淳", title: "教授", researchArea: "機械学習/データマイニング" }]
        },
        { name: "知能機能システム専攻", degree: "修士/博士",
          professors: [{ name: "大田友一", title: "教授", researchArea: "バーチャルリアリティ/CG" }, { name: "星野聖", title: "教授", researchArea: "ヒューマンインタフェース" }]
        },
        { name: "構造エネルギー工学専攻", degree: "修士/博士",
          professors: [{ name: "石田政義", title: "教授", researchArea: "エネルギーシステム/水素" }, { name: "田村智彦", title: "教授", researchArea: "電力工学" }]
        },
      ]},
      { name: "生命地球科学研究群", nameJa: "生命地球科学研究群", nameEn: "Degree Programs in Life and Earth Sciences", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "生物学専攻", degree: "修士/博士",
          professors: [{ name: "千葉親文", title: "教授", researchArea: "分子遺伝学/RNA生物学" }, { name: "林純一", title: "教授", researchArea: "分子進化学/ミトコンドリア" }]
        },
        { name: "生物資源科学専攻", degree: "修士/博士",
          professors: [{ name: "宮崎均", title: "教授", researchArea: "食品科学/発酵学" }, { name: "石井康之", title: "教授", researchArea: "作物学/草地学" }]
        },
        { name: "農学専攻", degree: "修士/博士",
          professors: [{ name: "山路永司", title: "教授", researchArea: "農業工学/農村計画" }, { name: "佐藤忍", title: "教授", researchArea: "植物細胞壁/バイオマス" }]
        },
        { name: "地球科学専攻", degree: "修士/博士",
          professors: [{ name: "久田健一郎", title: "教授", researchArea: "地質学/付加体" }, { name: "田中博", title: "教授", researchArea: "気象学/大気科学" }]
        },
      ]},
      { name: "人間総合科学研究群", nameJa: "人間総合科学研究群", nameEn: "Degree Programs in Comprehensive Human Sciences", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "教育学専攻", degree: "修士/博士",
          professors: [{ name: "佐藤博志", title: "教授", researchArea: "教育経営学/学校改善" }, { name: "浜田博文", title: "教授", researchArea: "教育行政学" }]
        },
        { name: "心理学専攻", degree: "修士/博士",
          professors: [{ name: "綾部早穂", title: "教授", researchArea: "認知心理学/嗅觉" }, { name: "望月聡", title: "教授", researchArea: "臨床心理学/不安障害" }]
        },
        { name: "体育科学専攻", degree: "修士/博士",
          professors: [{ name: "髙木英樹", title: "教授", researchArea: "スポーツ流体力学" }, { name: "西嶋尚彦", title: "教授", researchArea: "スポーツトレーニング科学" }]
        },
        { name: "芸術学専攻", degree: "修士/博士",
          professors: [{ name: "五十嵐浩也", title: "教授", researchArea: "メディアアート/感覚デザイン" }, { name: "山本美希", title: "教授", researchArea: "現代美術" }]
        },
      { name: "障害科学専攻", degree: "修士/博士",
          professors: [{ name: "名川勝", title: "教授", researchArea: "特別支援教育/発達障害" }]
        },
        { name: "医学専攻", degree: "博士",
          professors: [{ name: "濱口功", title: "教授", researchArea: "ウイルス学/感染症" }]
        },
      ]},
      { name: "ビジネス科学研究群", nameJa: "ビジネス科学研究群", nameEn: "Degree Programs in Business Sciences", admissionUrl: "https://ac.tsukuba.ac.jp/examinations/application-guidelines/", facultyUrl: "https://trios.tsukuba.ac.jp/en/", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "法学専攻", degree: "修士/博士",
          professors: [{ name: "興津征雄", title: "教授", researchArea: "行政法/法政策" }, { name: "田村陽子", title: "教授", researchArea: "国際法" }]
        },
        { name: "経営学専攻", degree: "修士/博士",
          professors: [{ name: "立本博文", title: "教授", researchArea: "技術経営/イノベーション" }, { name: "大塚英美", title: "教授", researchArea: "会計学" }]
        },
        { name: "MBA in International Business", degree: "修士", description: "东京校区（文京区）",
          professors: [{ name: "Hector Garcia", title: "教授", researchArea: "国際経営/グローバル戦略" }]
        },
      ]},
    ],
    dataSources: ["https://eng.ap-graduate.tsukuba.ac.jp/", "https://trios.tsukuba.ac.jp/en/", "https://ac.tsukuba.ac.jp/examinations/application-guidelines/"],
  },
  {
    universityId: "hiroshima-u",
    universityName: "広島大学",
    type: "national", tier: "Top Type (S)",
    portalUrl: "https://www.hiroshima-u.ac.jp/en/nyugaku",
    professorSearchUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en",
    tuitionInfo: { examFee: "30,000円（研究生9,800円）", admissionFee: "282,000円（研究生84,600円）", annualTuition: "535,800円" },
    graduateSchools: [
      { name: "人間社会科学研究科", nameJa: "人間社会科学研究科", nameEn: "Graduate School of Humanities and Social Sciences", admissionUrl: "https://www.hiroshima-u.ac.jp/en/gshs/about/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "人間文化専攻", degree: "修士/博士", description: "哲学·倫理学·美学·美術史",
          professors: [{ name: "加藤泰史", title: "教授", researchArea: "哲学/倫理学" }, { name: "三浦正幸", title: "教授", researchArea: "日本美術史/文化財" }]
        },
        { name: "言語科学専攻", degree: "修士/博士",
          professors: [{ name: "西光義弘", title: "教授", researchArea: "言語学/理論言語学" }]
        },
        { name: "国際平和共生（IPCS）", degree: "修士/博士", description: "英語プログラム",
          professors: [{ name: "Mari Katayanagi", title: "教授", researchArea: "平和構築/紛争解決" }]
        },
        { name: "国際経済開発（IEDP）", degree: "修士/博士", description: "英語プログラム",
          professors: [{ name: "金子慎治", title: "教授", researchArea: "開発経済/環境経済" }]
        },
        { name: "教育学専攻", degree: "修士/博士",
          professors: [{ name: "山元隆春", title: "教授", researchArea: "国語教育学/読解指導" }, { name: "木原俊行", title: "教授", researchArea: "教育方法学/ICT教育" }]
        },
        { name: "心理学専攻", degree: "修士/博士",
          professors: [{ name: "杉村和美", title: "教授", researchArea: "発達心理学/青年期" }, { name: "中島健一郎", title: "教授", researchArea: "社会心理学" }]
        },
        { name: "日本語教育専攻", degree: "修士/博士",
          professors: [{ name: "永田良太", title: "教授", researchArea: "日本語教育学/第二言語習得" }]
        },
      ]},
      { name: "先進理工系科学研究科", nameJa: "先進理工系科学研究科", nameEn: "Graduate School of Advanced Science and Engineering", admissionUrl: "https://www.hiroshima-u.ac.jp/en/adse/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "数学専攻", degree: "修士/博士",
          professors: [{ name: "木村俊一", title: "教授", researchArea: "数论/モチーフ理論" }, { name: "石井亮", title: "教授", researchArea: "解析学/微分方程式" }]
        },
        { name: "物理学専攻", degree: "修士/博士",
          professors: [{ name: "小川哲生", title: "教授", researchArea: "物性物理/光物性" }, { name: "志垣賢太", title: "教授", researchArea: "クォーク物理学/RHIC" }]
        },
        { name: "化学専攻", degree: "修士/博士",
          professors: [{ name: "灰野岳晴", title: "教授", researchArea: "構造有機化学/芳香族" }, { name: "犬丸啓", title: "教授", researchArea: "無機固体化学/触媒" }]
        },
        { name: "機械工学専攻", degree: "修士/博士",
          professors: [{ name: "田中義和", title: "教授", researchArea: "生産加工/研削工学" }, { name: "山本元道", title: "教授", researchArea: "溶接工学/接合技術" }]
        },
        { name: "電気システム制御専攻", degree: "修士/博士",
          professors: [{ name: "餘利野直人", title: "教授", researchArea: "電力システム/スマートグリッド" }, { name: "香川直己", title: "教授", researchArea: "制御工学/ロボティクス" }]
        },
        { name: "建築学専攻", degree: "修士/博士",
          professors: [{ name: "大久保孝昭", title: "教授", researchArea: "建築構法/維持管理" }, { name: "石垣文", title: "教授", researchArea: "建築計画/まちづくり" }]
        },
        { name: "情報データ科学専攻", degree: "修士/博士", description: "AI·大数据",
          professors: [{ name: "高橋規一", title: "教授", researchArea: "離散最適化/機械学習" }, { name: "田村慶一", title: "教授", researchArea: "バイオインフォマティクス" }]
        },
        { name: "量子物質専攻", degree: "修士/博士",
          professors: [{ name: "浴野稔一", title: "教授", researchArea: "低温物性/超流動" }]
        },
      ]},
      { name: "統合生命科学研究科", nameJa: "統合生命科学研究科", nameEn: "Graduate School of Integrated Sciences for Life", admissionUrl: "https://www.hiroshima-u.ac.jp/en/ilife", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "生物工学専攻", degree: "修士/博士",
          professors: [{ name: "加藤純一", title: "教授", researchArea: "微生物工学/バイオプロセス" }, { name: "秋庸裕", title: "教授", researchArea: "酵素工学/蛋白質工学" }]
        },
        { name: "生物資源科学専攻", degree: "修士/博士",
          professors: [{ name: "實岡寛文", title: "教授", researchArea: "作物学/資源植物科学" }]
        },
        { name: "基礎生物学専攻", degree: "修士/博士",
          professors: [{ name: "山本卓", title: "教授", researchArea: "ゲノム編集/発生生物学" }]
        },
        { name: "生命環境科学専攻", degree: "修士/博士",
          professors: [{ name: "長沼毅", title: "教授", researchArea: "極限環境生物学/宇宙生物学" }]
        },
      ]},
      { name: "医系科学研究科", nameJa: "医系科学研究科", nameEn: "Graduate School of Biomedical and Health Sciences", admissionUrl: "https://www.hiroshima-u.ac.jp/en/bhs/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: false, intakeMonths: ["4月"], programs: [
        { name: "健康科学専攻", degree: "修士/博士", description: "看護学·理学療法学·作業療法学",
          professors: [{ name: "森山美知子", title: "教授", researchArea: "看護学/慢性疾患看護" }, { name: "浦邉幸夫", title: "教授", researchArea: "スポーツ理学療法学" }]
        },
        { name: "医科学専攻", degree: "博士",
          professors: [{ name: "松川昭博", title: "教授", researchArea: "免疫学/炎症制御" }, { name: "田原栄俊", title: "教授", researchArea: "分子腫瘍学/テロメア" }]
        },
      ]},
      { name: "スマートソサイエティ実践科学研究院", nameJa: "スマートソサイエティ実践科学研究院", nameEn: "Graduate School of Smart Society Sciences", admissionUrl: "https://www.hiroshima-u.ac.jp/index.php/en/smart_society/", facultyUrl: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", hasEnglishProgram: true, intakeMonths: ["4月", "10月"], programs: [
        { name: "スマートソサイエティ専攻", degree: "修士/博士", description: "全英语授课",
          professors: [{ name: "市橋克哉", title: "教授", researchArea: "行政法/ガバナンス" }, { name: "隅谷孝洋", title: "教授", researchArea: "ICT教育/情報基盤" }]
        },
      ]},
    ],
    dataSources: ["https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", "https://www.hiroshima-u.ac.jp/en/adse/", "https://www.hiroshima-u.ac.jp/en/ilife"],
  },
  ...graduateProgramsSupplement,
];

// 各大学全研究者数据库索引
export const universityResearcherDatabases = [
  { university: "东京大学", url: "https://www.u-tokyo.ac.jp/en/research/faculty.html", description: "UTokyo People Search" },
  { university: "京都大学", url: "https://kdb.iimc.kyoto-u.ac.jp/", description: "KDB 教育研究活动数据库（全学统一）" },
  { university: "东京科学大学", url: "https://search.star.titech.ac.jp/", description: "STAR Search" },
  { university: "大阪大学", url: "https://rd.iai.osaka-u.ac.jp/", description: "研究者总览RD" },
  { university: "东北大学", url: "https://www.r-info.tohoku.ac.jp/", description: "R-info 研究者检索" },
  { university: "名古屋大学", url: "https://profs.provost.nagoya-u.ac.jp/", description: "研究者数据库" },
  { university: "北海道大学", url: "https://researchers.general.hokudai.ac.jp/", description: "HU Researcher Database" },
  { university: "九州大学", url: "https://hyoka.ofc.kyushu-u.ac.jp/search", description: "研究者评价数据库" },
  { university: "筑波大学", url: "https://trios.tsukuba.ac.jp/en/", description: "TRIOS 研究者情报系统" },
  { university: "広島大学", url: "https://seeds.office.hiroshima-u.ac.jp/search/index.html?lang=en", description: "Seeds 研究者总览（1,900名）" },
  { university: "早稻田大学", url: "https://w-rdb.waseda.jp/", description: "w-rdb 研究者数据库" },
  { university: "庆应义塾大学", url: "https://k-ris.keio.ac.jp/", description: "K-RIS 研究者情报系统" },
];

export const nationalDatabases = [
  { name: "KAKEN（科研费数据库）", url: "https://kaken.nii.ac.jp/", description: "日本所有科研费获得者检索" },
  { name: "researchmap", url: "https://researchmap.jp/", description: "日本最大研究者数据库（250,000+）" },
  { name: "J-GLOBAL", url: "https://jglobal.jst.go.jp/", description: "JST研究者·论文·专利综合检索" },
];
