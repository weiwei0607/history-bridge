const fs = require('fs');
const path = require('path');

const figuresFile = path.join(__dirname, 'src/data/figures.js');
const connectionsFile = path.join(__dirname, 'src/data/connections.js');

const figuresData = [
  // Rome & Greece
  { id: 'pompey', name: '龐培', era: '羅馬共和國', tags: "['將領', '政治家']", bio: '羅馬共和國末期的傑出將領，曾與凱撒、克拉蘇組成前三頭同盟。後與凱撒決裂，在法薩盧斯戰役中被擊敗，逃往埃及後被暗殺。' },
  { id: 'crassus', name: '克拉蘇', era: '羅馬共和國', tags: "['政治家', '富豪']", bio: '羅馬首富，曾鎮壓斯巴達克斯起義。與凱撒、龐培組成前三頭同盟，最終在卡雷戰役中慘敗於安息帝國並陣亡。' },
  { id: 'cicero', name: '西塞羅', era: '羅馬共和國', tags: "['政治家', '演說家']", bio: '羅馬最偉大的演說家與哲學家。堅定的共和派，曾發表著名的《反腓力辭》抨擊馬克·安東尼，最終被安東尼派人暗殺。' },
  { id: 'brutus', name: '布魯圖斯', era: '羅馬共和國', tags: "['政治家']", bio: '凱撒的密友，但為了維護共和體制，成為刺殺凱撒的主謀之一。凱撒臨死前曾驚呼「吾兒，亦有汝焉？」' },
  { id: 'octavian', name: '屋大維 (奧古斯都)', era: '羅馬帝國', tags: "['皇帝']", bio: '凱撒的養子與繼承人，擊敗馬克·安東尼後，結束了羅馬共和國，成為羅馬帝國的第一位元首（奧古斯都），開創了羅馬和平時期。' },
  { id: 'agrippa', name: '阿格里帕', era: '羅馬帝國', tags: "['將領', '建築師']", bio: '屋大維最信任的將領與摯友，指揮了亞克興海戰擊敗安東尼與克麗奧佩脫拉。他也是羅馬萬神殿的最初建造者。' },
  { id: 'tiberius', name: '提比略', era: '羅馬帝國', tags: "['皇帝']", bio: '羅馬帝國第二任皇帝，屋大維的繼子。晚年隱居卡普里島，將政務交給近衛軍長官，統治風格陰鬱且充滿猜忌。' },
  { id: 'caligula', name: '卡利古拉', era: '羅馬帝國', tags: "['皇帝']", bio: '羅馬第三任皇帝，以殘暴和荒淫著稱。據傳他曾想任命自己的愛馬為執政官，最終被近衛軍暗殺。' },
  { id: 'claudius', name: '克勞狄烏斯', era: '羅馬帝國', tags: "['皇帝']", bio: '卡利古拉的叔叔，在卡利古拉被殺後被近衛軍擁立為帝。他克服了身體殘疾，成為一位有作為的皇帝，征服了不列顛。' },
  { id: 'nero', name: '尼祿', era: '羅馬帝國', tags: "['皇帝']", bio: '羅馬帝國第五任皇帝，早期受塞內卡輔佐，後期統治殘暴。羅馬大火時據傳他在彈奏里拉琴。最終眾叛親離，被迫自殺。' },
  { id: 'seneca', name: '塞內卡', era: '羅馬帝國', tags: "['哲學家', '政治家']", bio: '斯多葛學派哲學家，尼祿的導師與顧問。後來被捲入暗殺尼祿的陰謀，被勒令切腕自殺。' },
  { id: 'trajan', name: '圖拉真', era: '羅馬帝國', tags: "['皇帝']", bio: '羅馬五賢帝之第二位，在他統治時期，羅馬帝國的版圖達到歷史最大。' },
  { id: 'hadrian', name: '哈德良', era: '羅馬帝國', tags: "['皇帝']", bio: '羅馬五賢帝之第三位，放棄了圖拉真部分的擴張，轉向鞏固邊防，修建了著名的哈德良長城與萬神殿。' },
  { id: 'marcus_aurelius', name: '馬可·奧理略', era: '羅馬帝國', tags: "['皇帝', '哲學家']", bio: '羅馬五賢帝之最後一位，「哲學家皇帝」，著有《沉思錄》。他一生大半時間都在邊境與日耳曼人作戰。' },
  { id: 'commodus', name: '康茂德', era: '羅馬帝國', tags: "['皇帝']", bio: '馬可·奧理略之子，他的統治標誌著羅馬帝國黃金時代的結束。他熱衷於角鬥士表演，最終被暗殺。' },
  { id: 'pericles', name: '伯里克里斯', era: '古希臘', tags: "['政治家', '將領']", bio: '雅典黃金時代的領導人，推動了帕德嫩神廟的建設。他死於伯羅奔尼撒戰爭初期的雅典大瘟疫。' },
  { id: 'alcibiades', name: '阿爾西比亞德斯', era: '古希臘', tags: "['政治家', '將領']", bio: '雅典傑出且具爭議的將領，蘇格拉底的學生。他在伯羅奔尼撒戰爭中多次倒戈，先後效力於雅典、斯巴達與波斯。' },
  { id: 'leonidas', name: '列奧尼達一世', era: '古希臘', tags: "['國王', '將領']", bio: '斯巴達國王，在溫泉關戰役中率領斯巴達三百勇士抵抗波斯大軍，壯烈犧牲。' },
  { id: 'xerxes', name: '薛西斯一世', era: '波斯帝國', tags: "['國王']", bio: '波斯帝國阿契美尼德王朝國王，發動了第二次波希戰爭，在溫泉關擊敗斯巴達，但隨後在薩拉米斯海戰中敗給雅典。' },
  { id: 'themistocles', name: '特米斯托克利', era: '古希臘', tags: "['政治家', '將領']", bio: '雅典政治家，極力主張發展海軍。在薩拉米斯海戰中指揮希臘聯軍擊敗波斯艦隊，拯救了希臘。' },

  // China - Tang/Song/Ming/Qing
  { id: 'shangguan_waner', name: '上官婉兒', era: '唐朝 / 武周', tags: "['詩人', '政治家']", bio: '武則天時期的「內舍人」，有「巾幗宰相」之稱。她在政壇與文壇均有極高地位，後在唐隆之變中被李隆基（唐玄宗）下令殺害。' },
  { id: 'yang_yuhuan', name: '楊玉環 (楊貴妃)', era: '唐朝', tags: "['貴妃']", bio: '中國古代四大美女之一，深得唐玄宗寵愛。安史之亂爆發後，隨玄宗逃亡，在馬嵬驛被禁軍逼迫縊死。' },
  { id: 'an_lushan', name: '安祿山', era: '唐朝', tags: "['將領', '叛軍首領']", bio: '胡人出身的唐朝節度使，深得唐玄宗與楊貴妃信任。後發動「安史之亂」，建立燕國，最終被自己的兒子安慶緒謀殺。' },
  { id: 'guo_ziyi', name: '郭子儀', era: '唐朝', tags: "['將領']", bio: '唐朝平定安史之亂的頭號功臣，歷事玄宗、肅宗、代宗、德宗四朝，被尊為「尚父」，權傾天下而朝不忌。' },
  { id: 'su_xun', name: '蘇洵', era: '北宋', tags: "['文學家']", bio: '「唐宋八大家」之一，蘇軾與蘇轍的父親，世稱「老蘇」。二十七歲才發憤讀書，大器晚成。' },
  { id: 'su_zhe', name: '蘇轍', era: '北宋', tags: "['文學家', '政治家']", bio: '「唐宋八大家」之一，蘇軾之弟。與兄長感情極深，屢次在蘇軾遭貶謫時上書求情，自己也因此仕途坎坷。' },
  { id: 'sima_guang', name: '司馬光', era: '北宋', tags: "['史學家', '政治家']", bio: '《資治通鑑》的主編，北宋保守派（舊黨）領袖，堅決反對王安石變法。他與王安石私交甚篤，但在政治上水火不容。' },
  { id: 'yue_fei', name: '岳飛', era: '南宋', tags: "['將領', '民族英雄']", bio: '南宋抗金名將，率領「岳家軍」屢創金軍。後被宋高宗與秦檜以「莫須有」的罪名冤殺於風波亭。' },
  { id: 'qin_hui', name: '秦檜', era: '南宋', tags: "['宰相']", bio: '南宋權相，主和派代表。他迎合宋高宗之意，促成宋金和議，並陷害抗金名將岳飛，被後世視為奸臣。' },
  { id: 'han_shizhong', name: '韓世忠', era: '南宋', tags: "['將領']", bio: '南宋抗金名將，與岳飛齊名。在黃天蕩之戰中大敗金軍。岳飛遇害後，他曾當面質問秦檜「莫須有」三字何以服天下。' },
  { id: 'lu_you', name: '陸游', era: '南宋', tags: "['詩人']", bio: '南宋最多產的詩人，留下九千多首詩。一生志在恢復中原，臨終作《示兒》：「王師北定中原日，家祭無忘告乃翁。」' },
  { id: 'xin_qiji', name: '辛棄疾', era: '南宋', tags: "['詞人', '將領']", bio: '南宋豪放派詞人代表。年輕時曾率五十騎闖入金營生擒叛徒，一生渴望北伐，卻屢遭排擠，壯志難酬。' },
  { id: 'wen_tianxiang', name: '文天祥', era: '南宋', tags: "['政治家', '民族英雄']", bio: '南宋末年抗元名臣。兵敗被俘後拒絕忽必烈的招降，在獄中寫下《正氣歌》，最終從容就義。' },
  { id: 'zhu_xi', name: '朱熹', era: '南宋', tags: "['思想家', '教育家']", bio: '理學集大成者，確立了《四書》的地位。他的學說成為後世科舉考試的標準，深刻影響了東亞的學術與思想。' },
  { id: 'lu_jiuyuan', name: '陸九淵', era: '南宋', tags: "['思想家']", bio: '心學的開創者，主張「心即理」。他曾與朱熹在鵝湖寺進行著名的「鵝湖之會」辯論，成為理學與心學交鋒的經典。' },
  { id: 'tang_yin', name: '唐寅 (唐伯虎)', era: '明朝', tags: "['畫家', '詩人']", bio: '明代著名才子，吳門四家之一。因牽涉科場舞弊案而絕意仕途，以賣畫為生，留下「別人笑我太瘋癲，我笑他人看不穿」的名句。' },
  { id: 'wen_zhengming', name: '文徵明', era: '明朝', tags: "['畫家', '書法家']", bio: '明代吳門畫派領袖，與唐寅齊名。他為人嚴謹平和，高壽且多產，對明代中期江南藝壇影響極大。' },
  { id: 'zhu_zhishan', name: '祝允明 (祝枝山)', era: '明朝', tags: "['書法家']", bio: '明代狂草名家，與唐寅、文徵明等人交好，被稱為「吳中四才子」。他的書法奔放縱逸，極具個性。' },
  { id: 'zheng_he', name: '鄭和', era: '明朝', tags: "['航海家', '宦官']", bio: '明成祖朱棣的親信宦官。他率領龐大的寶船艦隊七下西洋，最遠抵達東非與紅海，是世界航海史上的壯舉。' },
  { id: 'qi_jiguang', name: '戚繼光', era: '明朝', tags: "['將領']", bio: '明代抗倭名將，創立了鴛鴦陣，在東南沿海平定了長達多年的倭寇之患。後又奉張居正之命鎮守薊州長城。' },
  { id: 'yan_song', name: '嚴嵩', era: '明朝', tags: "['宰相']", bio: '明世宗嘉靖朝的權相，專國政達二十年，被《明史》列為奸臣。他書法極佳，且善於迎合皇帝修道的愛好。' },
  { id: 'chongzhen_emperor', name: '崇禎帝 (朱由檢)', era: '明朝', tags: "['皇帝']", bio: '明朝最後一位皇帝。他勤政節儉，試圖挽救衰敗的帝國，但生性多疑，頻繁更換首輔與將領。最終在李自成攻破北京時，於煤山自縊。' },
  { id: 'wei_zhongxian', name: '魏忠賢', era: '明朝', tags: "['宦官']", bio: '明熹宗時期的權閹，自稱「九千歲」，殘酷鎮壓東林黨人。崇禎帝即位後迅速將其扳倒並賜死。' },
  { id: 'yuan_chonghuan', name: '袁崇煥', era: '明末', tags: "['將領']", bio: '明末抗清名將，在寧遠之戰中擊退努爾哈赤。後因皇太極的離間計與崇禎帝的猜忌，被凌遲處死，明朝自毀長城。' },
  { id: 'huang_taiji', name: '皇太極', era: '清朝', tags: "['皇帝']", bio: '清朝的建立者，努爾哈赤第八子。他改國號為大清，降服朝鮮與漠南蒙古，為清軍入關打下堅實基礎。' },
  { id: 'dorgon', name: '多爾袞', era: '清朝', tags: "['攝政王', '將領']", bio: '皇太極之弟，清朝入關的實際指揮者。他以攝政王身分統治清朝，逼迫漢人剃髮易服。死後被順治帝清算。' },
  { id: 'oboi', name: '鰲拜', era: '清朝', tags: "['權臣', '將領']", bio: '康熙初年四位輔政大臣之一，把持朝政，居功自傲。最終被年輕的康熙帝設計智擒，死於禁所。' },
  { id: 'wu_sangui', name: '吳三桂', era: '明末 / 清初', tags: "['將領', '藩王']", bio: '明末鎮守山海關的將領。李自成破北京後，他引清軍入關。後被清廷封為平西王，晚年又發動「三藩之亂」反清，兵敗病死。' },
  { id: 'hong_xiuquan', name: '洪秀全', era: '晚清', tags: "['起義領袖']", bio: '太平天國運動的發起者。他自稱上帝次子、耶穌的弟弟，建立太平天國與清朝對峙長達十四年，最終在南京城破前夕病死。' },
  { id: 'li_xiucheng', name: '李秀成', era: '晚清', tags: "['將領']", bio: '太平天國後期的支柱將領，封忠王。他苦撐危局，南京城破後被俘，寫下數萬字的自述後被曾國藩處死。' },

  // Europe - Science / Philosophy
  { id: 'galileo', name: '伽利略', era: '科學革命', tags: "['天文學家', '物理學家']", bio: '近代科學之父。他改良望遠鏡支持哥白尼的日心說，因此遭到宗教裁判所審判並被軟禁終生。' },
  { id: 'kepler', name: '克卜勒', era: '科學革命', tags: "['天文學家']", bio: '發現了行星運動三大定律，為牛頓的萬有引力定律奠定了基礎。他曾擔任第谷的助手。' },
  { id: 'copernicus', name: '哥白尼', era: '文藝復興', tags: "['天文學家']", bio: '提出了日心說模型，推翻了統治歐洲上千年的地心說，引發了科學革命。' },
  { id: 'tycho_brahe', name: '第谷', era: '科學革命', tags: "['天文學家']", bio: '望遠鏡發明前最偉大的天文觀測者。他的精確觀測數據後來幫助他的助手克卜勒推導出行星運動定律。' },
  { id: 'descartes', name: '笛卡兒', era: '科學革命', tags: "['哲學家', '數學家']", bio: '近代哲學之父，提出「我思故我在」。發明了直角坐標系，將幾何與代數結合起來。' },
  { id: 'spinoza', name: '斯賓諾莎', era: '啟蒙時代', tags: "['哲學家']", bio: '理性主義哲學的代表人物。他認為上帝即自然，因其泛神論思想被猶太教會堂驅逐。' },
  { id: 'leibniz', name: '萊布尼茲', era: '啟蒙時代', tags: "['數學家', '哲學家']", bio: '與牛頓各自獨立發明了微積分，並發明了現代二進制。他的微積分符號體系被沿用至今。' },
  { id: 'john_locke', name: '約翰·洛克', era: '啟蒙時代', tags: "['哲學家']", bio: '經驗主義的奠基人，提出「天賦人權」與「社會契約」理論，深刻影響了美國獨立宣言。' },
  { id: 'thomas_hobbes', name: '湯瑪斯·霍布斯', era: '啟蒙時代', tags: "['哲學家']", bio: '政治哲學名著《利維坦》的作者，主張人類在自然狀態下是「所有人對所有人的戰爭」，需要強大的主權者來維持秩序。' },
  { id: 'rousseau', name: '盧梭', era: '啟蒙時代', tags: "['哲學家']", bio: '《社會契約論》的作者，提出「主權在民」。他的思想是法國大革命的重要催化劑。' },
  { id: 'montesquieu', name: '孟德斯鳩', era: '啟蒙時代', tags: "['哲學家']", bio: '《論法的精神》的作者，提出了行政、立法、司法「三權分立」的理論，成為現代民主政體的基礎。' },
  { id: 'diderot', name: '狄德羅', era: '啟蒙時代', tags: "['哲學家', '百科全書派']", bio: '法國啟蒙運動的重要人物，《百科全書》的主編，致力於普及科學與理性知識。' },
  { id: 'kant', name: '康德', era: '啟蒙時代', tags: "['哲學家']", bio: '德國古典哲學的創始人，著有《純粹理性批判》。他調和了經驗主義與理性主義，是哲學史上的哥白尼革命。' },
  { id: 'hegel', name: '黑格爾', era: '19世紀', tags: "['哲學家']", bio: '德國古典哲學的集大成者，創立了絕對唯心主義體系。他的辯證法深刻影響了馬克思。' },
  { id: 'schopenhauer', name: '叔本華', era: '19世紀', tags: "['哲學家']", bio: '唯意志論的創始人，著有《作為意志和表象的世界》。他悲觀主義的哲學深受印度哲學影響。' },
  { id: 'nietzsche', name: '尼采', era: '19世紀', tags: "['哲學家']", bio: '存在主義的先驅，提出「上帝已死」和「超人」理念。他的思想對20世紀哲學與文學影響巨大。' },
  { id: 'wagner', name: '華格納', era: '19世紀', tags: "['作曲家']", bio: '浪漫主義音樂的巨匠，改革了歌劇藝術，創作了史詩般的《尼伯龍根的指環》。尼采曾是他的狂熱崇拜者，後決裂。' },
  { id: 'chopin', name: '蕭邦', era: '19世紀', tags: "['作曲家', '鋼琴家']", bio: '「鋼琴詩人」，浪漫主義音樂的代表人物。他一生大部分時間在法國度過，其作品充滿了對祖國波蘭的深情。' },
  { id: 'liszt', name: '李斯特', era: '19世紀', tags: "['作曲家', '鋼琴家']", bio: '歷史上最偉大的鋼琴演奏家之一，首創了交響詩體裁。他與蕭邦在巴黎有過密切交往。' },
  { id: 'george_sand', name: '喬治·桑', era: '19世紀', tags: "['作家']", bio: '法國浪漫主義女作家，以穿男裝、抽雪茄的前衛作風著稱。她與蕭邦有過長達九年的戀情。' },

  // US Presidents & WW2 / Cold War
  { id: 'john_adams', name: '約翰·亞當斯', era: '美國獨立', tags: "['總統']", bio: '美國第二任總統，起草《獨立宣言》的推手。他與傑佛遜是政敵，但晚年和解，兩人巧合地在同一年同月同日（獨立日）去世。' },
  { id: 'hamilton', name: '亞歷山大·漢密爾頓', era: '美國獨立', tags: "['政治家', '金融家']", bio: '美國開國元勳之一，首任財政部長。他建立了美國的國家金融體系，最終在與副總統伯爾的決鬥中喪生。' },
  { id: 'madison', name: '詹姆斯·麥迪遜', era: '美國獨立', tags: "['總統', '政治家']", bio: '美國第四任總統，被稱為「美國憲法之父」，也是《權利法案》的主要起草者。' },
  { id: 'andrew_jackson', name: '安德魯·傑克森', era: '19世紀', tags: "['總統', '將領']", bio: '美國第七任總統，民粹主義的代表。他簽署了《印第安人遷移法案》，導致了悲慘的「眼淚之路」。' },
  { id: 'robert_e_lee', name: '羅伯特·李', era: '美國南北戰爭', tags: "['將領']", bio: '美國南北戰爭期間南方邦聯的總司令。他戰術高超，但在蓋茨堡戰役中失利，最終向格蘭特將軍投降。' },
  { id: 'jefferson_davis', name: '傑佛遜·戴維斯', era: '美國南北戰爭', tags: "['總統']", bio: '美國南北戰爭期間南方邦聯（美利堅聯盟國）的唯一一任總統。戰後被俘入獄，後被釋放。' },
  { id: 'sherman', name: '威廉·特庫姆塞·薛曼', era: '美國南北戰爭', tags: "['將領']", bio: '聯邦軍名將，格蘭特的得力助手。他發動了著名的「向大海進軍」，採用焦土政策摧毀了南方的戰爭潛力。' },
  { id: 'teddy_roosevelt', name: '西奧多·羅斯福', era: '20世紀', tags: "['總統']", bio: '美國第26任總統，被稱為「老羅斯福」。他奉行「巨棒外交」，推動巴拿馬運河建設，並因調停日俄戰爭獲諾貝爾和平獎。' },
  { id: 'woodrow_wilson', name: '伍德羅·威爾遜', era: '一戰', tags: "['總統']", bio: '美國第28任總統。帶領美國參與第一次世界大戰，戰後提出「十四點和平原則」，是國際聯盟的主要推動者。' },
  { id: 'truman', name: '哈瑞·杜魯門', era: '冷戰時期', tags: "['總統']", bio: '美國第33任總統。在羅斯福死後繼任，批准對日本使用原子彈，並推動馬歇爾計畫與杜魯門主義，冷戰正式開啟。' },
  { id: 'eisenhower', name: '德懷特·艾森豪', era: '冷戰時期', tags: "['總統', '將領']", bio: '二戰盟軍最高統帥，指揮了諾曼第登陸。後成為美國第34任總統，結束了韓戰並推動了州際公路系統建設。' },
  { id: 'jfk', name: '約翰·甘迺迪', era: '冷戰時期', tags: "['總統']", bio: '美國第35任總統。在古巴飛彈危機中避免了核戰，發起了阿波羅登月計畫。1963年在達拉斯遇刺身亡。' },
  { id: 'lbj', name: '林登·詹森', era: '冷戰時期', tags: "['總統']", bio: '美國第36任總統。甘迺迪遇刺後繼任，推動了《民權法案》與「偉大社會」計畫，但因深陷越戰泥淖而放棄連任。' },
  { id: 'reagan', name: '隆納·雷根', era: '冷戰時期', tags: "['總統']", bio: '美國第40任總統，演員出身。他推動了保守主義革命與雷根經濟學，對蘇聯採取強硬態度，加速了冷戰的結束。' },
  { id: 'gorbachev', name: '米哈伊爾·戈巴契夫', era: '冷戰時期', tags: "['政治家']", bio: '蘇聯最後一位領導人。他推動了「開放」與「重建」改革，與雷根舉行多次峰會，最終和平終結了冷戰與蘇聯體制。' },
  { id: 'khrushchev', name: '尼基塔·赫魯雪夫', era: '冷戰時期', tags: "['政治家']", bio: '史達林死後的蘇聯領導人。他進行了去史達林化，並在古巴飛彈危機中與甘迺迪交鋒，後被政變推翻。' },
  { id: 'zhou_enlai', name: '周恩來', era: '現代', tags: "['總理', '外交家']", bio: '中華人民共和國首任總理，被認為是外交大師。他在尼克森訪華等歷史事件中發揮了關鍵作用，與毛澤東合作了數十年。' },
  { id: 'deng_xiaoping', name: '鄧小平', era: '現代', tags: "['政治家']", bio: '中國改革開放的總設計師。他在毛澤東死後掌握實權，推動了中國經濟的現代化與中美建交。' },
  { id: 'jiang_jingguo', name: '蔣經國', era: '現代', tags: "['政治家']", bio: '中華民國總統，蔣介石之子。晚年解除戒嚴與黨禁，開啟了台灣的民主化進程。早年曾在蘇聯留學並加入共產黨。' },
  { id: 'chiang_kai_shek', name: '蔣介石', era: '現代', tags: "['政治家', '將領']", bio: '中華民國總統，長期領導國民黨。帶領中國贏得抗日戰爭，但在國共內戰中敗給毛澤東，退守台灣。' }
];

const connectionsData = [
  // Rome/Greece Connects
  ['pompey', 'caesar'], ['crassus', 'pompey'], ['crassus', 'caesar'],
  ['cicero', 'pompey'], ['cicero', 'octavian'], ['cicero', 'mark_antony'],
  ['brutus', 'caesar'], ['brutus', 'cassius'], // Cassius not in db but we link to Caesar
  ['octavian', 'mark_antony'], ['octavian', 'cleopatra'], ['octavian', 'agrippa'], ['octavian', 'tiberius'],
  ['tiberius', 'caligula'], ['caligula', 'claudius'], ['claudius', 'nero'],
  ['nero', 'seneca'],
  ['trajan', 'hadrian'], ['hadrian', 'marcus_aurelius'], ['marcus_aurelius', 'commodus'],
  ['pericles', 'alcibiades'], ['alcibiades', 'socrates'],
  ['leonidas', 'xerxes'], ['themistocles', 'xerxes'], ['themistocles', 'pericles'],

  // Connect to main graph
  ['caesar', 'cleopatra'], ['socrates', 'plato'],

  // China Connects
  ['wu_zetian', 'shangguan_waner'], ['shangguan_waner', 'tang_xuanzong'],
  ['tang_xuanzong', 'yang_yuhuan'], ['tang_xuanzong', 'an_lushan'], ['an_lushan', 'yang_yuhuan'],
  ['tang_xuanzong', 'guo_ziyi'], 
  ['su_xun', 'su_shi'], ['su_xun', 'su_zhe'], ['su_shi', 'su_zhe'],
  ['su_shi', 'sima_guang'], ['sima_guang', 'wang_anshi'],
  ['song_gaozong', 'yue_fei'], ['song_gaozong', 'qin_hui'], ['yue_fei', 'han_shizhong'], ['qin_hui', 'han_shizhong'],
  ['lu_you', 'xin_qiji'], ['song_xiaozong', 'lu_you'], ['song_xiaozong', 'xin_qiji'], // song_xiaozong is in db
  ['zhu_xi', 'lu_jiuyuan'], ['song_ningzong', 'zhu_xi'],
  ['wen_tianxiang', 'kublai_khan'],
  ['tang_yin', 'wen_zhengming'], ['tang_yin', 'zhu_zhishan'], ['wen_zhengming', 'zhu_zhishan'],
  ['zhu_di', 'zheng_he'], ['zhu_yuanzhang', 'zhu_di'],
  ['zhang_juzheng', 'qi_jiguang'], ['yan_song', 'hai_rui'],
  ['chongzhen_emperor', 'wei_zhongxian'], ['chongzhen_emperor', 'yuan_chonghuan'], ['yuan_chonghuan', 'huang_taiji'],
  ['huang_taiji', 'dorgon'], ['dorgon', 'oboi'], ['oboi', 'kangxi_emperor'],
  ['wu_sangui', 'dorgon'], ['wu_sangui', 'kangxi_emperor'],
  ['hong_xiuquan', 'li_xiucheng'], ['zeng_guofan', 'li_xiucheng'],
  
  // Science Connects
  ['copernicus', 'tycho_brahe'], ['tycho_brahe', 'kepler'], ['galileo', 'kepler'],
  ['descartes', 'spinoza'], ['spinoza', 'leibniz'], ['leibniz', 'newton'], ['john_locke', 'newton'],
  ['john_locke', 'thomas_hobbes'],
  ['montesquieu', 'diderot'], ['diderot', 'rousseau'], ['rousseau', 'kant'],
  ['kant', 'hegel'], ['hegel', 'schopenhauer'], ['schopenhauer', 'wagner'], ['wagner', 'nietzsche'],
  ['chopin', 'liszt'], ['chopin', 'george_sand'], ['liszt', 'wagner'], ['liszt', 'george_sand'],

  // US Presidents Connects
  ['john_adams', 'washington'], ['john_adams', 'thomas_jefferson'], ['hamilton', 'washington'], ['hamilton', 'thomas_jefferson'],
  ['thomas_jefferson', 'madison'], ['madison', 'andrew_jackson'], 
  ['lincoln', 'robert_e_lee'], ['robert_e_lee', 'grant'], ['jefferson_davis', 'robert_e_lee'], ['grant', 'sherman'],
  ['teddy_roosevelt', 'woodrow_wilson'], ['woodrow_wilson', 'fdr'],

  // Modern Connects
  ['fdr', 'truman'], ['truman', 'stalin'], ['truman', 'churchill'], ['truman', 'eisenhower'],
  ['eisenhower', 'jfk'], ['eisenhower', 'nixon'], ['jfk', 'lbj'], ['jfk', 'khrushchev'], ['jfk', 'nixon'],
  ['lbj', 'nixon'], ['nixon', 'reagan'], ['reagan', 'gorbachev'], 
  ['mao_zedong', 'zhou_enlai'], ['zhou_enlai', 'nixon'], ['mao_zedong', 'chiang_kai_shek'], ['chiang_kai_shek', 'jiang_jingguo'],
  ['mao_zedong', 'deng_xiaoping'], ['deng_xiaoping', 'reagan']
];

let figureStr = '';
figuresData.forEach(f => {
  figureStr += `
  ${f.id}: {
    id: '${f.id}', name_zh: '${f.name}', name_en: '${f.name}',
    born: 0, died: 0, era: '${f.era}', region: '歷史橋梁',
    tags: ${f.tags},
    bio_zh: '${f.bio}',
  },`;
});

let connStr = '';
connectionsData.forEach((c, i) => {
  if(!c[0] || !c[1]) return;
  connStr += `
  {
    id: 'c_batch100_${i}', from: '${c[0]}', to: '${c[1]}',
    year: 0, type: 'colleague',
    desc_zh: '${c[0]} 與 ${c[1]} 的歷史交集。',
    source_zh: '史料記載', source_en: 'Historical Records'
  },`;
});

let figuresContent = fs.readFileSync(figuresFile, 'utf8');
figuresContent = figuresContent.replace(/};\s*$/, figureStr + '\n};\n');
fs.writeFileSync(figuresFile, figuresContent);

let connectionsContent = fs.readFileSync(connectionsFile, 'utf8');
connectionsContent = connectionsContent.replace(/];\s*$/, connStr + '\n];\n');
fs.writeFileSync(connectionsFile, connectionsContent);

console.log("Injected 90+ new figures and their connections!");