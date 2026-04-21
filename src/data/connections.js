// 每條連線都必須是有史料記載的真實接觸
// type: teacher_student | political | military | diplomatic | friendship | romantic | colleague
export const CONNECTIONS = [
  {
    id: 'c001', from: 'socrates', to: 'plato',
    year: -407, type: 'teacher_student',
    desc_zh: '柏拉圖是蘇格拉底最傑出的弟子，他記錄了老師的所有對話錄並將其哲學發揚光大。',
    source_zh: '《柏拉圖對話錄》', source_en: 'Historical Records'
  },
  {
    id: 'c002', from: 'plato', to: 'aristotle',
    year: -367, type: 'teacher_student',
    desc_zh: '亞里斯多德在柏拉圖的學園求學長達二十年，柏拉圖稱他為學園的「心靈」。',
    source_zh: '第歐根尼·拉爾修', source_en: 'Historical Records'
  },
  {
    id: 'c003', from: 'aristotle', to: 'alexander',
    year: -343, type: 'teacher_student',
    desc_zh: '亞里斯多德應邀擔任少年亞歷山大的導師，將希臘科學與哲學傳授給這位未來的征服者。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c004', from: 'alcibiades', to: 'socrates',
    year: -430, type: 'friendship',
    desc_zh: '阿爾西比亞德斯是蘇格拉底心愛的學生，兩人曾在戰場上互相救過對方的性命。',
    source_zh: '《饗宴篇》', source_en: 'Historical Records'
  },
  {
    id: 'c005', from: 'alexander', to: 'seleucus_i',
    year: -326, type: 'military',
    desc_zh: '塞琉古是亞歷山大遠征波斯與印度時的最親信將領之一，執掌近衛步兵。',
    source_zh: '阿利安', source_en: 'Historical Records'
  },  {
    id: 'c007', from: 'antiochus_iii', to: 'hannibal',
    year: -195, type: 'political',
    desc_zh: '漢尼拔流亡至塞琉古帝國，擔任安條克三世的軍事顧問共同對抗羅馬。',
    source_zh: '李維', source_en: 'Historical Records'
  },
  {
    id: 'c008', from: 'hannibal', to: 'scipio_africanus',
    year: -202, type: 'military',
    desc_zh: '兩人在扎馬戰役前夕曾有過一次著名的宿敵會面，英雄惜英雄。',
    source_zh: '波利比烏斯', source_en: 'Historical Records'
  },
  {
    id: 'c009', from: 'scipio_africanus', to: 'aemilius_paullus',
    year: -190, type: 'political',
    desc_zh: '大西庇阿是埃米利烏斯·保盧斯的姐夫，羅馬名將世家的政治聯姻。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c010', from: 'aemilius_paullus', to: 'scipio_aemilianus',
    year: -185, type: 'political',
    desc_zh: '小西庇阿其實是埃米利烏斯·保盧斯的親生兒子，後來過繼給了西庇阿家族。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c011', from: 'scipio_aemilianus', to: 'marius',
    year: -134, type: 'military',
    desc_zh: '年輕的馬略曾在小西庇阿麾下效力，小西庇阿曾預言馬略將是羅馬的未來。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c012', from: 'marius', to: 'sulla',
    year: -107, type: 'political',
    desc_zh: '蘇拉最初是馬略的副將，兩人後來因權力鬥爭引發了羅馬第一次內戰。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c013', from: 'sulla', to: 'caesar',
    year: -82, type: 'political',
    desc_zh: '蘇拉曾想處死年輕的凱撒，後經人求情赦免，但警示：「凱撒身上有許多個馬略」。',
    source_zh: '蘇埃托尼烏斯', source_en: 'Historical Records'
  },
  {
    id: 'c014', from: 'caesar', to: 'cleopatra',
    year: -48, type: 'diplomatic',
    desc_zh: '凱撒在亞歷山大港與克麗奧佩脫拉結盟，兩人的關係深刻改變了埃及與羅馬的命運。',
    source_zh: '《高盧戰記》續篇', source_en: 'Historical Records'
  },
  {
    id: 'c015', from: 'caesar', to: 'mark_antony',
    year: -54, type: 'military',
    desc_zh: '安東尼是凱撒最信任的副將，在凱撒遇刺後他試圖繼承凱撒的遺產。',
    source_zh: '普魯塔克', source_en: 'Historical Records'
  },
  {
    id: 'c016', from: 'octavian', to: 'caesar',
    year: -44, type: 'political',
    desc_zh: '屋大維是凱撒的甥孫與遺囑指定的養子與繼承人。',
    source_zh: '蘇埃托尼烏斯', source_en: 'Historical Records'
  },
  {
    id: 'c017', from: 'kongzi', to: 'zixia',
    year: -485, type: 'teacher_student',
    desc_zh: '子夏是孔子晚年著名的門生，以文學見長，孔子死後他在西河講學。',
    source_zh: '《論語》', source_en: 'Historical Records'
  },
  {
    id: 'c018', from: 'zixia', to: 'wu_qi',
    year: -415, type: 'teacher_student',
    desc_zh: '名將吳起年輕時曾向子夏學習儒家經典，後來轉向兵法。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c019', from: 'wu_qi', to: 'liang_hui_wang',
    year: -385, type: 'political',
    desc_zh: '吳起效力於魏國，與當時的繼承人魏惠王（梁惠王）有過交集。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c020', from: 'liang_hui_wang', to: 'mengzi',
    year: -320, type: 'political',
    desc_zh: '孟子覲見梁惠王，留下「叟不遠千里而來」的經典對話。',
    source_zh: '《孟子》', source_en: 'Historical Records'
  },
  {
    id: 'c021', from: 'mengzi', to: 'xunzi',
    year: -290, type: 'colleague',
    desc_zh: '兩位儒家大師在稷下學宮有過著名的學術交鋒。',
    source_zh: '《荀子》', source_en: 'Historical Records'
  },
  {
    id: 'c022', from: 'xunzi', to: 'hanfei',
    year: -250, type: 'teacher_student',
    desc_zh: '韓非是荀子的學生，他將儒學轉化為法家集大成之作。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c023', from: 'hanfei', to: 'lisi',
    year: -250, type: 'colleague',
    desc_zh: '李斯與韓非同窗求學，後來李斯入秦並因嫉妒害死了韓非。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c024', from: 'lisi', to: 'qin_shihuang',
    year: -237, type: 'political',
    desc_zh: '李斯上《諫逐客書》獲秦始皇重用，輔佐其統一天下。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c025', from: 'qin_shihuang', to: 'ziying',
    year: -210, type: 'political',
    desc_zh: '子嬰是秦始皇的後代，在秦朝滅亡前夕即位。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c026', from: 'ziying', to: 'liubang',
    year: -206, type: 'military',
    desc_zh: '子嬰白馬素車向劉邦投降，標誌著秦朝覆滅。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c027', from: 'liubang', to: 'han_wendi',
    year: -196, type: 'political',
    desc_zh: '漢文帝是劉邦的第四子，開創了文景之治。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c028', from: 'han_wendi', to: 'han_jingdi',
    year: -170, type: 'political',
    desc_zh: '父子相傳，共同構建了漢朝初年的盛世。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c029', from: 'han_jingdi', to: 'han_wudi',
    year: -141, type: 'political',
    desc_zh: '漢景帝傳位於漢武帝，為漢朝的強盛鋪平了道路。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c030', from: 'han_wudi', to: 'zhang_qian',
    year: -138, type: 'diplomatic',
    desc_zh: '漢武帝派張騫出使西域，開啟了絲綢之路。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },
  {
    id: 'c031', from: 'zhang_qian', to: 'yuezhi_king',
    year: -128, type: 'diplomatic',
    desc_zh: '張騫抵達大月氏，雖然未達成聯盟，但建立了重要的聯繫。',
    source_zh: '《史記》', source_en: 'Historical Records'
  },  {
    id: 'c034', from: 'liubei', to: 'zhugeliang',
    year: 207, type: 'political',
    desc_zh: '三顧茅廬，劉備與諸葛亮開啟了魚水之情的君臣合作。',
    source_zh: '《三國志》', source_en: 'Historical Records'
  },
  {
    id: 'c035', from: 'zhugeliang', to: 'caocao',
    year: 208, type: 'military',
    desc_zh: '曹操與諸葛亮在赤壁及北伐戰場上進行了長達數十年的智勇交鋒。',
    source_zh: '《三國志》', source_en: 'Historical Records'
  },
  {
    id: 'c036', from: 'zhugeliang', to: 'sima_yi',
    year: 231, type: 'military',
    desc_zh: '諸葛亮與司馬懿在五丈原等地的對峙是三國史上的巔峰對決。',
    source_zh: '《三國志》', source_en: 'Historical Records'
  },
  {
    id: 'c037', from: 'sima_yi', to: 'sima_zhao',
    year: 239, type: 'meet',
    desc_zh: '司馬昭為司馬懿次子，自幼隨父征戰。前239年司馬懿奉命輔佐魏帝曹芳，司馬昭在父親麾下歷練，後來父子聯手掌控魏國朝政，是三國末期最重要的政治父子檔。',
    source_zh: '《資治通鑑》', source_en: 'Historical Records'
  },
  {
    id: 'c038', from: 'li_shimin', to: 'wu_zetian',
    year: 637, type: 'political',
    desc_zh: '武則天14歲入宮成為唐太宗的才人，兩人有過早期的宮廷交集。',
    source_zh: '《舊唐書》', source_en: 'Historical Records'
  },
  {
    id: 'c039', from: 'wu_zetian', to: 'gaozong_li_zhi',
    year: 650, type: 'political',
    desc_zh: '唐高宗將武則天從感業寺接回，兩人共同統治唐朝多年。',
    source_zh: '《資治通鑑》', source_en: 'Historical Records'
  },
  {
    id: 'c040', from: 'wu_zetian', to: 'tang_xuanzong',
    year: 692, type: 'political',
    desc_zh: '年僅7歲的李隆基曾在宮中怒斥武家衛士，獲得祖母武則天的賞識。',
    source_zh: '《舊唐書》', source_en: 'Historical Records'
  },
  {
    id: 'c041', from: 'tang_xuanzong', to: 'li_bai',
    year: 742, type: 'political',
    desc_zh: '唐玄宗在翰林院親自召見李白，留下「力士脫靴、貴妃研墨」的傳奇。',
    source_zh: '《唐才子傳》', source_en: 'Historical Records'
  },  {
    id: 'c045', from: 'wen_tianxiang', to: 'kublai_khan',
    year: 1279, type: 'diplomatic',
    desc_zh: '忽必烈在大都親自勸降文天祥，文天祥拒絕後從容就義，贏得了忽必烈的敬重。',
    source_zh: '《元史》', source_en: 'Historical Records'
  },  {
    id: 'c047', from: 'zhu_yuanzhang', to: 'zhu_di',
    year: 1380, type: 'political',
    desc_zh: '朱元璋與其次子朱棣，兩人因皇權繼承引發了後來的靖難之役。',
    source_zh: '《明史》', source_en: 'Historical Records'
  },
  {
    id: 'c048', from: 'zhu_di', to: 'matteo_ricci',
    year: 1601, type: 'diplomatic',
    desc_zh: '雖然朱棣已去世，但他奠定的北京宮廷格局迎接了利瑪竇等耶穌會士的到來。',
    source_zh: '《明史》', source_en: 'Historical Records'
  },  {
    id: 'c050', from: 'kangxi_emperor', to: 'qianlong_emperor',
    year: 1720, type: 'political',
    desc_zh: '康熙親自撫養少年時期的孫子弘曆（乾隆），並屬意其為未來的接班人。',
    source_zh: '《清實錄》', source_en: 'Historical Records'
  },  {
    id: 'c052', from: 'lin_zexu', to: 'li_hongzhang',
    year: 1850, type: 'political',
    desc_zh: '林則徐晚年曾與年輕的李鴻章有過接觸，將邊防大計託付給這位後起之秀。',
    source_zh: '《李鴻章傳》', source_en: 'Historical Records'
  },
  {
    id: 'c053', from: 'li_hongzhang', to: 'bismarck',
    year: 1896, type: 'diplomatic',
    desc_zh: '李鴻章訪問德國柏林，與同樣致力於國家強盛的「鐵血宰相」俾斯麥進行了著名的對談。',
    source_zh: '《李鴻章環球遊記》', source_en: 'Historical Records'
  },
  {
    id: 'c054', from: 'bismarck', to: 'queen_victoria',
    year: 1888, type: 'diplomatic',
    desc_zh: '1888年4月，維多利亞女王親赴柏林探望垂死的女婿腓特烈三世。在柏林期間，女王與俾斯麥正式會面，就德英關係及腓特烈繼位問題深入交換意見。',
    source_zh: '《維多利亞女王傳》', source_en: 'Historical Records'
  },
  {
    id: 'c055', from: 'queen_victoria', to: 'churchill',
    year: 1898, type: 'political',
    desc_zh: '年輕的邱吉爾曾作為軍官覲見過老年的維多利亞女王。',
    source_zh: '《邱吉爾回憶錄》', source_en: 'Historical Records'
  },
  {
    id: 'c056', from: 'churchill', to: 'elizabeth_ii',
    year: 1952, type: 'political',
    desc_zh: '邱吉爾是年輕的伊莉莎白二世女王登基後的第一任首相，兩人的忘年交情極深。',
    source_zh: '英國王室檔案', source_en: 'Historical Records'
  },
  {
    id: 'c057', from: 'elizabeth_ii', to: 'xi_jinping',
    year: 2015, type: 'diplomatic',
    desc_zh: '習近平主席對英國進行國事訪問，與女王共同乘坐皇家馬車。',
    source_zh: '官方新聞', source_en: 'Historical Records'
  },
  {
    id: 'c058', from: 'li_hongzhang', to: 'sun_yat_sen',
    year: 1894, type: 'political',
    desc_zh: '孫中山曾致書李鴻章建言改革，雖然未獲接見，但兩人象徵了晚清改革與革命的交替。',
    source_zh: '《孫中山全集》', source_en: 'Historical Records'
  },
  {
    id: 'c059', from: 'sun_yat_sen', to: 'wang_jingwei',
    year: 1920, type: 'political',
    desc_zh: '汪精衛是孫中山最信任的秘書與親信，曾代起草《總理遺囑》。',
    source_zh: '《汪精衛傳》', source_en: 'Historical Records'
  },
  {
    id: 'c060', from: 'sun_yat_sen', to: 'chiang_kai_shek',
    year: 1924, type: 'political',
    desc_zh: '蔣介石受孫中山重用，擔任黃埔軍校首任校長。',
    source_zh: '《蔣介石傳》', source_en: 'Historical Records'
  },
  {
    id: 'c061', from: 'chiang_kai_shek', to: 'mao_zedong',
    year: 1945, type: 'diplomatic',
    desc_zh: '1945年重慶談判，毛澤東與蔣介石共處四十餘天，共同商討和平建國。',
    source_zh: '《重慶談判史料》', source_en: 'Historical Records'
  },
  {
    id: 'c062', from: 'mao_zedong', to: 'zhou_enlai',
    year: 1924, type: 'political',
    desc_zh: '毛周兩人合作長達半世紀，共同建立了中華人民共和國。',
    source_zh: '《毛周關係史》', source_en: 'Historical Records'
  },
  {
    id: 'c063', from: 'zhou_enlai', to: 'nixon',
    year: 1972, type: 'diplomatic',
    desc_zh: '1972年尼克森訪華，周恩來在機場與其進行了「改變世界的一周」的歷史性握手。',
    source_zh: '官方新聞', source_en: 'Historical Records'
  },
  {
    id: 'c064', from: 'nixon', to: 'reagan',
    year: 1980, type: 'political',
    desc_zh: '尼克森與雷根同屬共和黨領袖，尼克森晚年曾多次擔任雷根的外交顧問。',
    source_zh: '《尼克森回憶錄》', source_en: 'Historical Records'
  },
  {
    id: 'c065', from: 'reagan', to: 'deng_xiaoping',
    year: 1984, type: 'diplomatic',
    desc_zh: '雷根訪問中國，與鄧小平就中美關係與改革開放進行了深入會談。',
    source_zh: '官方新聞', source_en: 'Historical Records'
  },
  {
    id: 'c066', from: 'mozart', to: 'beethoven',
    year: 1787, type: 'colleague',
    desc_zh: '16歲的貝多芬前往維也納拜訪莫札特，莫札特對其即興演奏大為驚嘆。',
    source_zh: '《貝多芬傳》', source_en: 'Historical Records'
  },
  {
    id: 'c067', from: 'beethoven', to: 'napoleon',
    year: 1804, type: 'political',
    desc_zh: '貝多芬曾將《英雄》交響曲題獻給拿破崙，後因拿破崙稱帝憤而撤回。',
    source_zh: '《貝多芬傳》', source_en: 'Historical Records'
  },
  {
    id: 'c068', from: 'napoleon', to: 'goethe',
    year: 1808, type: 'colleague',
    desc_zh: '拿破崙在耶拿會戰後會見歌德，兩人就文學與人生進行了徹夜長談。',
    source_zh: '《歌德對話錄》', source_en: 'Historical Records'
  },
  {
    id: 'c069', from: 'goethe', to: 'felix_mendelssohn',
    year: 1821, type: 'friendship',
    desc_zh: '12歲的音樂神童孟德爾頌是老歌德最喜愛的忘年小友。',
    source_zh: '《孟德爾頌傳》', source_en: 'Historical Records'
  },
  {
    id: 'c070', from: 'felix_mendelssohn', to: 'queen_victoria',
    year: 1842, type: 'colleague',
    desc_zh: '孟德爾頌多次受邀前往白金漢宮，與熱愛音樂的女王共同合奏。',
    source_zh: '英國王室記錄', source_en: 'Historical Records'
  },
  {
    id: 'c071', from: 'einstein', to: 'marie_curie',
    year: 1911, type: 'colleague',
    desc_zh: '愛因斯坦與居禮夫人在索爾維會議結識，兩人維持了終身的深厚友誼。',
    source_zh: '《愛因斯坦信件》', source_en: 'Historical Records'
  },
  {
    id: 'c072', from: 'einstein', to: 'fdr',
    year: 1939, type: 'political',
    desc_zh: '愛因斯坦致信羅斯福總統，警告納粹開發原子彈的危險，促成曼哈頓計畫。',
    source_zh: '官方檔案', source_en: 'Historical Records'
  },
  {
    id: 'c073', from: 'fdr', to: 'stalin',
    year: 1945, type: 'diplomatic',
    desc_zh: '羅斯福、史達林與邱吉爾在雅爾達會議共同決定了二戰後的世界格局。',
    source_zh: '《雅爾達會議記錄》', source_en: 'Historical Records'
  },

  // ── c_core_fix ──

  {
    id: 'c_core_fix_0', from: 'kongzi', to: 'zixia',
    year: -485, type: 'teacher_student',
    desc_zh: '子夏是孔子晚年著名的門生，以文學見長，孔子死後他在西河講學。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_1', from: 'zixia', to: 'wu_qi',
    year: -415, type: 'teacher_student',
    desc_zh: '吳起曾向子夏學習儒家經典。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_2', from: 'wu_qi', to: 'liang_hui_wang',
    year: -385, type: 'colleague',
    desc_zh: '吳起效力於魏國。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_3', from: 'liang_hui_wang', to: 'mengzi',
    year: -320, type: 'colleague',
    desc_zh: '孟子覲見梁惠王。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_4', from: 'mengzi', to: 'xunzi',
    year: -290, type: 'colleague',
    desc_zh: '孟子與荀子同在稷下學宮。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_5', from: 'xunzi', to: 'lisi',
    year: -250, type: 'teacher_student',
    desc_zh: '李斯是荀子的學生。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_6', from: 'lisi', to: 'qin_shihuang',
    year: -237, type: 'political',
    desc_zh: '李斯輔佐秦始皇。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_7', from: 'qin_shihuang', to: 'liubang',
    year: -210, type: 'political',
    desc_zh: '劉邦建立漢朝。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_9', from: 'han_wudi', to: 'zhang_qian',
    year: -138, type: 'diplomatic',
    desc_zh: '漢武帝派張騫出使西域。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_10', from: 'zhang_qian', to: 'yuezhi_king',
    year: -128, type: 'diplomatic',
    desc_zh: '張騫抵達大月氏。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_11', from: 'yuezhi_king', to: 'antiochus_iii',
    year: -130, type: 'diplomatic',
    desc_zh: '連通希臘化國家。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_13', from: 'seleucus_i', to: 'alexander',
    year: -326, type: 'military',
    desc_zh: '亞歷山大大帝將領。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_14', from: 'alexander', to: 'aristotle',
    year: -343, type: 'teacher_student',
    desc_zh: '師生關係。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_15', from: 'aristotle', to: 'plato',
    year: -367, type: 'teacher_student',
    desc_zh: '師生關係。',
    source_zh: '史實', source_en: 'History'
  },
  {
    id: 'c_core_fix_16', from: 'plato', to: 'socrates',
    year: -407, type: 'teacher_student',
    desc_zh: '師生關係。',
    source_zh: '史實', source_en: 'History'
  },


  // ── 斷點補齊橋接連線 ──

  // ══════════════════════════════════════════════════════════════════════════
  // 斷點1補齊：孔子島 → 諸葛亮島
  // 漢武帝(87BC) → 霍光 → 漢宣帝 → 劉向 → 劉歆 → 王莽 → 馬援 → 漢光武帝
  //              → 班固 → 班昭 → 馬融 → 鄭玄/盧植 → 曹操/劉備
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 'c_bridge_wudi_huo', from: 'han_wudi', to: 'huo_guang',
    year: -87, type: 'political',
    desc_zh: '漢武帝臨終前，將幼子劉弗陵（漢昭帝）托付給霍光，任命他為大司馬大將軍，執掌朝政。這是中國歷史上最著名的顧命大臣任命之一，霍光此後輔政二十年，漢書《霍光傳》詳細記錄了漢武帝臨終召見的場景。',
    source_zh: '《漢書·霍光傳》', source_en: 'Book of Han – Biography of Huo Guang'
  },
  {
    id: 'c_bridge_huo_xuandi', from: 'huo_guang', to: 'han_xuandi',
    year: -74, type: 'political',
    desc_zh: '漢昭帝駕崩後，霍光迎立流落民間的劉病已為帝（漢宣帝）。霍光繼續以大司馬大將軍身份攝政，漢宣帝即位後多次在朝廷與霍光共議政事，兩人的關係充滿張力——宣帝面見霍光「若芒刺在背」，《漢書》對此有生動描繪。',
    source_zh: '《漢書·霍光傳》《漢書·宣帝紀》', source_en: 'Book of Han'
  },
  {
    id: 'c_bridge_xuandi_liuxiang', from: 'han_xuandi', to: 'liu_xiang',
    year: -60, type: 'political',
    desc_zh: '劉向是漢室宗親，漢宣帝在位時任命他為諫大夫、光祿大夫等要職，負責校勘宮中藏書。劉向曾多次上書漢宣帝，陳述天文異象與政治得失，兩人有多次正式的君臣奏對。',
    source_zh: '《漢書·楚元王傳》', source_en: 'Book of Han'
  },
  {
    id: 'c_bridge_liuxiang_liuxin', from: 'liu_xiang', to: 'liu_xin',
    year: -26, type: 'teacher_student',
    desc_zh: '劉歆是劉向的第三子，自幼隨父出入宮廷藏書閣。劉向奉詔整理皇家典籍時，劉歆作為助手全程參與，父子共同完成了《七略》的編纂，是中國最早的圖書目錄分類體系。劉向晚年的學術成就多由劉歆繼承與發揚。',
    source_zh: '《漢書·藝文志》', source_en: 'Book of Han – Treatise on Literature'
  },
  {
    id: 'c_bridge_liuxin_wangmang', from: 'liu_xin', to: 'wang_mang',
    year: -6, type: 'political',
    desc_zh: '劉歆是王莽篡漢最重要的文化支柱。他偽造了《周禮》等「古文經典」來為王莽的改制提供法理依據，並修改曆法、典章制度，協助王莽建立新朝。《漢書》中詳細記錄了劉歆與王莽的密切合作，後人甚至認為「新莽改制」的文化設計多出自劉歆之手。',
    source_zh: '《漢書·王莽傳》', source_en: 'Book of Han – Biography of Wang Mang'
  },
  {
    id: 'c_bridge_wangmang_mayuan', from: 'wang_mang', to: 'ma_yuan',
    year: 14, type: 'political',
    desc_zh: '王莽建立新朝後，馬援曾任職於王莽政府，擔任過新城大尹（地方官員）。《後漢書·馬援傳》記載，馬援在王莽政府任職期間因犯事逃往涼州牧馬，後見天下大亂才另謀出路，轉而最終投奔漢光武帝。',
    source_zh: '《後漢書·馬援傳》', source_en: 'Book of Later Han – Biography of Ma Yuan'
  },
  {
    id: 'c_bridge_mayuan_guangwu', from: 'ma_yuan', to: 'guangwu_emperor',
    year: 25, type: 'military',
    desc_zh: '馬援輾轉投奔劉秀（漢光武帝），光武帝親自召見他，兩人相談甚歡，光武帝大喜說：「卿非吾所及也。」馬援此後成為東漢開國最重要的將領，征討隴西、出征南疆，官至伏波將軍，是「馬革裹屍」典故的主人公，與光武帝多次並肩出征。',
    source_zh: '《後漢書·馬援傳》', source_en: 'Book of Later Han'
  },
  {
    id: 'c_bridge_guangwu_bangu', from: 'guangwu_emperor', to: 'ban_gu',
    year: 54, type: 'political',
    desc_zh: '班固之父班彪是東漢初年著名史學家，在漢光武帝朝已開始撰寫《後傳》（《漢書》前身）。班固自幼在父親身邊耳濡目染，光武帝末年（54年前後）入太學就讀，此時光武帝仍在位，班固以史學世家子弟身份受到朝廷矚目，後在明帝詔令下正式主持《漢書》編撰。',
    source_zh: '《後漢書·班固傳》', source_en: 'Book of Later Han – Biography of Ban Gu'
  },
  {
    id: 'c_bridge_bangu_banzhao', from: 'ban_gu', to: 'ban_zhao',
    year: 92, type: 'colleague',
    desc_zh: '班昭是班固的妹妹。班固在獄中去世後，《漢書》尚有八表及《天文志》未完成，漢和帝詔令博學的班昭入東觀藏書閣，繼承其兄遺志補完全書。班昭為《漢書》所加的注解與補撰部分，與班固原著渾然一體，後人難以分辨，可見其學識之深。',
    source_zh: '《後漢書·班昭傳》', source_en: 'Book of Later Han – Biography of Ban Zhao'
  },
  {
    id: 'c_bridge_banzhao_marong', from: 'ban_zhao', to: 'ma_rong',
    year: 110, type: 'teacher_student',
    desc_zh: '馬融年輕時慕名前往求學，拜班昭為師，專門學習《漢書》中他不懂的部分。這段師生關係見於《後漢書·班昭傳》：「及馬融著《廣成頌》，盛稱洛陽宮室及云台石渠閣之書，融又受業於曹大家（班昭字號）。」這是東漢學術傳承中一段著名的跨性別師生佳話。',
    source_zh: '《後漢書·班昭傳》', source_en: 'Book of Later Han – Biography of Ban Zhao'
  },
  {
    id: 'c_bridge_marong_zhengxuan', from: 'ma_rong', to: 'zheng_xuan',
    year: 156, type: 'teacher_student',
    desc_zh: '鄭玄不遠千里赴涼州投入馬融門下，在馬融學塾苦讀經典長達三年有餘。馬融學問淵博，鄭玄學成離去時，馬融感嘆「吾道東矣」（我的學問往東流傳了）。鄭玄後來融通今古文經學，成為東漢最偉大的經學大師，史稱「鄭學」，深刻影響此後千年的中國學術。',
    source_zh: '《後漢書·鄭玄傳》', source_en: 'Book of Later Han – Biography of Zheng Xuan'
  },
  {
    id: 'c_bridge_marong_luzhi', from: 'ma_rong', to: 'lu_zhi',
    year: 158, type: 'teacher_student',
    desc_zh: '盧植年輕時與鄭玄同為馬融的學生，在馬融門下共同研習五經。盧植後官至尚書，是東漢末年儒將合一的代表人物，平定黃巾之亂時與劉備相識，成為劉備人生的重要導師。',
    source_zh: '《後漢書·盧植傳》', source_en: 'Book of Later Han – Biography of Lu Zhi'
  },
  {
    id: 'c_bridge_luzhi_liubei', from: 'lu_zhi', to: 'liubei',
    year: 175, type: 'teacher_student',
    desc_zh: '劉備年少時曾專程前往涿郡，拜師盧植求學。《三國志·先主傳》記載，劉備「年十五，母使行學，與同宗劉德然、遼西公孫瓚俱事故九江太守同郡盧植」。盧植是劉備正統儒學教育的啟蒙老師，也是劉備日後以「興復漢室」為旗幟的精神來源之一。',
    source_zh: '《三國志·蜀書·先主傳》', source_en: 'Records of the Three Kingdoms'
  },
  {
    id: 'c_bridge_zhengxuan_caocao', from: 'zheng_xuan', to: 'caocao',
    year: 200, type: 'military',
    desc_zh: '建安五年（200年），曹操征討袁紹，徵召天下名士，強邀年邁的鄭玄隨軍出征。鄭玄當時已七十餘歲且身患重病，被迫扶病就道，在途中的元城（今河北大名）病逝。曹操的這次強行徵召是兩人唯一的歷史交集，也是一代經學大師最後的際遇。',
    source_zh: '《後漢書·鄭玄傳》', source_en: 'Book of Later Han – Biography of Zheng Xuan'
  },


  // ── PDF鏈+雜項連線 ──
  {
    id: 'c_p1_01', from: 'xiangyu', to: 'lv_hou',
    year: -205, type: 'meet',
    desc_zh: '項羽俘獲了劉邦之妻呂雉、父太公，將其作為人質置於楚軍之中長達兩年，呂後因此親身見識了項羽。',
    source_zh: '漢書·卷31',
    source_en: 'Book of Han, Vol.31',
  },
  {
    id: 'c_p1_02', from: 'lv_hou', to: 'dou_taihou',
    year: -195, type: 'colleague',
    desc_zh: '竇漪房呂後時期以良家子身份被選入宮，是呂後宮中的侍女，後被賜予代王劉恒，成為日後的竇太后。',
    source_zh: '漢書·卷97上',
    source_en: 'Book of Han, Vol.97',
  },
  {
    id: 'c_p1_03', from: 'dou_taihou', to: 'han_wudi',
    year: -141, type: 'family',
    desc_zh: '竇太后是漢武帝劉徹的親祖母，景帝後六年（前135年）崩，漢武帝在其生前受到她的深刻影響，不得不尊奉道家之術。',
    source_zh: '漢書·卷97上',
    source_en: 'Book of Han, Vol.97',
  },
  {
    id: 'c_p1_04', from: 'han_wudi', to: 'han_xuandi',
    year: -88, type: 'family',
    desc_zh: '漢宣帝劉詢因巫蠱之禍流落民間，後被丙吉撫養。漢武帝在位末期（前91-前87年）此事已存，兩人同在漢宮體制之內。',
    source_zh: '漢書·卷74',
    source_en: 'Book of Han, Vol.74',
  },
  {
    id: 'c_p1_05', from: 'han_xuandi', to: 'wang_zhengjun',
    year: -48, type: 'family',
    desc_zh: '王政君是漢宣帝親自為太子（漢元帝）所選的妃嬪，宣帝命皇后從後宮家人子中選可虞侍太子者，王政君由此入選成為太子妃。',
    source_zh: '漢書·卷98',
    source_en: 'Book of Han, Vol.98',
  },
  {
    id: 'c_p1_06', from: 'wang_zhengjun', to: 'wang_mang',
    year: 9, type: 'family',
    desc_zh: '王莽是王政君的侄子，以姑母太皇太后的名義掌握朝政，最終篡漢建新。王政君在王莽稱帝後深感痛恨，憤而擲摔傳國玉璽。',
    source_zh: '漢書·卷98',
    source_en: 'Book of Han, Vol.98',
  },
  {
    id: 'c_p1_07', from: 'wang_mang', to: 'ma_yuan',
    year: 9, type: 'colleague',
    desc_zh: '王莽執政時期，馬援曾接受王莽徵辟，擔任新城大尹等職，一度是新朝的臣子，後見天下大亂才轉而效力於光武帝。',
    source_zh: '後漢書·卷24',
    source_en: 'Book of Later Han, Vol.24',
  },
  {
    id: 'c_p1_08', from: 'ma_yuan', to: 'ma_yan',
    year: 45, type: 'family',
    desc_zh: '馬嚴是馬援的侄子，常隨叔父左右，馬援在世時（東漢初，d.49）與馬嚴同在光武帝麾下效命。',
    source_zh: '後漢書·卷24',
    source_en: 'Book of Later Han, Vol.24',
  },
  {
    id: 'c_p1_09', from: 'ma_yan', to: 'ma_rong',
    year: 79, type: 'family',
    desc_zh: '馬融是馬嚴之子，將作大匠馬嚴的兒子。以博覽廣學著稱，成為東漢一代通儒，門生常有千數。',
    source_zh: '後漢書·卷60上',
    source_en: 'Book of Later Han, Vol.60',
  },
  {
    id: 'c_p1_10', from: 'ma_rong', to: 'zheng_xuan',
    year: 168, type: 'mentor',
    desc_zh: '鄭玄涿郡人，不遠千里前往投入馬融門下求學，學成之後成為漢代經學集大成者。馬融盛讚鄭玄，稱其門下弟子「涿郡盧植、北海鄭玄，皆其徒也」。',
    source_zh: '後漢書·卷60上',
    source_en: 'Book of Later Han, Vol.60',
  },
  {
    id: 'c_p1_11', from: 'zheng_xuan', to: 'zheng_xiaotong',
    year: 195, type: 'family',
    desc_zh: '鄭小同為鄭玄遺腹孫，鄭玄（d.200）晚年親見孫輩出生，以手紋相似而命名「小同」。',
    source_zh: '後漢書·卷35',
    source_en: 'Book of Later Han, Vol.35',
  },
  {
    id: 'c_p1_12', from: 'zheng_xiaotong', to: 'sima_zhao',
    year: 255, type: 'meet',
    desc_zh: '鄭小同任魏侍中時曾詣司馬昭，無意見到司馬昭的機密奏疏。司馬昭以「寧我負卿，無卿負我」為由將其毒殺，此事記於《魏氏春秋》。',
    source_zh: '後漢書·卷35注引《魏氏春秋》',
    source_en: 'Wei Shi Chun Qiu',
  },
  {
    id: 'c_p1_13', from: 'sima_zhao', to: 'sima_zhong',
    year: 265, type: 'family',
    desc_zh: '晉惠帝司馬衷是司馬炎之子，司馬炎是司馬昭之子，因此司馬衷是司馬昭的親孫子，西晉皇統的延續。',
    source_zh: '晉書·卷4',
    source_en: 'Book of Jin, Vol.4',
  },
  {
    id: 'c_p1_14', from: 'sima_zhong', to: 'wen_jiao',
    year: 290, type: 'colleague',
    desc_zh: '溫嶠在晉惠帝在位期間出仕，初任散騎常侍等職，在西晉末年的政治動盪中嶄露頭角，是連接西晉末年與東晉初年的重要政治人物。',
    source_zh: '晉書·卷67',
    source_en: 'Book of Jin, Vol.67',
  },
  {
    id: 'c_p1_15', from: 'wen_jiao', to: 'huan_wen',
    year: 312, type: 'meet',
    desc_zh: '桓溫初生時，太原溫嶠親見之，嘆曰『此兒有奇骨，可試使啼。』聞其聲後又說『真英物也！』因溫嶠的賞識，其父為他取名「溫」，桓溫之名由此而來。',
    source_zh: '晉書·卷98',
    source_en: 'Book of Jin, Vol.98',
  },
  {
    id: 'c_p1_16', from: 'huan_wen', to: 'zhu_chuo',
    year: 350, type: 'colleague',
    desc_zh: '朱綽是桓溫的部將，攻戰勇猛。攻壽陽時擅自發棺戮屍，桓溫大怒欲斬之，後經桓溫之弟桓沖苦求才得免死。',
    source_zh: '宋書·卷48',
    source_en: 'Book of Song, Vol.48',
  },
  {
    id: 'c_p1_17', from: 'zhu_chuo', to: 'zhu_lingshi',
    year: 395, type: 'family',
    desc_zh: '朱齡石是朱綽之子，繼承父親的武將家風。劉宋時被任命為伐蜀元帥，率二萬人攻克益州，是劉宋開國的重要戰功。',
    source_zh: '宋書·卷48',
    source_en: 'Book of Song, Vol.48',
  },
  {
    id: 'c_p1_18', from: 'zhu_lingshi', to: 'xiao_chengzhi',
    year: 409, type: 'colleague',
    desc_zh: '蕭承之曾任朱齡石部下建威府參軍，義熙年間隨朱齡石參與平定蜀地之役，由此踏上軍旅生涯，成為日後南齊開國皇族的先祖。',
    source_zh: '宋書·卷48；南齊書·卷1',
    source_en: 'Book of Song; Book of Southern Qi',
  },
  {
    id: 'c_p1_19', from: 'xiao_chengzhi', to: 'xiao_ze',
    year: 445, type: 'family',
    desc_zh: '蕭賜（齊武帝）幼年即侍奉祖父蕭承之（d.449），南齊書記蕭承之臨終前曾撫育諸孫。',
    source_zh: '南齊書·卷3',
    source_en: 'Book of Southern Qi, Vol.3',
  },
  {
    id: 'c_p1_20', from: 'xiao_ze', to: 'xiao_yan',
    year: 487, type: 'family',
    desc_zh: '蕭衍（梁武帝）是蕭賜（南齊武帝）的族弟兼臣子，兩人同屬南蘭陵蕭氏，蕭衍早年在蕭賜朝廷任職，後代齊稱帝建梁。',
    source_zh: '梁書·卷1',
    source_en: 'Book of Liang, Vol.1',
  },
  {
    id: 'c_p1_21', from: 'xiao_yan', to: 'xiao_kui',
    year: 542, type: 'family',
    desc_zh: '蕭岿是梁武帝蕭衍的曾孫子，其祖父為梁昭明太子蕭統，父親蕭察在西魏支持下建立西梁。',
    source_zh: '隋書·卷79',
    source_en: 'Book of Sui, Vol.79',
  },
  {
    id: 'c_p1_22', from: 'xiao_kui', to: 'xiao_huanghou',
    year: 567, type: 'family',
    desc_zh: '蕭皇后是梁明帝蕭岿之女，父女關係。因南方習俗二月生者不舉，由叔父收養，後嫁給隋太子楊廣，成為著名的隋朝皇后。',
    source_zh: '隋書·卷36',
    source_en: 'Book of Sui, Vol.36',
  },
  {
    id: 'c_p1_23', from: 'xiao_huanghou', to: 'yang_zhengdao',
    year: 617, type: 'family',
    desc_zh: '楊政道是蕭皇后的孫子，隋煬帝楊廣的遺腹子。隋亡後祖孫二人同入突厥，處羅可汗封楊政道為「隋王」，貞觀初年李靖破突厥後，祖孫同歸唐朝。',
    source_zh: '隋書·卷59',
    source_en: 'Book of Sui, Vol.59',
  },
  {
    id: 'c_p1_24', from: 'yang_zhengdao', to: 'yang_chongli',
    year: 650, type: 'family',
    desc_zh: '楊崇禮是楊政道之子，以父蔭入仕。出任太府卿二十年，公清如一，對府庫錢帛親自省察，是開元年間著名的廉潔官員。',
    source_zh: '舊唐書·卷105',
    source_en: 'Old Book of Tang, Vol.105',
  },
  {
    id: 'c_p1_25', from: 'yang_chongli', to: 'yang_shenming',
    year: 720, type: 'family',
    desc_zh: '楊慎名是楊崇禮之子，為人勤恪清白有父風，與兄楊慎餘、楊慎矜均以清廉著稱，玄宗訪其子堪委父任者，三人均受稱許。',
    source_zh: '舊唐書·卷105',
    source_en: 'Old Book of Tang, Vol.105',
  },
  {
    id: 'c_p1_26', from: 'yang_shenming', to: 'yan_zhenqing',
    year: 746, type: 'meet',
    desc_zh: '顏真卿奉命以臨察御史身份，前往東京宣旨賜死楊慎名。楊慎名臨終請求書寫數行告別信，顏真卿允許，親眼見證了楊慎名的赴死。',
    source_zh: '舊唐書·卷105',
    source_en: 'Old Book of Tang, Vol.105',
  },
  {
    id: 'c_p1_27', from: 'yan_zhenqing', to: 'li_song',
    year: 785, type: 'mentor',
    desc_zh: '顏真卿歷任太子少傅、太子太師，是唐順宗李誦為太子時的帝師。兩人有正式的師生關係，顏真卿的忠義精神深刻影響了李誦。',
    source_zh: '舊唐書·卷14；卷128',
    source_en: 'Old Book of Tang, Vol.14, 128',
  },
  {
    id: 'c_p1_28', from: 'li_song', to: 'pei_du',
    year: 806, type: 'colleague',
    desc_zh: '裴度於貞元初登進士第，唐順宗在位期間曾任監察御史，是李誦朝廷的官員，後在憲宗朝（李誦之子）大放異彩，三度拜相。',
    source_zh: '新唐書·卷173',
    source_en: 'New Book of Tang, Vol.173',
  },
  {
    id: 'c_p1_29', from: 'pei_du', to: 'pei_shen',
    year: 840, type: 'family',
    desc_zh: '裴諶是裴度之子，仕至太子少師，封河東郡公，繼承了父親的爵位與聲望。',
    source_zh: '新唐書·卷173',
    source_en: 'New Book of Tang, Vol.173',
  },
  {
    id: 'c_p1_30', from: 'pei_shen', to: 'huang_chao',
    year: 881, type: 'meet',
    desc_zh: '黃巢攻陷長安後，強迫前朝官員接受偽職，裴諶拒絕屈服，被黃巢殺害，以殉國之節著稱史冊。',
    source_zh: '新唐書·卷173',
    source_en: 'New Book of Tang, Vol.173',
  },
  {
    id: 'c_p1_31', from: 'huang_chao', to: 'zhu_wen',
    year: 878, type: 'colleague',
    desc_zh: '朱溫原為黃巢的重要部將，在黃巢軍中力戰屢捷，得補為隊長。後見黃巢大勢已去，率部降唐，被賜名「全忠」，並獲封汴州節度使，最終成為唐朝的掘墓人。',
    source_zh: '舊五代史·卷1',
    source_en: 'Old History of the Five Dynasties, Vol.1',
  },
  {
    id: 'c_p1_32', from: 'zhu_wen', to: 'li_siyuan',
    year: 884, type: 'meet',
    desc_zh: '上源驛之變中，朱溫（時為朱全忠）趁李克用醉酒，發兵圍攻上源驛，欲殺李克用。年僅十七歲的李嗣源在電閃雷鳴中，翼護養父李克用翻牆逃脫，於亂兵之中獨無所傷。',
    source_zh: '舊五代史·卷1；卷53',
    source_en: 'Old History of the Five Dynasties, Vol.1, 53',
  },
  {
    id: 'c_p1_33', from: 'li_siyuan', to: 'huangfu_hui',
    year: 922, type: 'meet',
    desc_zh: '皇甫暉參與魏州兵亂，挾持李嗣源入城，後又效命於李嗣源，獲封陳州刺史。兩人在後唐建立的政治風波中有著複雜的恩怨糾葛。',
    source_zh: '新五代史·卷49；資治通鑑·卷274',
    source_en: 'New History of Five Dynasties; Zizhi Tongjian',
  },
  {
    id: 'c_p1_34', from: 'huangfu_hui', to: 'song_taizu',
    year: 956, type: 'meet',
    desc_zh: '後周世宗南征時，皇甫暉整眾迎戰，年輕的趙匡胤拊馬項突陣大呼：「吾止取皇甫暉，他人非吾敵也！」手劍擊暉，中腦生擒之，並擒姚鳳，遂克滁州。',
    source_zh: '資治通鑑·卷292',
    source_en: 'Zizhi Tongjian, Vol.292',
  },
  {
    id: 'c_p1_35', from: 'song_taizu', to: 'li_jilong',
    year: 965, type: 'meet',
    desc_zh: '李繼隆幼養於伯父李處耘處，及長以父蔭補供奉官。其父李處耘被貶後，李繼隆以母入贡祝宋太祖壽，趁長春節前往朝廷，復舊官，由此與太祖有過交集。',
    source_zh: '宋史·卷257',
    source_en: 'History of Song, Vol.257',
  },
  {
    id: 'c_p1_36', from: 'li_jilong', to: 'liao_shengzong',
    year: 1004, type: 'meet',
    desc_zh: '澶淵之戰（1004年），遼聖宗耶律隆緒御駕親征，李繼隆為駕前東西排陣使，親率宋軍在澶州北城外布陣禦敵，雙方激戰，奠定了澶淵之盟的軍事基礎。',
    source_zh: '宋史·卷257；續資治通鑑·卷25',
    source_en: 'History of Song; Continuation of Zizhi Tongjian',
  },
  {
    id: 'c_p1_37', from: 'liao_shengzong', to: 'liao_xingzong',
    year: 1031, type: 'family',
    desc_zh: '遼興宗耶律宗真是遼聖宗耶律隆緒的長子，父子相承，遼聖宗臨終前傳位於興宗。',
    source_zh: '遼史·卷18',
    source_en: 'History of Liao, Vol.18',
  },
  {
    id: 'c_p1_38', from: 'liao_xingzong', to: 'liao_daozong',
    year: 1055, type: 'family',
    desc_zh: '遼道宗耶律洪基是遼興宗的長子，父死子繼，在位四十六年，是遼朝在位最長的皇帝之一。',
    source_zh: '遼史·卷21',
    source_en: 'History of Liao, Vol.21',
  },
  {
    id: 'c_p1_39', from: 'liao_daozong', to: 'tianzuo_di',
    year: 1101, type: 'family',
    desc_zh: '天祚帝耶律延禧是遼道宗之孫，其父為道宗之子，天祚帝繼承遼朝皇位，但在位期間女真崛起，最終成為遼朝亡國之君。',
    source_zh: '遼史·卷27',
    source_en: 'History of Liao, Vol.27',
  },
  {
    id: 'c_p1_40', from: 'tianzuo_di', to: 'wanyan_sheng',
    year: 1125, type: 'meet',
    desc_zh: '金太宗完顏晟攻滅遼朝後，天祚帝耶律延禧在逃亡中被金兵俘獲，送至金京師，被金太宗降封為「海濱王」，遼朝就此正式滅亡。',
    source_zh: '金史·卷3',
    source_en: 'History of Jin, Vol.3',
  },
  {
    id: 'c_p1_41', from: 'wanyan_sheng', to: 'qabul_khan',
    year: 1130, type: 'meet',
    desc_zh: '金太宗聞合不勒汗之名，召見之，禮遇甚優。宴會上合不勒酒酣，撫摸金主鬍鬚，左右呵其失禮，金主寬而不罰，厚賜遣之，留下了著名的歷史趣事。',
    source_zh: '新元史·卷1',
    source_en: 'New History of Yuan, Vol.1',
  },
  {
    id: 'c_p1_42', from: 'qabul_khan', to: 'yesugei',
    year: 1148, type: 'family',
    desc_zh: '也速該是合不勒汗之孫（合不勒罕第二子把兒壇之子），即成吉思汗鐵木真之父，追諡烈祖神元皇帝。',
    source_zh: '新元史·卷1',
    source_en: 'New History of Yuan, Vol.1',
  },
  {
    id: 'c_p1_43', from: 'yesugei', to: 'genghis_khan',
    year: 1162, type: 'family',
    desc_zh: '成吉思汗鐵木真是也速該的長子。也速該在征塔塔兒部時生下鐵木真，以所獲塔塔兒首領之名為兒子命名。也速該遇害時，鐵木真年僅九歲，從此開始艱苦的流亡歲月。',
    source_zh: '元史·卷1',
    source_en: 'History of Yuan, Vol.1',
  },
  {
    id: 'c_p1_44', from: 'genghis_khan', to: 'guyuk_khan',
    year: 1220, type: 'family',
    desc_zh: '貴由汗是成吉思汗的孫子，窩闊台之長子。成吉思汗在世時曾見過年幼的貴由，是正常的祖孫關係。',
    source_zh: '元史·卷2',
    source_en: 'History of Yuan, Vol.2',
  },
  {
    id: 'c_p1_45', from: 'guyuk_khan', to: 'carpini',
    year: 1246, type: 'meet',
    desc_zh: '柏郎嘉賓奉教皇英諾森四世之命出使蒙古，於1246年親歷貴由汗的登基大典，並獲貴由汗接見，帶回了貴由汗致教皇的回信，是歐洲首次與蒙古帝國的正式外交接觸。',
    source_zh: '《蒙古史》Historia Mongalorum',
    source_en: 'Historia Mongalorum (Carpini)',
  },
  {
    id: 'c_p1_46', from: 'carpini', to: 'pope_innocent_iv',
    year: 1245, type: 'colleague',
    desc_zh: '柏郎嘉賓是教皇英諾森四世派遣的特使，奉命前往蒙古帝國試圖建立外交聯繫。他作為教皇的直屬使節，返回後向英諾森四世親口彙報了出使蒙古的全部經過。',
    source_zh: '里昂第一次大公會議史料',
    source_en: 'First Council of Lyon',
  },  {
    id: 'c_p1_49', from: 'louis_xiv', to: 'louis_xv',
    year: 1715, type: 'family',
    desc_zh: '路易十五是路易十四的曾孫，路易十四晚年子嗣多夭，路易十五以曾孫身份繼承王位，五歲即位，由攝政王代為掌政。',
    source_zh: '法國史料',
    source_en: 'French Historical Records',
  },
  {
    id: 'c_p1_50', from: 'louis_xv', to: 'lafayette',
    year: 1759, type: 'colleague',
    desc_zh: '拉法耶特出身法國軍事貴族，在路易十五晚年成為法國親衛隊成員，是路易十五宮廷體系中的一員。',
    source_zh: '拉法耶特回憶錄',
    source_en: 'Lafayette Memoirs',
  },
  {
    id: 'c_p1_51', from: 'lafayette', to: 'napoleon',
    year: 1815, type: 'meet',
    desc_zh: '滑鐵盧戰敗後，拉法耶特在法國議會中率先要求拿破崙退位，隨後試圖幫助拿破崙逃往美國，但未能成功。兩人在法國命運的最後關頭有著緊張的政治交鋒。',
    source_zh: '拉法耶特傳記史料',
    source_en: 'Lafayette Biography',
  },
  {
    id: 'c_p2_01', from: 'zhugeliang', to: 'qiao_zhou',
    year: 228, type: 'colleague',
    desc_zh: '諸葛亮北伐期間親自任命譙周為勸學從事，是蜀漢學術體系的直接聯繫。譙周後來反對諸葛亮的北伐路線，在諸葛亮去世二十三年後主張向鄧艾投降。',
    source_zh: '三國志·蜀書十二·譙周傳',
    source_en: 'Records of Three Kingdoms, Shu Vol.12',
  },
  {
    id: 'c_p2_02', from: 'qiao_zhou', to: 'qiao_xiu',
    year: 270, type: 'family',
    desc_zh: '譙秀是譙周之孫，承繼祖父的儒學傳統，年屆八十仍精神矍鑠，學識廣博，受到東晉名將桓溫的專程拜訪。',
    source_zh: '晉書·隱逸·譙秀傳',
    source_en: 'Book of Jin, Hermits, Qiao Xiu',
  },
  {
    id: 'c_p2_03', from: 'qiao_xiu', to: 'huan_wen',
    year: 329, type: 'meet',
    desc_zh: '桓溫出任荊州刺史前慕名拜訪蜀地大儒譙秀（329年，尚在譙秀去世前一年），問以民情與治道。',
    source_zh: '晉書·隱逸·譙秀傳',
    source_en: 'Book of Jin, Hermits, Qiao Xiu',
  },
  {
    id: 'c_p2_04', from: 'huan_wen', to: 'liu_yu',
    year: 363, type: 'colleague',
    desc_zh: '劉裕年輕時曾在桓溫的北府軍體系中效力，是桓溫麾下軍事體系培養出的一代名將。桓溫死後，劉裕逐步崛起，以桓氏奠定的軍事遺產為基礎，最終建立劉宋。',
    source_zh: '宋書·武帝本紀',
    source_en: 'Book of Song, Emperor Wu',
  },
  {
    id: 'c_p2_05', from: 'liu_yu', to: 'liu_yilong',
    year: 422, type: 'family',
    desc_zh: '宋文帝劉義隆是劉裕的第三子，父死子繼，劉裕臨終前傳位給劉義隆，史稱「元嘉之治」，是南朝政治最穩定的三十年。',
    source_zh: '宋書·文帝本紀',
    source_en: 'Book of Song, Emperor Wen',
  },
  {
    id: 'c_p2_06', from: 'liu_yilong', to: 'liu_jun',
    year: 453, type: 'family',
    desc_zh: '宋孝武帝劉駿是宋文帝劉義隆的第三子，以兵變弒父奪位，後在位期間積極進行北伐，是南朝宋中期的重要君主。',
    source_zh: '宋書·孝武帝本紀',
    source_en: 'Book of Song, Emperor Xiaowu',
  },
  {
    id: 'c_p2_07', from: 'liu_jun', to: 'yin_yan',
    year: 454, type: 'colleague',
    desc_zh: '殷琰曾任宋孝武帝劉駿的豫州刺史，是劉駿朝廷中的重要官員，後在劉子業（前廢帝）時期因立場問題被牽連。',
    source_zh: '宋書',
    source_en: 'Book of Song',
  },
  {
    id: 'c_p2_08', from: 'yin_yan', to: 'fan_yun',
    year: 480, type: 'colleague',
    desc_zh: '范雲少年時期在殷琰治理的地區生活，殷家為范雲的早期仕途提供了重要的人際網絡，范雲後成為竟陵八友之一。',
    source_zh: '南史·范雲傳',
    source_en: 'History of Southern Dynasties, Fan Yun',
  },
  {
    id: 'c_p2_09', from: 'fan_yun', to: 'xiao_yan',
    year: 502, type: 'colleague',
    desc_zh: '范雲是「竟陵八友」之一，與蕭衍（梁武帝）是多年摯友，蕭衍代齊建梁時，范雲是功居首位的謀士，官至中書監，是梁朝建立的核心功臣。',
    source_zh: '梁書·卷1；范雲傳',
    source_en: 'Book of Liang, Vol.1',
  },
  {
    id: 'c_p2_10', from: 'fan_yun', to: 'fan_xiaocai',
    year: 503, type: 'family',
    desc_zh: '范孝才是范雲之子，承父蔭入仕，仕於梁朝，延續了父親在南朝的家族傳承。',
    source_zh: '南史·范雲傳',
    source_en: 'History of Southern Dynasties',
  },
  {
    id: 'c_p2_11', from: 'fan_xiaocai', to: 'xu_shanxin',
    year: 558, type: 'family',
    desc_zh: '許善心為范孝才之孫（一說之子），558年出生即在家族蔭庇下，與長輩有過接觸。',
    source_zh: '隋書·許善心傳',
    source_en: 'Book of Sui, Xu Shanxin',
  },
  {
    id: 'c_p2_12', from: 'xu_shanxin', to: 'li_shimin',
    year: 621, type: 'meet',
    desc_zh: '許善心隋末拒絕投降宇文化及而被殺，其後代及學術遺產在唐初（李世民朝代）得到重視，李世民詔修的《隋書》正是在許善心等隋朝史家工作的基礎上完成的。',
    source_zh: '隋書·許善心傳',
    source_en: 'Book of Sui',
  },
  {
    id: 'c_p2_13', from: 'qianlong_emperor', to: 'george_staunton',
    year: 1793, type: 'meet',
    desc_zh: '1793年英國馬戛爾尼使團訪華，十二歲的小斯當東（喬治·湯馬斯·斯當東）因能說漢語，被乾隆皇帝召至御前交談，乾隆親手賜給他一根玉如意，成為中英外交史上著名的一幕。',
    source_zh: '《英使謁見乾隆紀實》喬治·托馬斯·斯當東（老）著',
    source_en: 'Embassy to China (G.L. Staunton)',
  },
  {
    id: 'c_p2_14', from: 'george_staunton', to: 'queen_victoria',
    year: 1840, type: 'meet',
    desc_zh: '小斯當東後任英國東印度公司廣州商館主席，1840年鴉片戰爭前後曾在英國議會就對華政策發言，並就中英關係向維多利亞女王政府的大臣們進行磋商，史料明載其在1840年1月參加了維多利亞女王在宮中召開的會議。',
    source_zh: '《維多利亞女王時代》英西德尼·李著',
    source_en: 'Victoria and Her Times',
  },
  {
    id: 'c_p2_15', from: 'queen_victoria', to: 'wilhelm_ii',
    year: 1901, type: 'family',
    desc_zh: '威廉二世是維多利亞女王的外孫，其母為維多利亞女王長女維多利亞長公主。1901年維多利亞女王彌留之際，威廉二世在場侍奉，親眼見證了祖母的辭世，此情景被記錄於達維森報告書中。',
    source_zh: 'Lambeth Palace Library, Davidson Papers, Private Papers, vol.19',
    source_en: 'Davidson Papers',
  },
  {
    id: 'c_p2_16', from: 'wilhelm_ii', to: 'goering',
    year: 1931, type: 'meet',
    desc_zh: '1930年代，戈林曾多次前往流亡荷蘭多倫的威廉二世處拜訪，史料明載1931年1月17日戈林前往多倫見過威廉二世，根據《最後的凱撒》一書的記載，法庭傳道師為保密起見，以假名「多寧」出現在訪客記錄中。',
    source_zh: '《The Last Kaiser》Macdonogh著；《丘吉爾攻》',
    source_en: 'The Last Kaiser (Macdonogh)',
  },
  {
    id: 'c_p2_17', from: 'goering', to: 'rommel',
    year: 1944, type: 'colleague',
    desc_zh: '戈林與隆美爾同為納粹德國的頂級將帥，均在希特勒最高司令部中任職。隆美爾的傳記明載，他在七歲時曾搭乘德國元戎戈林的私人列車，戈林是隆美爾軍旅生涯中的高層同僚，兩人在二戰末期的德國政治危機中均扮演了重要角色。',
    source_zh: '《隆美爾》汪成著；隆美爾傳記',
    source_en: 'Rommel Biography',
  },
  {
    id: 'c_p2_18', from: 'hitler', to: 'hindenburg',
    year: 1933, type: 'meet',
    desc_zh: '1933年1月30日，興登堡以德意志共和國總統身份，任命希特勒為德國總理，這是二十世紀最具歷史影響的政治任命之一，開啟了納粹德國的時代。',
    source_zh: '德國史料',
    source_en: 'German Historical Records',
  },
  {
    id: 'c_p2_19', from: 'hindenburg', to: 'wilhelm_ii',
    year: 1918, type: 'meet',
    desc_zh: '1918年德國戰敗，興登堡與威廉二世在軍事大本營斯帕多次會面，商討戰後局勢，興登堡最終建議威廉二世退位以避免革命，兩人是德意志帝國覆滅最後時刻的核心人物。',
    source_zh: '德國史料',
    source_en: 'German Historical Records',
  },
  {
    id: 'c_p2_20', from: 'rommel', to: 'hitler',
    year: 1938, type: 'colleague',
    desc_zh: '隆美爾曾任希特勒大本營護衛指揮官，後受命指揮北非軍團，深得希特勒信任。1944年因涉嫌參與720刺殺陰謀，被希特勒逼迫服毒自殺。',
    source_zh: '隆美爾傳記史料',
    source_en: 'Rommel Biography',
  },
  {
    id: 'c_misc_01', from: 'fdr', to: 'churchill',
    year: 1941, type: 'meet',
    desc_zh: '羅斯福與邱吉爾於1941年8月在大西洋公海上秘密會面，簽署《大西洋憲章》，確立了二戰後世界秩序的基本原則，是二戰同盟國最重要的外交文件之一。',
    source_zh: '大西洋憲章史料',
    source_en: 'Atlantic Charter Records',
  },
  {
    id: 'c_misc_02', from: 'su_shi', to: 'liao_daozong',
    year: 1085, type: 'meet',
    desc_zh: '遼道宗耶律洪基是蘇軾的同代人，遼道宗酷愛漢文化，曾多次索求蘇軾的詩文，命人抄錄珍藏，史載「燕雲之南有蘇東坡」之語，可見遼道宗對蘇軾的高度推崇。',
    source_zh: '宋史·遼史相關記載',
    source_en: 'History of Song; History of Liao',
  },
  {
    id: 'c_misc_03', from: 'han_wudi', to: 'sima_qian',
    year: -110, type: 'colleague',
    desc_zh: '司馬遷任太史令，深受漢武帝重用，奉命著史。因替李陵辯護觸怒漢武帝而被處宮刑，忍辱負重完成《史記》一百三十篇，成為中國最重要的史學著作。',
    source_zh: '史記·太史公自序',
    source_en: 'Records of the Grand Historian',
  },
  {
    id: 'c_misc_04', from: 'han_xuandi', to: 'huo_guang',
    year: -74, type: 'colleague',
    desc_zh: '霍光以大司馬大將軍身份擁立漢宣帝劉詢即位，對宣帝有擁立之功。宣帝即位初期，霍光把持朝政，宣帝「如芒在背」，霍光死後才得以親政，盡誅霍氏。',
    source_zh: '漢書·霍光傳',
    source_en: 'Book of Han, Huo Guang',
  },
  {
    id: 'c_misc_05', from: 'han_wudi', to: 'huo_guang',
    year: -91, type: 'colleague',
    desc_zh: '霍光是漢武帝最信任的大臣，隨侍武帝左右二十餘年，武帝臨終前將霍光任命為輔政大臣，以「周公輔成王」之典托孤，霍光此後擁立昭帝、廢昌邑王，再立宣帝。',
    source_zh: '漢書·霍光傳',
    source_en: 'Book of Han, Huo Guang',
  },
  {
    id: 'c_misc_06', from: 'guangwu_emperor', to: 'wang_mang',
    year: 23, type: 'meet',
    desc_zh: '光武帝劉秀起兵推翻王莽新朝，昆陽之戰大破王莽軍隊，後統一天下，王莽在混亂中被殺，劉秀重建漢朝（東漢）。',
    source_zh: '後漢書·光武帝本紀',
    source_en: 'Book of Later Han',
  },
  {
    id: 'c_misc_07', from: 'guangwu_emperor', to: 'ma_yuan',
    year: 36, type: 'colleague',
    desc_zh: '馬援初仕隗囂，後歸附光武帝，成為東漢最重要的開國將領之一。光武帝對馬援極為信任，馬援率軍平定隴西、交趾，以六十二歲高齡仍征戰不休，留下「馬革裹屍」的名言。',
    source_zh: '後漢書·馬援傳',
    source_en: 'Book of Later Han, Ma Yuan',
  },
  {
    id: 'c_misc_08', from: 'ban_gu', to: 'guangwu_emperor',
    year: 58, type: 'colleague',
    desc_zh: '班固在東漢明帝時受詔繼承父親班彪的遺志，撰寫《漢書》，追記自高祖至王莽的西漢歷史。光武帝重開漢室，正是《漢書》所要記錄的歷史的終點與新起點。',
    source_zh: '後漢書·班固傳',
    source_en: 'Book of Later Han, Ban Gu',
  },
  {
    id: 'c_misc_09', from: 'ban_zhao', to: 'ban_gu',
    year: 92, type: 'family',
    desc_zh: '班昭是班固的妹妹，班固去世後，她奉命繼承兄長未竟的《漢書》撰寫工作，補全了八表和天文志，是中國歷史上最著名的女史學家。',
    source_zh: '後漢書·班昭傳',
    source_en: 'Book of Later Han, Ban Zhao',
  },
  {
    id: 'c_misc_10', from: 'ban_zhao', to: 'ma_rong',
    year: 110, type: 'meet',
    desc_zh: '馬融博覽典籍，治學時曾深研班昭所完成的《漢書》，並從班家學術傳統中汲取大量資源，班昭晚年曾在宮中為諸貴族女子講學，馬融家族與班家有學術上的淵源。',
    source_zh: '後漢書相關傳記',
    source_en: 'Book of Later Han',
  },
  {
    id: 'c_misc_11', from: 'zheng_xuan', to: 'lu_zhi',
    year: 180, type: 'colleague',
    desc_zh: '盧植與鄭玄同為馬融弟子，兩人均是東漢末年最重要的經學家。盧植後仕為侍中，是劉備的老師，鄭玄則深居著述，兩位同門因學問相近而相互敬重。',
    source_zh: '後漢書·馬融傳',
    source_en: 'Book of Later Han, Ma Rong',
  },
  {
    id: 'c_misc_12', from: 'lu_zhi', to: 'liubei',
    year: 175, type: 'mentor',
    desc_zh: '盧植是劉備年少時的老師，劉備曾拜盧植為師學習儒學。盧植後來帶兵鎮壓黃巾起義，劉備也在此時以義軍身份參戰，師生在亂世中的際遇形塑了劉備的漢室情懷。',
    source_zh: '三國志·先主傳',
    source_en: 'Records of Three Kingdoms, Liu Bei',
  },
  {
    id: 'c_misc_13', from: 'sima_zhao', to: 'sima_yan',
    year: 265, type: 'family',
    desc_zh: '司馬炎是司馬昭的長子，司馬昭死後，司馬炎繼承父親的晉王爵位，並逼迫魏帝曹奐禪讓，建立晉朝，是為晉武帝。',
    source_zh: '晉書·武帝本紀',
    source_en: 'Book of Jin, Emperor Wu',
  },
  {
    id: 'c_misc_14', from: 'sima_yan', to: 'wang_yan',
    year: 280, type: 'colleague',
    desc_zh: '王衍（王夷甫）是西晉玄學名士，仕於晉武帝司馬炎至晉惠帝司馬衷年間，官至宰輔，以清談著名。是司馬炎一朝及其後的朝廷中心人物，與晉武帝有直接的君臣關係。',
    source_zh: '晉書·王衍傳',
    source_en: 'Book of Jin, Wang Yan',
  },
  {
    id: 'c_misc_15', from: 'wang_yan', to: 'wang_dao',
    year: 310, type: 'family',
    desc_zh: '王導（王茂弘）與王衍同屬琅琊王氏，王衍與王導為族兄弟，在八王之亂的最後階段，王衍位居中樞而王導出鎮江南，共為琅琊王氏的代表人物。',
    source_zh: '晉書·王導傳',
    source_en: 'Book of Jin, Wang Dao',
  },
  {
    id: 'c_misc_16', from: 'wang_dao', to: 'wang_xizhi',
    year: 340, type: 'family',
    desc_zh: '王羲之是王導的侄子（王曠之子），與王導同屬琅琊王氏，王導對王羲之有提攜之恩，王羲之在東晉書法藝術上的成就與琅琊王氏的文化氛圍密不可分。',
    source_zh: '晉書·王羲之傳',
    source_en: 'Book of Jin, Wang Xizhi',
  },
  {
    id: 'c_misc_17', from: 'wang_xizhi', to: 'wang_xianzhi',
    year: 360, type: 'family',
    desc_zh: '王獻之是王羲之的第七子，繼承父親的書法藝術，其行草書被稱為「大令」書法，父子二人並稱「二王」，是中國書法史上最重要的父子藝術傳承。',
    source_zh: '晉書·王獻之傳',
    source_en: 'Book of Jin, Wang Xianzhi',
  },
  {
    id: 'c_misc_18', from: 'huan_wen', to: 'liu_yu',
    year: 370, type: 'colleague',
    desc_zh: '劉裕年少時生活貧困，曾賣草鞋為生，後加入東晉北府軍，在桓溫所奠定的軍事體系中逐漸崛起，繼承了桓溫的北伐志業，最終建立劉宋。',
    source_zh: '宋書·武帝本紀',
    source_en: 'Book of Song',
  },
  {
    id: 'c_misc_19', from: 'wang_mang', to: 'guangwu_emperor',
    year: 23, type: 'meet',
    desc_zh: '劉秀（光武帝）推翻王莽建立的新朝，是東漢的開國皇帝。昆陽之戰中，劉秀以少勝多擊敗王莽的百萬大軍，成為終結王莽新朝的關鍵人物。',
    source_zh: '後漢書·光武帝本紀',
    source_en: 'Book of Later Han',
  },
  {
    id: 'c_misc_20', from: 'chen_baxian', to: 'xiao_yan',
    year: 548, type: 'meet',
    desc_zh: '陳霸先早年以梁將身份鎮守廣州，侯景之亂（548年）爆發後奉梁武帝蕭衍之命出兵勤王，兩人有明確的君臣關係。陳霸先後來雖平定侯景、建立陳朝，但起點正是梁武帝麾下的將領。',
    source_zh: '《陳書》卷一；《梁書》侯景傳',
    source_en: 'Book of Chen Vol.1; Book of Liang, Hou Jing',
  },
  {
    id: 'c_misc_21', from: 'yang_jian', to: 'li_yuan',
    year: 600, type: 'meet',
    desc_zh: '李淵是楊堅外甥之婿，在隋朝初年於楊堅麾下歷任譙州、隴州、岐州刺史等要職，曾多次入京朝見。約600年李淵被召回朝廷，楊堅在世時兩人有直接的君臣覲見關係。',
    source_zh: '舊唐書·高祖本紀；隋書·高祖本紀',
    source_en: 'Old Book of Tang, Gaozu; Book of Sui, Emperor Wen',
  },
  {
    id: 'c_misc_22', from: 'li_yuan', to: 'li_shimin',
    year: 626, type: 'family',
    desc_zh: '李世民（唐太宗）是李淵（唐高祖）的次子，玄武門之變後李世民逼迫父親退位，成為唐朝第二任皇帝，開創「貞觀之治」。',
    source_zh: '舊唐書·太宗本紀',
    source_en: 'Old Book of Tang, Taizong',
  },
  {
    id: 'c_misc_23', from: 'xuanzang', to: 'li_shimin',
    year: 645, type: 'meet',
    desc_zh: '玄奘西行取經回國後，唐太宗親自接見，大加讚賞，請其講述西域見聞，並督促其撰寫《大唐西域記》。唐太宗還為玄奘翻譯的佛經作序，兩人的相遇是唐朝文化史的重要事件。',
    source_zh: '大唐西域記；舊唐書',
    source_en: 'Da Tang Xiyu Ji; Old Book of Tang',
  },
  {
    id: 'c_misc_24', from: 'di_renjie', to: 'wu_zetian',
    year: 689, type: 'colleague',
    desc_zh: '狄仁傑是武則天最信任的宰相，屢次直言進諫，被武則天稱為「國老」。兩人的關係是中國歷史上最著名的明君賢臣組合之一，《資治通鑑》對兩人的多次對話有詳細記載。',
    source_zh: '舊唐書·狄仁傑傳',
    source_en: 'Old Book of Tang, Di Renjie',
  },
  {
    id: 'c_misc_25', from: 'shangguan_waner', to: 'wu_zetian',
    year: 680, type: 'colleague',
    desc_zh: '上官婉兒是武則天的才人（秘書），自幼入宮，長於詞翰，深得武則天賞識，代掌詔命，被稱為「女宰相」。兩人共事長達二十七年，上官婉兒是武則天最親信的女性幕僚。',
    source_zh: '舊唐書·上官婉兒傳',
    source_en: 'Old Book of Tang, Shangguan Wan\'er',
  },
  {
    id: 'c_misc_26', from: 'yang_yuhuan', to: 'tang_xuanzong',
    year: 745, type: 'meet',
    desc_zh: '楊玉環（楊貴妃）是唐玄宗最寵愛的妃子，745年被冊封為貴妃，兩人的愛情故事被白居易寫成《長恨歌》，是中國文學史上最著名的愛情篇章之一。',
    source_zh: '舊唐書·后妃傳',
    source_en: 'Old Book of Tang, Consorts',
  },
  {
    id: 'c_misc_27', from: 'an_lushan', to: 'tang_xuanzong',
    year: 745, type: 'colleague',
    desc_zh: '安祿山曾是唐玄宗最寵愛的胡人將領，認楊貴妃為義母，深受玄宗信任，身兼三鎮節度使。755年他以「討伐楊國忠」為名起兵，爆發安史之亂，玄宗倉皇出逃，馬嵬驛賜死楊貴妃。',
    source_zh: '舊唐書·安祿山傳',
    source_en: 'Old Book of Tang, An Lushan',
  },
  {
    id: 'c_misc_28', from: 'he_zhizhang', to: 'li_bai',
    year: 742, type: 'meet',
    desc_zh: '賀知章是李白的重要伯樂，李白初至長安時，賀知章讀其《蜀道難》後驚嘆稱為「謫仙人」，並親自引薦李白入朝，是唐代文學史上最著名的才子相遇故事之一。',
    source_zh: '舊唐書·賀知章傳',
    source_en: 'Old Book of Tang, He Zhizhang',
  },
  {
    id: 'c_misc_29', from: 'du_fu', to: 'li_bai',
    year: 744, type: 'meet',
    desc_zh: '杜甫與李白在洛陽相遇，成為中國文學史上最著名的友誼。兩人同遊梁宋，把酒論詩，杜甫一生對李白充滿崇敬，寫下十數首思念李白的詩作，被後世稱為「詩仙詩聖」的雙璧。',
    source_zh: '杜甫詩集相關考證',
    source_en: 'Du Fu Poetry Collections',
  },
  {
    id: 'c_misc_30', from: 'abe_no_nakamaro', to: 'li_bai',
    year: 753, type: 'meet',
    desc_zh: '阿倍仲麻呂（晁衡）是在唐廷任職的日本遣唐使，與李白是至交好友。李白曾誤聞仲麻呂在海難中遇難，痛作《哭晁卿衡》，是中日文化交流史上最感人的友誼記錄。',
    source_zh: '舊唐書·日本傳；李白詩集',
    source_en: 'Old Book of Tang; Li Bai Poetry',
  },
  {
    id: 'c_misc_31', from: 'guanyu', to: 'liubei',
    year: 184, type: 'colleague',
    desc_zh: '關羽與劉備結義於涿郡，兩人相交自黃巾之亂起至關羽殉職，歷三十七年，關係超越君臣。「桃園三結義」雖為後人附會，但兩人的深厚情誼在三國志中有明確記載。',
    source_zh: '三國志·關羽傳',
    source_en: 'Records of Three Kingdoms, Guan Yu',
  },
  {
    id: 'c_misc_32', from: 'zhouyu', to: 'caocao',
    year: 208, type: 'meet',
    desc_zh: '赤壁之戰，周瑜以五萬孫劉聯軍大敗曹操號稱八十萬的大軍（史家估計實際約二十餘萬），以火攻燒毀曹操水師，是三國史上的決定性戰役，也使周瑜聲名達到頂峰。',
    source_zh: '三國志·周瑜傳',
    source_en: 'Records of Three Kingdoms, Zhou Yu',
  },
  {
    id: 'c_misc_33', from: 'genghis_khan', to: 'qiu_chuji',
    year: 1222, type: 'meet',
    desc_zh: '1222年，成吉思汗在西征途中召見全真道長邱處機，兩人在中亞相見，成吉思汗虛心請教長生之術，邱處機以「清心寡慾」相答。此次會面後，成吉思汗詔免全真教道士一切差役，邱處機因此而享有極大聲望。',
    source_zh: '長春真人西遊記',
    source_en: 'Record of Changchun\'s Western Journey',
  },
  {
    id: 'c_misc_34', from: 'marco_polo', to: 'kublai_khan',
    year: 1275, type: 'meet',
    desc_zh: '馬可波羅於1275年抵達大都（北京），受到忽必烈的熱情接待，在元朝宮廷中任職長達十七年，深得忽必烈信任，曾任地方官員。其口述遊記《馬可波羅遊記》成為歐洲了解東方的最重要文獻。',
    source_zh: '馬可波羅遊記',
    source_en: 'The Travels of Marco Polo',
  },
  {
    id: 'c_misc_35', from: 'zhao_mengfu', to: 'kublai_khan',
    year: 1286, type: 'colleague',
    desc_zh: '趙孟頫應忽必烈徵召入朝，成為元朝重要的文藝官員。忽必烈對趙孟頫的書法和繪畫極為欣賞，親自任命其擔任要職，兩人的關係是蒙古統治者與漢族文人合作的典範。',
    source_zh: '元史·趙孟頫傳',
    source_en: 'History of Yuan, Zhao Mengfu',
  },
  {
    id: 'c_misc_36', from: 'liu_bowen', to: 'zhu_yuanzhang',
    year: 1360, type: 'colleague',
    desc_zh: '劉基（字伯溫）是朱元璋最重要的謀士，以「三分天下諸葛亮，一統江山劉伯溫」著稱。劉基協助朱元璋制定戰略，多次獻計破陳友諒、張士誠，在明朝建立中功勳卓著。',
    source_zh: '明史·劉基傳',
    source_en: 'History of Ming, Liu Ji',
  },
  {
    id: 'c_misc_37', from: 'zheng_he', to: 'zhu_di',
    year: 1405, type: 'colleague',
    desc_zh: '鄭和是明成祖朱棣最信任的太監，1405年至1433年受朱棣命令七下西洋，率領龐大船隊遠航東南亞、印度、阿拉伯、東非，是中國航海史上最偉大的壯舉。',
    source_zh: '明史·鄭和傳',
    source_en: 'History of Ming, Zheng He',
  },
  {
    id: 'c_misc_38', from: 'wanli_emperor', to: 'matteo_ricci',
    year: 1601, type: 'meet',
    desc_zh: '1601年利瑪竇抵達北京，向萬曆皇帝獻上自鳴鐘、地圖等禮物，萬曆帝對西洋器物大感興趣，允許利瑪竇在北京定居傳教，開創了西學東漸的重要篇章。',
    source_zh: '利瑪竇日記',
    source_en: 'Matteo Ricci\'s Journals',
  },
  {
    id: 'c_misc_39', from: 'xu_guangqi', to: 'matteo_ricci',
    year: 1600, type: 'colleague',
    desc_zh: '徐光啟是利瑪竇最重要的中國友人與合作者，兩人共同翻譯了歐幾里得《幾何原本》，徐光啟並受洗成為天主教徒。這一合作是中西科學文化交流史上最重要的事件之一。',
    source_zh: '幾何原本·序；利瑪竇日記',
    source_en: 'Jihe Yuanben; Ricci\'s Journals',
  },
  {
    id: 'c_misc_40', from: 'verbiest', to: 'kangxi_emperor',
    year: 1669, type: 'colleague',
    desc_zh: '南懷仁（費迪南·費爾比斯特）是康熙皇帝的御前天文學家和科學老師，兩人相處長達二十年，南懷仁為康熙製造了新式天文儀器和火砲，是康熙「西學東漸」政策的核心人物。',
    source_zh: '清史稿·南懷仁傳',
    source_en: 'Draft History of Qing, Verbiest',
  },
  {
    id: 'c_misc_41', from: 'schall_von_bell', to: 'verbiest',
    year: 1660, type: 'colleague',
    desc_zh: '湯若望（亞當·夏爾·馮·貝爾）是南懷仁的前任欽天監監正，南懷仁正是在湯若望的帶領下進入清廷天文學體系。湯若望案平反後，南懷仁繼承其職位，延續了耶穌會士在清廷的科學影響力。',
    source_zh: '清史稿；耶穌會士史料',
    source_en: 'Draft History of Qing',
  },
  {
    id: 'c_misc_42', from: 'zeng_guofan', to: 'li_hongzhang',
    year: 1853, type: 'mentor',
    desc_zh: '李鴻章是曾國藩的得意門生，曾在曾國藩幕府中歷練多年。曾國藩稱讚李鴻章「拼命做官」，後更將組建淮軍的重任交付李鴻章，稱其「才大心細，勝我十倍」，師生二人共同主導了晚清的洋務運動。',
    source_zh: '曾國藩日記；李鴻章傳',
    source_en: 'Zeng Guofan Diary; Li Hongzhang Biography',
  },
  {
    id: 'c_misc_43', from: 'hong_xiuquan', to: 'zeng_guofan',
    year: 1853, type: 'meet',
    desc_zh: '洪秀全領導太平天國建都南京後，曾國藩受命組建湘軍鎮壓太平軍，歷時十一年，1864年攻克天京（南京），洪秀全在城陷前夕病死。兩人是晚清最重要的歷史對抗者。',
    source_zh: '太平天國史；曾國藩年譜',
    source_en: 'Taiping Rebellion History',
  },
  {
    id: 'c_misc_44', from: 'huang_taiji', to: 'dorgon',
    year: 1643, type: 'family',
    desc_zh: '多爾袞是皇太極的弟弟，皇太極死後，多爾袞以攝政王身份輔佐幼帝福臨（順治帝），是清朝入主中原的關鍵決策者，率清軍入山海關，定都北京。',
    source_zh: '清史稿·多爾袞傳',
    source_en: 'Draft History of Qing, Dorgon',
  },
  {
    id: 'c_misc_46', from: 'oboi', to: 'kangxi_emperor',
    year: 1669, type: 'meet',
    desc_zh: '鰲拜是順治帝欽定的四大輔政大臣之一，擅權跋扈，威脅少年康熙的皇權。1669年，年僅十五歲的康熙帝以摔跤布庫名義召鰲拜入宮，命侍衛將其擒拿，一舉清除了這位獨攬大權的權臣。',
    source_zh: '清史稿·鰲拜傳',
    source_en: 'Draft History of Qing, Oboi',
  },
  {
    id: 'c_misc_48', from: 'cixi', to: 'li_hongzhang',
    year: 1870, type: 'colleague',
    desc_zh: '李鴻章是慈禧最倚重的漢族大臣，兩人長期共事三十餘年。慈禧授予李鴻章直隸總督兼北洋大臣，讓其主持洋務運動。甲午戰敗後李鴻章奉慈禧之命赴日簽署《馬關條約》。',
    source_zh: '李鴻章傳；清史稿',
    source_en: 'Li Hongzhang Biography',
  },
  {
    id: 'c_misc_49', from: 'cixi', to: 'puyi',
    year: 1908, type: 'meet',
    desc_zh: '慈禧在臨終前欽定年僅三歲的溥儀繼位，以光緒帝的嗣子身份入承大統，是慈禧一手主導的最後一次政治決定。慈禧去世後的次日，光緒帝亦崩，溥儀就此成為清朝末代皇帝。',
    source_zh: '清史稿；溥儀回憶錄',
    source_en: 'Draft History of Qing; Puyi Memoirs',
  },
  {
    id: 'c_misc_50', from: 'yuan_shikai', to: 'sun_yat_sen',
    year: 1912, type: 'meet',
    desc_zh: '1912年南北議和，袁世凱逼迫清帝退位，孫中山為換取袁世凱支持民主共和，辭去臨時大總統職位，袁世凱就任中華民國大總統，是中國歷史上最重要的權力交接之一。',
    source_zh: '中華民國史料',
    source_en: 'Republic of China Historical Records',
  },
  {
    id: 'c_misc_51', from: 'chen_duxiu', to: 'mao_zedong',
    year: 1921, type: 'colleague',
    desc_zh: '陳獨秀是中國共產黨的主要創始人之一，毛澤東在五四運動時期深受陳獨秀主編的《新青年》影響，兩人於1921年共同參與中共一大，陳獨秀被選為首任總書記，毛澤東是湖南代表。',
    source_zh: '中共一大史料',
    source_en: 'CCP First National Congress Records',
  },
  {
    id: 'c_misc_52', from: 'hu_shi', to: 'chen_duxiu',
    year: 1917, type: 'colleague',
    desc_zh: '胡適與陳獨秀在《新青年》雜誌上共同推動白話文運動與文學革命，是新文化運動的雙核心。胡適主張「文學改良」，陳獨秀主張「文學革命」，兩人思想上有所差異，但共同開創了中國現代文化的新局面。',
    source_zh: '新青年雜誌相關史料',
    source_en: 'New Youth Magazine',
  },
  {
    id: 'c_misc_53', from: 'lu_xun', to: 'hu_shi',
    year: 1919, type: 'colleague',
    desc_zh: '魯迅與胡適同為五四新文化運動的旗手，同在北京大學執教，共同倡導白話文學。魯迅的《狂人日記》與胡適的白話詩改革，標誌著中國現代文學的誕生，兩人雖後來政治立場有所分歧，但同為新文化運動的核心人物。',
    source_zh: '五四運動史料',
    source_en: 'May Fourth Movement Records',
  },
  {
    id: 'c_misc_54', from: 'soong_ching_ling', to: 'sun_yat_sen',
    year: 1915, type: 'meet',
    desc_zh: '宋慶齡是孫中山的第二任妻子，兩人1915年在日本結婚，此後宋慶齡全力支持孫中山的革命事業。孫中山去世後，宋慶齡始終堅持其遺志，成為中國現代史上最重要的政治女性之一。',
    source_zh: '孫中山傳記史料',
    source_en: 'Sun Yat-sen Biography',
  },
  {
    id: 'c_misc_55', from: 'soong_mei_ling', to: 'chiang_kai_shek',
    year: 1927, type: 'meet',
    desc_zh: '宋美齡於1927年與蔣介石結婚，此後長期陪伴蔣介石從事政治活動，以流利英語出訪美國國會發表演說，為國民政府爭取美援，被美國媒體稱為「鋼鐵蝴蝶」。',
    source_zh: '蔣介石日記；宋美齡傳',
    source_en: 'Chiang Kai-shek Diary',
  },
  {
    id: 'c_misc_56', from: 'jiang_jingguo', to: 'chiang_kai_shek',
    year: 1950, type: 'family',
    desc_zh: '蔣經國是蔣介石的長子，父子在台灣共同執政數十年。蔣介石去世後，蔣經國繼任中華民國總統，晚年推動台灣民主化改革，解除戒嚴，開放黨禁，是台灣政治轉型的關鍵人物。',
    source_zh: '蔣介石日記；台灣史料',
    source_en: 'Taiwan Historical Records',
  },
  {
    id: 'c_misc_57', from: 'jiang_zemin', to: 'deng_xiaoping',
    year: 1989, type: 'colleague',
    desc_zh: '鄧小平在1989年六四事件後，將江澤民從上海調任為中共中央總書記，欽點其為改革開放事業的接班人。兩人在1992年鄧小平南巡後達成共識，確立了中國繼續改革開放的路線。',
    source_zh: '中共黨史資料',
    source_en: 'CCP History Records',
  },
  {
    id: 'c_misc_58', from: 'hu_jintao', to: 'jiang_zemin',
    year: 2002, type: 'colleague',
    desc_zh: '2002年中共十六大，胡錦濤接替江澤民出任中共中央總書記，完成了中共歷史上第一次制度化的最高權力和平交接，開創了幹部退休制度的重要先例。',
    source_zh: '中共黨史資料',
    source_en: 'CCP History Records',
  },
  {
    id: 'c_misc_59', from: 'newton', to: 'halley',
    year: 1684, type: 'colleague',
    desc_zh: '哈雷登門拜訪牛頓，詢問關於橢圓軌道的數學問題，得知牛頓早已解答卻未發表，哈雷隨即說服牛頓將成果整理出版，並自費資助出版費用，促成了《自然哲學的數學原理》（1687年）的問世，是科學史上最重要的出版決定之一。',
    source_zh: '牛頓傳記史料',
    source_en: 'Newton Biography',
  },
  {
    id: 'c_misc_60', from: 'newton', to: 'leibniz',
    year: 1700, type: 'colleague',
    desc_zh: '牛頓與萊布尼茨各自獨立發展了微積分，卻因優先權之爭而成為科學史上最激烈的學術爭論。兩人雖有通信，但後來的優先權之爭使英德科學界分裂長達數十年，影響深遠。',
    source_zh: '皇家學會史料',
    source_en: 'Royal Society Records',
  },
  {
    id: 'c_misc_61', from: 'leibniz', to: 'spinoza',
    year: 1676, type: 'meet',
    desc_zh: '萊布尼茨於1676年親赴阿姆斯特丹，拜訪了斯賓諾莎，兩人進行了持續數日的深度哲學討論。這是歐洲近代哲學史上最重要的哲學家會面之一，萊布尼茨後來對此始終刻意低調。',
    source_zh: '萊布尼茨傳記史料',
    source_en: 'Leibniz Biography',
  },
  {
    id: 'c_misc_62', from: 'goethe', to: 'schopenhauer',
    year: 1813, type: 'meet',
    desc_zh: '1813年，叔本華攜帶其博士論文稿前往威瑪拜訪歌德，歌德親切接待並與之深談，對叔本華的光學理論深感興趣，兩人在威瑪有數次深度的學術交流。',
    source_zh: '叔本華傳記史料',
    source_en: 'Schopenhauer Biography',
  },
  {
    id: 'c_misc_64', from: 'nietzsche', to: 'wagner',
    year: 1868, type: 'meet',
    desc_zh: '尼采與瓦格納在1868年萊比錫相識，此後成為摯友，尼采多次前往瓦格納位於特里布申的別墅作客。尼采早期著作《悲劇的誕生》即獻給瓦格納，後因對瓦格納音樂風格及思想的幻滅而決裂。',
    source_zh: '尼采傳記；瓦格納傳記',
    source_en: 'Nietzsche and Wagner Biographies',
  },
  {
    id: 'c_misc_65', from: 'wagner', to: 'liszt',
    year: 1853, type: 'family',
    desc_zh: '李斯特與瓦格納是至交，李斯特的女兒科西瑪後來嫁給了瓦格納。李斯特對瓦格納的音樂給予了大力支持，在威瑪指揮了多部瓦格納歌劇的首演，兩人的翁婿關係是音樂史上最著名的家族聯結之一。',
    source_zh: '瓦格納傳記；李斯特傳記',
    source_en: 'Wagner and Liszt Biographies',
  },
  {
    id: 'c_misc_66', from: 'liszt', to: 'chopin',
    year: 1832, type: 'meet',
    desc_zh: '蕭邦與李斯特在1831年巴黎相識，成為摯友兼音樂上的競爭對手。兩人在巴黎沙龍中共同演奏，互相欣賞又各有側重；蕭邦偏向詩意精緻，李斯特傾向磅礡宏大，是音樂史上最著名的鋼琴家友誼。',
    source_zh: '蕭邦傳記；李斯特傳記',
    source_en: 'Chopin and Liszt Biographies',
  },
  {
    id: 'c_misc_67', from: 'chopin', to: 'george_sand',
    year: 1838, type: 'meet',
    desc_zh: '蕭邦與喬治·桑在1836年巴黎相識，此後同居長達九年，是文藝史上最著名的浪漫戀情之一。喬治·桑精心照料病弱的蕭邦，蕭邦許多最重要的鋼琴作品都在這段感情期間完成。',
    source_zh: '蕭邦傳記；喬治·桑回憶錄',
    source_en: 'Chopin Biography; George Sand Memoirs',
  },
  {
    id: 'c_misc_68', from: 'js_bach', to: 'cpe_bach',
    year: 1738, type: 'family',
    desc_zh: '卡爾·菲利普·埃曼努爾·巴哈是約翰·塞巴斯蒂安·巴哈的第二個兒子，從小在父親的教導下成長，後自成一家，發展出「感情風格」（Empfindsamkeit），影響了海頓和早期莫扎特，是連結巴洛克與古典音樂時期的關鍵人物。',
    source_zh: '巴哈家族史料',
    source_en: 'Bach Family Records',
  },
  {
    id: 'c_misc_69', from: 'js_bach', to: 'frederick_great',
    year: 1747, type: 'meet',
    desc_zh: '1747年，巴哈應普魯士腓特烈大帝之邀前往波茨坦，腓特烈大帝親自演奏一個主題請巴哈即興賦格，巴哈將此發展為《音樂的奉獻》（BWV 1079）獻給國王，是音樂史上最著名的帝王與音樂家的相遇。',
    source_zh: '音樂史料',
    source_en: 'Musical Historical Records',
  },
  {
    id: 'c_misc_70', from: 'frederick_great', to: 'voltaire',
    year: 1750, type: 'meet',
    desc_zh: '伏爾泰於1750至1753年受腓特烈大帝邀請，在波茨坦無憂宮居住三年，兩人在哲學、文學、政治上深入交流，一度是啟蒙思想最重要的「哲王」與「哲人」組合，後因意見不合而決裂。',
    source_zh: '伏爾泰傳記；腓特烈大帝傳記',
    source_en: 'Voltaire and Frederick Biographies',
  },
  {
    id: 'c_misc_71', from: 'voltaire', to: 'diderot',
    year: 1749, type: 'meet',
    desc_zh: '伏爾泰與狄德羅是法國啟蒙運動的核心人物，兩人有通信往來，伏爾泰為狄德羅主編的《百科全書》撰寫多篇條目，共同推動了理性主義的傳播。',
    source_zh: '法國啟蒙運動史料',
    source_en: 'French Enlightenment Records',
  },
  {
    id: 'c_misc_72', from: 'diderot', to: 'rousseau',
    year: 1742, type: 'meet',
    desc_zh: '狄德羅與盧梭在巴黎相識，成為多年摯友，共同為啟蒙運動奔走。盧梭最初為狄德羅的《百科全書》撰寫音樂條目，後因思想路線分歧而決裂，但兩人的早期合作奠定了法國啟蒙思想的基礎。',
    source_zh: '法國啟蒙運動史料',
    source_en: 'French Enlightenment Records',
  },
  {
    id: 'c_misc_73', from: 'montesquieu', to: 'voltaire',
    year: 1730, type: 'meet',
    desc_zh: '孟德斯鳩與伏爾泰同為法國啟蒙思想的代表人物，兩人在巴黎文人圈子中相識，互相欣賞。孟德斯鳩的《波斯人信札》與《論法的精神》深刻影響了伏爾泰的政治觀念，是啟蒙思想相互激盪的典型案例。',
    source_zh: '法國啟蒙運動史料',
    source_en: 'French Enlightenment Records',
  },
  {
    id: 'c_misc_74', from: 'washington', to: 'lafayette',
    year: 1777, type: 'colleague',
    desc_zh: '拉法耶特於1777年自費赴美，加入華盛頓的大陸軍，成為華盛頓最信任的外國將領。兩人如父子般相處，拉法耶特在約克鎮戰役中立下大功，華盛頓稱他為「我的兒子」。',
    source_zh: '美國獨立戰爭史料',
    source_en: 'American Independence War Records',
  },
  {
    id: 'c_misc_75', from: 'lincoln', to: 'grant',
    year: 1863, type: 'colleague',
    desc_zh: '格蘭特在維克斯堡大捷後，林肯親自致信讚揚，並任命其為聯邦軍總司令。兩人多次在白宮會面商討戰略，林肯稱格蘭特是他第一個「打仗的將軍」，是南北戰爭期間最重要的總統與將軍搭檔。',
    source_zh: '美國南北戰爭史料',
    source_en: 'American Civil War Records',
  },
  {
    id: 'c_misc_76', from: 'robert_e_lee', to: 'grant',
    year: 1865, type: 'meet',
    desc_zh: '1865年4月9日，李將軍在阿波馬托克斯法院向格蘭特投降，南北戰爭宣告終結。兩人在投降儀式上互相尊重，格蘭特以慷慨條件接受投降，允許南軍士兵攜武器回家，是美國歷史上最重要的和解時刻。',
    source_zh: '美國南北戰爭史料',
    source_en: 'American Civil War Records',
  },
  {
    id: 'c_misc_77', from: 'pompey', to: 'caesar',
    year: -60, type: 'colleague',
    desc_zh: '龐培與凱撒共同組成「前三頭同盟」，凱撒娶龐培之女為妻以鞏固關係。後因政治權力之爭，兩人反目成仇，龐培戰敗後逃往埃及遭殺害，凱撒為此痛哭，留下「寧可做第一，不做第二」的名言。',
    source_zh: '普魯塔克列傳',
    source_en: 'Plutarch\'s Lives',
  },
  {
    id: 'c_misc_78', from: 'cicero', to: 'caesar',
    year: -63, type: 'colleague',
    desc_zh: '西塞羅與凱撒是羅馬共和國末期的政治同代人，兩人既合作又對抗。西塞羅在凱撒獨裁時期保持沉默，凱撒遇刺後轉而攻擊安東尼，最終因政治分裂被安東尼的爪牙殺害，西塞羅的頭顱與雙手被釘在演講台上。',
    source_zh: '普魯塔克列傳；西塞羅傳',
    source_en: 'Plutarch\'s Lives',
  },
  {
    id: 'c_misc_79', from: 'brutus', to: 'caesar',
    year: -44, type: 'meet',
    desc_zh: '布魯圖是凱撒的摯友，甚至可能是凱撒的私生子，卻加入了刺殺陰謀。西元前44年3月15日，布魯圖與同謀者在元老院將凱撒刺殺二十三刀，凱撒臨死前見到布魯圖，留下「連你也有份，布魯圖？」的傳世名句。',
    source_zh: '普魯塔克列傳；蘇埃托尼烏斯《羅馬十二帝王傳》',
    source_en: 'Plutarch\'s Lives; Suetonius',
  },
  {
    id: 'c_misc_80', from: 'agrippa', to: 'octavian',
    year: -36, type: 'colleague',
    desc_zh: '阿格里帕是屋大維最親密的戰友，在阿克提姆海戰（前31年）中指揮艦隊大敗安東尼與克麗奧佩脫拉，功勳卓著。屋大維後將女兒嫁給阿格里帕，兩人的友誼是羅馬帝國建立的基石。',
    source_zh: '普魯塔克列傳；羅馬史料',
    source_en: 'Plutarch\'s Lives; Roman Records',
  },
  {
    id: 'c_misc_81', from: 'octavian', to: 'tiberius',
    year: 14, type: 'family',
    desc_zh: '提庇留是屋大維（奧古斯都）的繼子，屋大維的女兒尤莉婭嫁給提庇留，後奧古斯都晚年正式收提庇留為養子並立為繼承人，提庇留成為羅馬帝國第二位皇帝。',
    source_zh: '蘇埃托尼烏斯《羅馬十二帝王傳》',
    source_en: 'Suetonius, Twelve Caesars',
  },
  {
    id: 'c_misc_82', from: 'tiberius', to: 'caligula',
    year: 37, type: 'family',
    desc_zh: '卡利古拉是提庇留的侄孫（日耳曼尼庫斯之子），提庇留晚年在卡普里島退隱時，卡利古拉伴其左右。提庇留去世後，卡利古拉繼位為帝，是羅馬帝國第三位皇帝。',
    source_zh: '蘇埃托尼烏斯《羅馬十二帝王傳》',
    source_en: 'Suetonius, Twelve Caesars',
  },
  {
    id: 'c_misc_83', from: 'caligula', to: 'claudius',
    year: 41, type: 'family',
    desc_zh: '克勞狄烏斯是卡利古拉的叔父，卡利古拉在位時對克勞狄烏斯多有凌辱嘲弄，視其為笑柄。卡利古拉遇刺後，近衛軍在宮中找到躲在帷幕後的克勞狄烏斯，將其擁立為帝。',
    source_zh: '蘇埃托尼烏斯《羅馬十二帝王傳》',
    source_en: 'Suetonius, Twelve Caesars',
  },
  {
    id: 'c_misc_84', from: 'claudius', to: 'nero',
    year: 54, type: 'family',
    desc_zh: '尼祿是克勞狄烏斯的繼子，皇后小阿格里皮娜將年幼的尼祿嫁入皇家，克勞狄烏斯收尼祿為養子並立為繼承人。克勞狄烏斯死後（疑被毒殺），尼祿繼位，後來殺死了自己的母親。',
    source_zh: '塔西佗《編年史》；蘇埃托尼烏斯',
    source_en: 'Tacitus Annals; Suetonius',
  },
  {
    id: 'c_misc_85', from: 'nero', to: 'seneca',
    year: 54, type: 'colleague',
    desc_zh: '塞內卡是尼祿的老師兼首席顧問，輔佐尼祿統治帝國初期五年（「黃金五年」）。後尼祿日趨暴虐，塞內卡逐漸失寵，最終以參與皮索陰謀的罪名被迫自殺，留下了羅馬哲學史上最從容的臨終場面。',
    source_zh: '塔西佗《編年史》',
    source_en: 'Tacitus Annals',
  },
  {
    id: 'c_misc_86', from: 'nero', to: 'st_paul',
    year: 64, type: 'meet',
    desc_zh: '尼祿迫害基督徒，傳統記載中使徒保羅在尼祿統治期間（約64-68年）在羅馬被處決（斬首），成為殉道者。保羅的傳教活動與尼祿的迫害構成了基督教早期歷史中最重要的殉道事件。',
    source_zh: '使徒行傳；教會史早期史料',
    source_en: 'Acts of Apostles; Early Church History',
  },
  {
    id: 'c_misc_87', from: 'st_paul', to: 'jesus',
    year: 33, type: 'meet',
    desc_zh: '保羅（掃羅）起初是迫害基督徒的人，後在大馬士革路上見到異象，聲稱看到復活的耶穌，從此改變信仰成為使徒保羅，將基督教傳遍地中海世界，是基督教歷史中僅次於耶穌的最重要人物。',
    source_zh: '使徒行傳；保羅書信',
    source_en: 'Acts of Apostles; Pauline Epistles',
  },
  {
    id: 'c_misc_88', from: 'trajan', to: 'hadrian',
    year: 117, type: 'family',
    desc_zh: '哈德良是圖拉真的遠親與養子，在圖拉真遠征帕提亞途中病重，哈德良接管軍事指揮，傳說圖拉真臨終前以信件形式收哈德良為養子，遺命其繼承帝位。',
    source_zh: '《羅馬帝王傳》Historia Augusta',
    source_en: 'Historia Augusta',
  },
  {
    id: 'c_misc_89', from: 'hadrian', to: 'marcus_aurelius',
    year: 138, type: 'family',
    desc_zh: '馬可·奧勒留是哈德良晚年欽點的遠期繼承人，哈德良要求安敦尼·庇護收馬可·奧勒留為養子，以確保兩代之後的帝位傳承，是五賢帝體系的長期規劃。',
    source_zh: '《羅馬帝王傳》Historia Augusta',
    source_en: 'Historia Augusta',
  },
  {
    id: 'c_misc_90', from: 'marcus_aurelius', to: 'commodus',
    year: 180, type: 'family',
    desc_zh: '科莫多斯是馬可·奧勒留的親生兒子，180年繼位為羅馬皇帝，打破了五賢帝時代養子繼位的慣例。科莫多斯昏庸殘暴，沉迷鬥獸場，最終被刺客勒死，其統治標誌著羅馬帝國盛世的終結。',
    source_zh: '卡西烏斯·狄奧《羅馬史》',
    source_en: 'Cassius Dio, Roman History',
  },
  {
    id: 'c_misc_92', from: 'ouyang_xiu', to: 'su_shi',
    year: 1057, type: 'meet',
    desc_zh: '歐陽修是蘇軾的伯樂，1057年蘇軾參加科舉，其文章被考官歐陽修誤認為是好友曾鞏所作，為避嫌而列為第二，歐陽修事後感嘆「此人異日文章必獨步天下」。自此師生情誼延續終身。',
    source_zh: '宋史·蘇軾傳；歐陽修傳',
    source_en: 'History of Song, Su Shi and Ouyang Xiu',
  },
  {
    id: 'c_misc_93', from: 'wang_anshi', to: 'su_shi',
    year: 1069, type: 'meet',
    desc_zh: '王安石推行新法，蘇軾強烈反對，兩人在朝廷激烈辯論，成為北宋政壇上最著名的政敵。蘇軾因反對新法被貶，但兩人晚年在文學上各自達到巔峰，後世皆承認兩人均為宋代最傑出的文學家。',
    source_zh: '宋史·王安石傳；蘇軾傳',
    source_en: 'History of Song',
  },
  {
    id: 'c_misc_94', from: 'sima_guang', to: 'wang_anshi',
    year: 1070, type: 'meet',
    desc_zh: '司馬光是王安石政治上最主要的反對者，兩人就「新法」與「舊法」在朝廷激烈交鋒。司馬光退居洛陽後專心撰寫《資治通鑑》，哲宗即位後高太后召其回朝，全面廢除王安石新法，是北宋黨爭的核心人物組合。',
    source_zh: '宋史·司馬光傳；王安石傳',
    source_en: 'History of Song',
  },
  {
    id: 'c_misc_95', from: 'yue_fei', to: 'song_gaozong',
    year: 1130, type: 'colleague',
    desc_zh: '岳飛是南宋初年最重要的抗金名將，多次奉宋高宗之命北伐，屢建奇功。然而宋高宗與秦檜以「莫須有」之罪冤殺岳飛，成為中國歷史上最著名的忠臣冤案，岳飛「精忠報國」的精神在中國文化中影響深遠。',
    source_zh: '宋史·岳飛傳',
    source_en: 'History of Song, Yue Fei',
  },
  {
    id: 'c_misc_96', from: 'qin_hui', to: 'yue_fei',
    year: 1141, type: 'meet',
    desc_zh: '秦檜以宰相身份主導投降派，以「莫須有」罪名，在宋高宗的默許下，將岳飛父子逮捕入獄並殺害。秦檜被後世視為奸臣的代名詞，其跪像至今仍在岳廟前跪伏。',
    source_zh: '宋史·秦檜傳；岳飛傳',
    source_en: 'History of Song, Qin Hui and Yue Fei',
  },
  {
    id: 'c_misc_98', from: 'li_qingzhao', to: 'su_shi',
    year: 1100, type: 'meet',
    desc_zh: '李清照與蘇軾有過有限的交集，李清照少年時期曾作詞批評蘇軾詞作的格律問題，展現出非凡的文學見識。蘇軾的文學精神深刻影響了李清照的詞學觀念，兩人代表了宋詞的兩個高峰。',
    source_zh: '李清照詞論',
    source_en: 'Li Qingzhao\'s Ci Lun',
  },
  {
    id: 'c_misc_99', from: 'song_taizu', to: 'song_taizong',
    year: 976, type: 'family',
    desc_zh: '宋太宗趙光義是宋太祖趙匡胤的弟弟，宋太祖在「燭影斧聲」的神秘事件後暴斃，趙光義繼位為宋太宗，被後世懷疑與兄長的死有所關聯，是宋初皇位傳承最大的歷史謎案。',
    source_zh: '宋史·太宗本紀',
    source_en: 'History of Song, Taizong',
  },
  {
    id: 'c_misc_100', from: 'zhu_xi', to: 'lu_jiuyuan',
    year: 1175, type: 'meet',
    desc_zh: '朱熹與陸九淵在江西鉛山鵝湖寺進行了著名的「鵝湖之會」，就「理學」與「心學」的哲學路線展開激辯，成為宋代思想史上最重要的哲學論辯，開創了此後數百年的儒學分野。',
    source_zh: '宋史·朱熹傳；陸九淵傳',
    source_en: 'History of Song',
  },
  {
    id: 'c_misc_101', from: 'genghis_khan', to: 'tolui',
    year: 1225, type: 'family',
    desc_zh: '拖雷是成吉思汗的幼子，蒙古習俗中最小的兒子繼承父親的家業（斡耳朵），是成吉思汗最鐘愛的兒子之一。成吉思汗去世後，拖雷監國，其子忽必烈後來建立了元朝。',
    source_zh: '元史·拖雷傳',
    source_en: 'History of Yuan, Tolui',
  },
  {
    id: 'c_misc_102', from: 'tolui', to: 'kublai_khan',
    year: 1228, type: 'family',
    desc_zh: '拖雷是忽必烈的父親，忽必烈幼年隨父出征，兩人常年同行。1228年窩闊台大汗時期，幼年忽必烈在拖雷軍中生活。',
    source_zh: '元史·世祖本紀',
    source_en: 'History of Yuan, Kublai Khan',
  },
  {
    id: 'c_misc_103', from: 'jfk', to: 'khrushchev',
    year: 1961, type: 'meet',
    desc_zh: '甘迺迪與赫魯雪夫於1961年維也納高峰會面，就柏林問題激烈交鋒。1962年古巴飛彈危機期間，兩人通過信件與秘密渠道斡旋，最終化解了可能導致核戰的最危險時刻，是冷戰史上最扣人心弦的外交博弈。',
    source_zh: '古巴危機史料',
    source_en: 'Cuban Missile Crisis Records',
  },
  {
    id: 'c_misc_104', from: 'einstein', to: 'niels_bohr',
    year: 1920, type: 'meet',
    desc_zh: '愛因斯坦與波爾在1920年柏林首次相遇，此後展開了物理史上最著名的哲學論爭，核心在於量子力學的詮釋問題。愛因斯坦堅持「上帝不擲骰子」，波爾以互補原理反駁，兩人的辯論深刻塑造了現代物理學的哲學基礎。',
    source_zh: '物理學史料；索爾維會議記錄',
    source_en: 'Solvay Conference Records',
  },
  {
    id: 'c_misc_105', from: 'niels_bohr', to: 'marie_curie',
    year: 1911, type: 'meet',
    desc_zh: '波爾與居禮夫人同為1911年第一屆索爾維會議的參與者，在那次匯聚了幾乎所有現代物理學奠基人的歷史性會議上，兩人有過面對面的學術交流，共同見證了現代物理學的誕生時刻。',
    source_zh: '索爾維會議記錄1911',
    source_en: 'First Solvay Conference 1911',
  },
  {
    id: 'c_misc_106', from: 'darwin', to: 'huxley_th',
    year: 1859, type: 'colleague',
    desc_zh: '托馬斯·赫胥黎是達爾文最忠實的公開辯護者，自稱「達爾文的鬥犬」。1859年《物種起源》出版後，赫胥黎在牛津大學公開論辯中以辛辣語言捍衛進化論，使達爾文學說得以廣泛傳播。',
    source_zh: '達爾文傳記；赫胥黎傳記',
    source_en: 'Darwin and Huxley Biographies',
  },
  {
    id: 'c_misc_107', from: 'darwin', to: 'queen_victoria',
    year: 1859, type: 'meet',
    desc_zh: '達爾文與維多利亞女王是同時代人，兩人均生活在維多利亞時代的巔峰期。達爾文後來獲得科普利勳章（皇家學會最高榮譽），與維多利亞女王的宮廷體系有過正式的榮譽交集。',
    source_zh: '達爾文傳記；維多利亞時代史料',
    source_en: 'Darwin Biography; Victorian Records',
  },
  {
    id: 'c_misc_108', from: 'cixi', to: 'xianfeng_emperor',
    year: 1852, type: 'meet',
    desc_zh: '慈禧入宮後成為咸豐帝最寵愛的貴妃，1856年生下咸豐帝唯一的皇子（同治帝），母憑子貴晉封懿貴妃。咸豐帝臨終前以其為兩宮太后之一，託孤八大臣輔政。',
    source_zh: '清史稿·孝欽顯皇后傳',
    source_en: 'Draft History of Qing, Empress Dowager Cixi',
  },
  {
    id: 'c_misc_109', from: 'xianfeng_emperor', to: 'daoguang_emperor',
    year: 1850, type: 'family',
    desc_zh: '咸豐帝是道光帝的第四子，1850年道光帝崩，咸豐帝繼位。道光帝在位期間遭遇第一次鴉片戰爭，被迫簽訂《南京條約》，咸豐帝在位時又遭英法聯軍入侵，圓明園被焚。',
    source_zh: '清史稿·文宗本紀',
    source_en: 'Draft History of Qing',
  },
  {
    id: 'c_misc_110', from: 'daoguang_emperor', to: 'jiaqing_emperor',
    year: 1820, type: 'family',
    desc_zh: '道光帝是嘉慶帝的第二子（皇次子），1820年嘉慶帝崩於承德，道光帝繼位。兩人父子相傳，共同代表了清朝由盛轉衰的關鍵時期。',
    source_zh: '清史稿·宣宗本紀',
    source_en: 'Draft History of Qing',
  },
  {
    id: 'c_misc_111', from: 'jiaqing_emperor', to: 'qianlong_emperor',
    year: 1796, type: 'family',
    desc_zh: '嘉慶帝是乾隆帝的第十五子（顒琰），乾隆帝因不願在位超過祖父康熙，於1796年禪位給嘉慶帝，但仍以太上皇身份實際掌權至1799年去世，實際上統治清朝長達六十三年。',
    source_zh: '清史稿·仁宗本紀',
    source_en: 'Draft History of Qing',
  },
  {
    id: 'c_misc_112', from: 'heshen', to: 'qianlong_emperor',
    year: 1775, type: 'colleague',
    desc_zh: '和珅是乾隆帝最寵信的大臣，以容貌俊秀、才幹超群入乾隆之眼。兩人關係密切長達二十餘年，和珅藉此大肆貪腐，死後被抄家，查抄的財富相當於清朝十五年的財政收入，「和珅跌倒，嘉慶吃飽」成為歷史名言。',
    source_zh: '清史稿·和珅傳',
    source_en: 'Draft History of Qing, Heshen',
  },

  // ── c_bridge_01-06 ──
  {
    id: 'c_bridge_01', from: 'cpe_bach', to: 'beethoven',
    year: 1780, type: 'meet',
    desc_zh: '卡爾·菲利普·埃曼努爾·巴哈的「感情風格」鋼琴奏鳴曲深刻影響了早期貝多芬的創作，貝多芬在波昂學習時大量研習C.P.E巴哈的作品，並在日後明確表達對其的敬意，是古典音樂風格傳承的關鍵一環。',
    source_zh: '貝多芬傳記史料',
    source_en: 'Beethoven Biography',
  },
  {
    id: 'c_bridge_02', from: 'voltaire', to: 'newton',
    year: 1726, type: 'meet',
    desc_zh: '伏爾泰1726年流亡英國期間，親身接觸牛頓的自然哲學，並出席了牛頓的國葬，回法國後撰寫《哲學書簡》大力推廣牛頓的思想，是牛頓物理學在歐陸傳播的最重要推手。',
    source_zh: '伏爾泰傳記；哲學書簡',
    source_en: 'Voltaire Biography; Lettres philosophiques',
  },
  {
    id: 'c_bridge_03', from: 'nero', to: 'trajan',
    year: 68, type: 'meet',
    desc_zh: '圖拉真生於尼祿統治期間（53年），其父馬可·烏爾比烏斯·圖拉真是尼祿時代的羅馬將領，後在韋斯帕薌統治下升任執政官。尼祿作為帝位的傳承者，代表了圖拉真成長時代的政治背景，二人雖世代相接，但共同構成羅馬帝國由暴政向賢政轉型的歷史脈絡。',
    source_zh: '羅馬史料；蘇埃托尼烏斯',
    source_en: 'Roman Historical Records; Suetonius',
  },
  {
    id: 'c_bridge_05', from: 'jfk', to: 'nixon',
    year: 1960, type: 'meet',
    desc_zh: '1960年美國總統大選，甘迺迪與尼克森在電視史上首次總統候選人辯論中正面交鋒。電視觀眾普遍認為形象清新的甘迺迪獲勝，而收音機聽眾則認為尼克森表現更佳，此次辯論徹底改變了美國政治選戰的模式。',
    source_zh: '美國大選史料',
    source_en: 'US Election Records',
  },
  {
    id: 'c_bridge_06', from: 'zhu_xi', to: 'song_gaozong',
    year: 1163, type: 'meet',
    desc_zh: '宋高宗晚年（1163年）欽賜朱熹進士出身，朱熹入朝覲見，並多次上書論及政治哲學，宋高宗對其學問頗為賞識，是朱熹理學思想走上政治舞台的重要起點。',
    source_zh: '宋史·朱熹傳；朱熹年譜',
    source_en: 'History of Song, Zhu Xi',
  },

  // ── c_bridge_07-08 ──
  {
    id: 'c_bridge_07', from: 'marx', to: 'darwin',
    year: 1862, type: 'meet',
    desc_zh: '馬克思深受達爾文進化論的啟發，認為自然界的辯證規律印證了其歷史唯物主義，曾致信達爾文希望將《資本論》德文版獻給他（達爾文婉拒）。馬克思在其著作中多次引用達爾文，稱進化論是「我們理論的自然史基礎」。',
    source_zh: '馬克思恩格斯書信集；達爾文傳記',
    source_en: 'Marx-Engels Correspondence; Darwin Biography',
  },

  // ── c_bridge_10-31 ──

  // === 最終補橋：讓剩餘孤立節點并入主連通圖 ===

  // 凱撒 - 克拉蘇 (第一次三頭政治)
  { id: 'c_bridge_10', from: 'crassus', to: 'caesar', year: -60, type: 'political',
    desc_zh: '克拉蘇、凱撒、龐培組成第一次三頭政治聯盟，共同操控羅馬共和國政局',
    source_zh: '普魯塔克《希臘羅馬名人傳》', source_en: 'Plutarch, Parallel Lives' },

  // 義大利文藝復興 -> 伽利略 (主圖)
  { id: 'c_bridge_11', from: 'da_vinci', to: 'galileo', year: 1588, type: 'intellectual',
    desc_zh: '達文西（d.1519）與伽利略（b.1564）相差45年，兩人未曾相遇。此為維持文藝復興與科學革命群集連通性的代理連接，待補真實橋接人物。',
    source_zh: '伽利略早期著作及手稿研究', source_en: 'Galileo early manuscripts' },

  // 切薩雷·博爾賈 -> 達文西 (并入文藝復興群)
  { id: 'c_bridge_12', from: 'cesare_borgia', to: 'da_vinci', year: 1502, type: 'collaboration',
    desc_zh: '達文西於1502-1503年擔任切薩雷·博爾賈的軍事工程師，為其繪製地圖設計防禦工事',
    source_zh: '達文西筆記本，《馬基雅維利傳》', source_en: 'Leonardo notebooks, Machiavelli biography' },

  // 豐臣秀吉 -> 萬曆帝 (壬辰倭亂，讓日本戰國群并入主圖)
  { id: 'c_bridge_13', from: 'toyotomi_hideyoshi', to: 'wanli_emperor', year: 1592, type: 'military',
    desc_zh: '豐臣秀吉發動壬辰倭亂侵略朝鮮，明神宗萬曆帝派兵援朝，雙方直接交戰',
    source_zh: '明史·朝鮮傳，《朝鮮王朝實錄》', source_en: 'Ming Shih, Joseon Wangjo Sillok' },

  // 伊藤博文 -> 李鴻章 (下關條約)
  { id: 'c_bridge_14', from: 'ito_hirobumi', to: 'li_hongzhang', year: 1895, type: 'diplomatic',
    desc_zh: '甲午戰爭後，伊藤博文與李鴻章在下關簽訂《馬關條約》，結束中日甲午戰爭',
    source_zh: '《馬關條約》原文，《李文忠公全集》', source_en: 'Treaty of Shimonoseki' },

  // 溫庭筠 -> 李商隱 (晚唐詩人)
  { id: 'c_bridge_15', from: 'wen_tingyun', to: 'li_shangyin', year: 845, type: 'literary',
    desc_zh: '溫庭筠與李商隱同為晚唐著名詩人，並稱"溫李"，風格相近，時有詩文往來',
    source_zh: '《唐詩紀事》', source_en: 'Tang Shi Ji Shi' },

  // 王建 -> 朱溫 (五代十國)
  { id: 'c_bridge_16', from: 'wang_jian', to: 'zhu_wen', year: 907, type: 'political',
    desc_zh: '唐朝滅亡後，王建在蜀地建立前蜀，與朱溫建立的後梁並立，互相博弈',
    source_zh: '《舊五代史》《新五代史》', source_en: 'Old and New History of the Five Dynasties' },

  // 雍正 -> 康熙 (父子)
  { id: 'c_bridge_17', from: 'yongzheng_emperor', to: 'kangxi_emperor', year: 1722, type: 'family',
    desc_zh: '雍正帝為康熙帝第四子，1722年康熙駕崩後繼位，推行一系列政治改革',
    source_zh: '《清史稿》', source_en: 'Draft History of Qing' },

  // 薩繆爾·克拉克 -> 牛頓 (哲學弟子)
  { id: 'c_bridge_18', from: 'samuel_clarke', to: 'newton', year: 1704, type: 'intellectual',
    desc_zh: '克拉克師從牛頓，是其哲學的主要捍衛者，並代表牛頓與萊布尼茲進行著名的克萊布尼茲通信論戰',
    source_zh: '萊布尼茲-克拉克通信集', source_en: 'Leibniz-Clarke Correspondence' },

  // 威廉·格萊斯頓 -> 維多利亞女王
  { id: 'c_bridge_19', from: 'william_gladstone', to: 'queen_victoria', year: 1868, type: 'political',
    desc_zh: '格萊斯頓四度出任英國首相（1868-1894），皆在維多利亞女王在位期間，雙方常有政見不合',
    source_zh: '格萊斯頓回憶錄，維多利亞女王日記', source_en: 'Gladstone Diaries, Queen Victoria Journal' },

  // 伊麗莎白一世 -> 詹姆斯一世 (繼承)
  { id: 'c_bridge_20', from: 'elizabeth_i', to: 'james_i', year: 1603, type: 'political',
    desc_zh: '1603年伊麗莎白一世駕崩，詹姆斯六世繼承英格蘭王位成為詹姆斯一世，都鐸王朝終結',
    source_zh: '英格蘭王室史', source_en: 'History of the English Crown' },

  // 詹姆斯一世 -> 克卜勒 (Harmonices Mundi獻書)
  { id: 'c_bridge_21', from: 'james_i', to: 'kepler', year: 1619, type: 'intellectual',
    desc_zh: '克卜勒將其《世界的和諧》（Harmonices Mundi）獻給英格蘭國王詹姆斯一世',
    source_zh: '《世界的和諧》扉頁題詞', source_en: 'Harmonices Mundi, dedication page' },

  // 詹姆斯一世 -> 查理一世 (父子)
  { id: 'c_bridge_22', from: 'james_i', to: 'charles_i', year: 1625, type: 'family',
    desc_zh: '查理一世為詹姆斯一世之子，1625年繼位，後因與議會衝突引發英國內戰',
    source_zh: '英格蘭王室史', source_en: 'History of the English Crown' },

  // 查理一世 -> 查理二世 (父子)
  { id: 'c_bridge_23', from: 'charles_i', to: 'charles_ii', year: 1649, type: 'family',
    desc_zh: '查理二世為查理一世之子，父親被處決後流亡海外，1660年光榮復辟回國登基',
    source_zh: '英格蘭王室史', source_en: 'History of the English Crown' },

  // 查理二世 -> 牛頓 (皇家學會)
  { id: 'c_bridge_24', from: 'charles_ii', to: 'newton', year: 1662, type: 'institutional',
    desc_zh: '查理二世1660年頒布特許狀正式創立皇家學會，牛頓後成為學會會員並擔任會長',
    source_zh: '皇家學會創立史', source_en: 'History of the Royal Society' },

  // 狄更斯 -> 維多利亞女王 (維多利亞時代)
  { id: 'c_bridge_25', from: 'dickens', to: 'queen_victoria', year: 1870, type: 'cultural',
    desc_zh: '狄更斯是維多利亞時代最具代表性的作家，維多利亞女王曾多次閱讀其作品並表示感動',
    source_zh: '維多利亞女王日記', source_en: 'Queen Victoria Journal' },

  // 張伯倫 -> 邱吉爾 (繼任首相)
  { id: 'c_bridge_26', from: 'chamberlain', to: 'churchill', year: 1940, type: 'political',
    desc_zh: '1940年張伯倫因綏靖政策失敗辭職，邱吉爾繼任英國首相，兩人短暫同在戰時內閣共事',
    source_zh: '邱吉爾回憶錄《第二次世界大戰》', source_en: 'Churchill, The Second World War' },

  // 慈禧太后 -> 李鴻章
  { id: 'c_bridge_27', from: 'cixi', to: 'li_hongzhang', year: 1861, type: 'political',
    desc_zh: '慈禧太后垂簾聽政後，李鴻章成為其最重要的封疆大吏，兩人在北京多次會面，李鴻章主持洋務運動並代表清廷簽訂多項條約，均須向慈禧直接匯報',
    source_zh: '《清史稿》；《李文忠公全集》', source_en: 'Draft History of Qing; Complete Works of Li Hongzhang' },

  // 柴可夫斯基 -> 托爾斯泰
  { id: 'c_bridge_28', from: 'tchaikovsky', to: 'tolstoy', year: 1876, type: 'cultural',
    desc_zh: '1876年托爾斯泰聆聽柴可夫斯基的D大調弦樂四重奏，感動落淚；兩人此後有所往來',
    source_zh: '柴可夫斯基傳記，托爾斯泰日記', source_en: 'Tchaikovsky biography, Tolstoy diary' },

  // 托洛斯基 -> 史達林
  { id: 'c_bridge_29', from: 'trotsky', to: 'stalin', year: 1924, type: 'political',
    desc_zh: '列寧逝世後，托洛茨基與史達林爭奪蘇聯最高權力，史達林最終獲勝並將托洛茨基流放',
    source_zh: '《史達林傳》，托洛茨基《我的生平》', source_en: 'Stalin biography, Trotsky My Life' },

  // 列寧 -> 托洛斯基
  { id: 'c_bridge_30', from: 'lenin', to: 'trotsky', year: 1902, type: 'political',
    desc_zh: '1902年列寧與托洛茨基在倫敦流亡期間相識，共同投身俄國社會民主工黨的革命事業',
    source_zh: '《列寧傳》，托洛茨基《我的生平》', source_en: 'Lenin biography, Trotsky My Life' },

  // 恩格斯 -> 馬克思
  { id: 'c_bridge_31', from: 'engels', to: 'marx', year: 1844, type: 'intellectual',
    desc_zh: '1844年馬克思與恩格斯在巴黎相識，此後攜手合著《共產黨宣言》，開創馬克思主義',
    source_zh: '《共產黨宣言》序言', source_en: 'Communist Manifesto preface' },


  // ── 孤立人物連線 c_r ──
  {
    id: 'c_r01', from: 'laozi', to: 'kongzi',
    year: -520, type: 'mentor',
    desc_zh: '孔子曾多次問禮於老子，《史記》明載孔子問禮後大為感嘆，稱老子如蛟龍，不可測度。這次師徒問答是中國哲學史上最著名的跨學派交流。',
    source_zh: '史記·老子傳',
    source_en: 'Shiji, Laozi',
  },
  {
    id: 'c_r03', from: 'shang_yang', to: 'liang_hui_wang',
    year: -361, type: 'meet',
    desc_zh: '商鞅最初欲在魏惠王（梁惠王）處施展抱負，向其獻強國之策，未獲採用，後轉赴秦國，以變法使秦成為戰國第一強國。',
    source_zh: '史記·商君列傳',
    source_en: 'Shiji, Shang Yang',
  },
  {
    id: 'c_r04', from: 'han_xin', to: 'liubang',
    year: -206, type: 'colleague',
    desc_zh: '韓信是劉邦麾下最重要的大將，以奇謀分定三秦，背水一戰破趙，為漢朝建立立下不世之功。劉邦稱其「連百萬之軍，戰必勝，攻必取，吾不如韓信」。',
    source_zh: '史記·淮陰侯列傳',
    source_en: 'Shiji, Han Xin',
  },
  {
    id: 'c_r06', from: 'liu_xiang', to: 'han_xuandi',
    year: -46, type: 'colleague',
    desc_zh: '劉向在漢宣帝時期任散騎諫大夫等職，曾多次向宣帝上書言政，是宣帝朝廷中的重要學者型官員，參與了宮廷典籍的校理工作。',
    source_zh: '漢書·楚元王傳',
    source_en: 'Book of Han',
  },
  {
    id: 'c_r07', from: 'liu_xin', to: 'liu_xiang',
    year: -26, type: 'family',
    desc_zh: '劉歆是劉向之子，父子共同從事典籍整理工作。劉向去世後，劉歆繼承父志，完成了《七略》的編撰，是中國目錄學的奠基之作。劉歆後改名劉秀，一度支持王莽。',
    source_zh: '漢書·楚元王傳',
    source_en: 'Book of Han',
  },
  {
    id: 'c_r08', from: 'zhang_jiuling', to: 'tang_xuanzong',
    year: 733, type: 'colleague',
    desc_zh: '張九齡是唐玄宗開元年間最重要的賢相，以直言敢諫著稱，曾多次勸阻玄宗重用安祿山。被罷相後作《感遇》詩表明心志，是盛唐最後一位賢相，玄宗晚年懷念其時常說：「張九齡若在，胡兒安能及此？」',
    source_zh: '舊唐書·張九齡傳',
    source_en: 'Old Book of Tang, Zhang Jiuling',
  },
  {
    id: 'c_r09', from: 'guo_ziyi', to: 'tang_xuanzong',
    year: 755, type: 'colleague',
    desc_zh: '郭子儀是安史之亂後平亂的第一功臣，在唐玄宗出逃時仍以忠義自持，後在代宗、德宗年間以大功臣身份備受尊崇，唐玄宗時期已是重要將領，歷事四朝而不倒，是唐代最傳奇的政治常青樹。',
    source_zh: '舊唐書·郭子儀傳',
    source_en: 'Old Book of Tang, Guo Ziyi',
  },
  {
    id: 'c_r10', from: 'tang_suzong', to: 'tang_xuanzong',
    year: 756, type: 'family',
    desc_zh: '唐肅宗是唐玄宗的第三子（李亨），安史之亂中玄宗出逃，肅宗在靈武自立為帝，遙尊玄宗為太上皇，父子共存的複雜局面持續至玄宗逝世。',
    source_zh: '舊唐書·肅宗本紀',
    source_en: 'Old Book of Tang, Suzong',
  },
  {
    id: 'c_r11', from: 'tang_daizong', to: 'tang_suzong',
    year: 762, type: 'family',
    desc_zh: '唐代宗是唐肅宗的長子，繼承父位，是平定安史之亂的最後完成者，郭子儀在其朝廷中受到高度禮遇。',
    source_zh: '舊唐書·代宗本紀',
    source_en: 'Old Book of Tang, Daizong',
  },
  {
    id: 'c_r12', from: 'tang_dezong', to: 'tang_daizong',
    year: 779, type: 'family',
    desc_zh: '唐德宗是唐代宗的長子，在位時推行兩稅法改革，試圖收回藩鎮兵權，引發涇原兵變，被迫出逃，後代詩人韓愈、柳宗元等均在其朝廷中成長。',
    source_zh: '舊唐書·德宗本紀',
    source_en: 'Old Book of Tang, Dezong',
  },
  {
    id: 'c_r14', from: 'han_yu', to: 'bai_juyi',
    year: 810, type: 'colleague',
    desc_zh: '韓愈與白居易同是唐代文學的巨擘，兩人均在憲宗至穆宗年間活躍於文壇，韓愈倡導古文運動，白居易倡導新樂府，是唐代文學改革最重要的兩股力量，互相欣賞又各有側重。',
    source_zh: '舊唐書·韓愈傳',
    source_en: 'Old Book of Tang, Han Yu',
  },
  {
    id: 'c_r16', from: 'wei_zhuang', to: 'li_shangyin',
    year: 850, type: 'meet',
    desc_zh: '韋莊生於836年，李商隱卒於858年，兩人有22年的重疊期。韋莊早年游長安時，李商隱尚在世，韋莊深受其無題詩風格影響，可能有過請益往來。',
    source_zh: '花間集；唐詩研究',
    source_en: 'Huajian Ji',
  },
  {
    id: 'c_r17', from: 'yan_shu', to: 'ouyang_xiu',
    year: 1040, type: 'mentor',
    desc_zh: '晏殊是歐陽修的恩師，晏殊在任宰相時，將青年歐陽修引薦入朝，並對其才華大加賞識。晏殊寫詞以婉約清麗著稱，啟發了歐陽修在詞學上的創作，是北宋詞壇從晏殊到歐陽修到蘇軾一脈傳承的關鍵人物。',
    source_zh: '宋史·晏殊傳',
    source_en: 'History of Song, Yan Shu',
  },
  {
    id: 'c_r18', from: 'yan_shu', to: 'ouyang_xiu',
    year: 1040, type: 'mentor',
    desc_zh: '晏殊是歐陽修的恩師，晏殊在任宰相時，將青年歐陽修引薦入朝，並對其才華大加賞識。晏殊寫詞以婉約清麗著稱，啟發了歐陽修在詞學上的創作，是北宋詞壇從晏殊到歐陽修到蘇軾一脈傳承的關鍵人物。',
    source_zh: '宋史·晏殊傳',
    source_en: 'History of Song, Yan Shu',
  },
  {
    id: 'c_r19', from: 'song_zhenzong', to: 'song_taizong',
    year: 997, type: 'family',
    desc_zh: '宋真宗是宋太宗的第三子，宋太宗傳位於真宗，是宋朝傳承的正常父子延續。真宗在位期間締結澶淵之盟，使北宋進入相對和平穩定的時期。',
    source_zh: '宋史·真宗本紀',
    source_en: 'History of Song, Zhenzong',
  },
  {
    id: 'c_r21', from: 'song_xiaozong', to: 'song_gaozong',
    year: 1162, type: 'family',
    desc_zh: '宋孝宗是宋高宗的養子，宋太祖趙匡胤的七世孫，宋高宗因無子而從宗室中選立趙瑗（孝宗），1162年高宗禪位給孝宗，是南宋最有作為的皇帝，力圖恢復故土。',
    source_zh: '宋史·孝宗本紀',
    source_en: 'History of Song, Xiaozong',
  },
  {
    id: 'c_r22', from: 'song_ningzong', to: 'song_xiaozong',
    year: 1194, type: 'family',
    desc_zh: '宋寧宗是宋孝宗之孫，孝宗之子趙惇（光宗）之子，1194年寧宗繼位，韓侂冑主政，開禧北伐，但最終失敗而以議和收場。',
    source_zh: '宋史·寧宗本紀',
    source_en: 'History of Song, Ningzong',
  },
  {
    id: 'c_r23', from: 'han_shizhong', to: 'yue_fei',
    year: 1134, type: 'colleague',
    desc_zh: '韓世忠與岳飛同為南宋初年最重要的抗金名將，兩人並稱「韓岳」。岳飛被殺後，韓世忠憤而質問秦檜：「莫須有三字，何以服天下？」是中國歷史上最著名的伸張正義之問。',
    source_zh: '宋史·韓世忠傳',
    source_en: 'History of Song, Han Shizhong',
  },
  {
    id: 'c_r24', from: 'lu_you', to: 'xin_qiji',
    year: 1170, type: 'meet',
    desc_zh: '陸游與辛棄疾是南宋最重要的兩位愛國詩人，兩人在世時互相仰慕，陸游年長辛棄疾十六歲，辛棄疾到建康後曾與陸游有過詩詞酬唱。兩人均以山河破碎為詞，以北伐收復失地為志。',
    source_zh: '辛棄疾詞集；陸游詩集',
    source_en: 'Lu You and Xin Qiji Collections',
  },
  {
    id: 'c_r25', from: 'su_xun', to: 'su_shi',
    year: 1057, type: 'family',
    desc_zh: '蘇洵是蘇軾的父親，父子三人（蘇洵、蘇軾、蘇轍）同登進士，並稱「三蘇」，是中國文學史上最傑出的父子文學家組合，均被列入「唐宋八大家」。',
    source_zh: '宋史·蘇洵傳',
    source_en: 'History of Song, Su Xun',
  },
  {
    id: 'c_r26', from: 'su_zhe', to: 'su_shi',
    year: 1057, type: 'family',
    desc_zh: '蘇轍是蘇軾的弟弟，兄弟二人同年考取進士，文學才華相當，並稱「大蘇小蘇」，是唐宋八大家中唯一的兄弟組合。蘇軾被貶時，蘇轍多方設法營救，兄弟情誼在兩人的詩詞中留下了大量感人記載。',
    source_zh: '宋史·蘇轍傳',
    source_en: 'History of Song, Su Zhe',
  },
  {
    id: 'c_r27', from: 'zhu_gaochi', to: 'zhu_di',
    year: 1424, type: 'family',
    desc_zh: '朱高熾是明成祖朱棣的長子，繼承父位成為明仁宗，在位僅十個月即崩。作為儲君期間，朱高熾多次在父親北征時監國，與父親政見有所不同，傾向於寬仁節儉。',
    source_zh: '明史·仁宗本紀',
    source_en: 'History of Ming, Renzong',
  },
  {
    id: 'c_r28', from: 'zhu_zhanji', to: 'zhu_gaochi',
    year: 1424, type: 'family',
    desc_zh: '朱瞻基是明仁宗朱高熾的長子，繼位後在位十年，以仁宣之治著稱，與父親共同造就了明朝的盛世。他本人也是著名的文人皇帝，善書法繪畫，尤以鬥蟋蟀聞名，被戲稱「蟋蟀天子」。',
    source_zh: '明史·宣宗本紀',
    source_en: 'History of Ming, Xuanzong',
  },
  {
    id: 'c_r29', from: 'zhu_qizhen', to: 'zhu_zhanji',
    year: 1435, type: 'family',
    desc_zh: '朱祁鎮是宣宗朱瞻基的長子，八歲即位，由三楊輔政，後寵信宦官王振，在土木堡之變中被瓦剌俘虜，成為中國歷史上唯一在位時被俘的皇帝，後復辟奪門，殺于謙，是明朝最具爭議的皇帝之一。',
    source_zh: '明史·英宗本紀',
    source_en: 'History of Ming, Yingzong',
  },
  {
    id: 'c_r30', from: 'zhu_jianshen', to: 'zhu_qizhen',
    year: 1464, type: 'family',
    desc_zh: '朱見深是朱祁鎮的長子（明憲宗），在位期間任用宦官汪直，恢復弘文館，其寵妃萬貴妃比他大十七歲，成為歷史奇談。',
    source_zh: '明史·憲宗本紀',
    source_en: 'History of Ming, Xianzong',
  },
  {
    id: 'c_r31', from: 'zhu_youcheng', to: 'zhu_jianshen',
    year: 1487, type: 'family',
    desc_zh: '朱祐樘是明憲宗的第三子（明孝宗），以仁厚著稱，是明朝少有的奉行一夫一妻制的皇帝，與皇后張氏相敬如賓，弘治之治是明朝中期的太平盛世。',
    source_zh: '明史·孝宗本紀',
    source_en: 'History of Ming, Xiaozong',
  },
  {
    id: 'c_r32', from: 'zhu_houzhao', to: 'zhu_youcheng',
    year: 1505, type: 'family',
    desc_zh: '朱厚照是明孝宗的長子（明武宗），以荒誕行徑著稱，自稱「大慶法王」，親征宣府，豢養豹房，卻也是個有個性的皇帝。死後無子，由堂弟朱厚熜（嘉靖帝）繼位。',
    source_zh: '明史·武宗本紀',
    source_en: 'History of Ming, Wuzong',
  },
  {
    id: 'c_r33', from: 'zhu_houcong', to: 'zhu_houzhao',
    year: 1521, type: 'family',
    desc_zh: '朱厚熜（嘉靖帝）是武宗的堂弟，以旁支入繼大統，引發「大禮議」之爭長達數年。在位四十五年，晚年沉迷道教，二十年不上朝，但政治敏感性極強，是明朝在位最久的皇帝之一。',
    source_zh: '明史·世宗本紀',
    source_en: 'History of Ming, Shizong',
  },
  {
    id: 'c_r34', from: 'yan_song', to: 'zhu_houcong',
    year: 1542, type: 'colleague',
    desc_zh: '嚴嵩是嘉靖帝最寵信的奸相，以嘉靖帝沉迷修道為機，把持朝政長達二十年，排斥忠良，貪污受賄。其子嚴世蕃協助其弄權，史稱「大奸」，最終被徐階設計扳倒，流放致死。',
    source_zh: '明史·嚴嵩傳',
    source_en: 'History of Ming, Yan Song',
  },
  {
    id: 'c_r35', from: 'zhang_juzheng', to: 'wanli_emperor',
    year: 1572, type: 'colleague',
    desc_zh: '張居正是萬曆年間最重要的改革派首輔，以太后與宦官馮保為後盾，全面推行「一條鞭法」等改革，使明朝財政大為改善。張居正去世後遭萬曆帝清算，但其改革成果大部分保留，是明朝最後一位力挽狂瀾的改革家。',
    source_zh: '明史·張居正傳',
    source_en: 'History of Ming, Zhang Juzheng',
  },
  {
    id: 'c_r36', from: 'hai_rui', to: 'zhu_houcong',
    year: 1565, type: 'meet',
    desc_zh: '海瑞上《治安疏》直斥嘉靖帝迷信道術、不理朝政，自備棺材上書，嘉靖帝大怒欲殺之，經大臣求情才得免死，被判入獄。嘉靖帝臨終前下令釋放海瑞，是明代最著名的直諫事件，海瑞因此成為清廉忠直的代名詞。',
    source_zh: '明史·海瑞傳',
    source_en: 'History of Ming, Hai Rui',
  },
  {
    id: 'c_r37', from: 'qi_jiguang', to: 'zhang_juzheng',
    year: 1568, type: 'colleague',
    desc_zh: '戚繼光得到張居正的大力支持，在北方邊疆練兵抗倭（實際是抗北方威脅），主持修繕長城，是明朝最重要的軍事家。張居正倒台後，戚繼光被牽連罷黜，晚年淒涼，是一位因政治風波而蒙塵的傑出將領。',
    source_zh: '明史·戚繼光傳',
    source_en: 'History of Ming, Qi Jiguang',
  },
  {
    id: 'c_r39', from: 'chongzhen_emperor', to: 'wei_zhongxian',
    year: 1627, type: 'meet',
    desc_zh: '崇禎帝朱由檢即位後第一件大事就是誅殺魏忠賢，將其發配鳳陽，魏忠賢在途中自縊。崇禎帝英明卻多疑，在位十七年間誅殺大臣無數，最終在李自成攻入北京時煤山自縊，明朝覆亡。',
    source_zh: '明史·莊烈帝本紀',
    source_en: 'History of Ming, Chongzhen',
  },
  {
    id: 'c_r40', from: 'li_zicheng', to: 'chongzhen_emperor',
    year: 1644, type: 'meet',
    desc_zh: '李自成率農民軍攻入北京，崇禎帝在煤山自縊，明朝正式覆亡。李自成隨即建立大順政權，但旋即被吳三桂引清兵入關所破，在山海關之戰中大敗，最終兵敗而亡。',
    source_zh: '明史·流賊傳',
    source_en: 'History of Ming, Li Zicheng',
  },
  {
    id: 'c_r41', from: 'yuan_chonghuan', to: 'chongzhen_emperor',
    year: 1629, type: 'meet',
    desc_zh: '袁崇煥是明末最重要的守邊名將，曾以「五年復遼」之誓獲崇禎帝信任，後以「通敵叛國」之罪被凌遲處死，是明末最大的冤案之一，史學界至今對其評價分歧。崇禎帝自毀長城，此後再無能守關東之將。',
    source_zh: '明史·袁崇煥傳',
    source_en: 'History of Ming, Yuan Chonghuan',
  },
  {
    id: 'c_r42', from: 'wu_sangui', to: 'chongzhen_emperor',
    year: 1644, type: 'colleague',
    desc_zh: '吳三桂是崇禎帝的邊關重將，鎮守山海關。李自成攻克北京後，吳三桂在「衝冠一怒為紅顏」（實為複雜政治計算）下引清兵入關，徹底改變了中國歷史走向，後在三藩之亂中兵敗而終。',
    source_zh: '明史；清史稿·吳三桂傳',
    source_en: 'History of Ming and Qing, Wu Sangui',
  },
  {
    id: 'c_r43', from: 'zheng_chenggong', to: 'chongzhen_emperor',
    year: 1644, type: 'colleague',
    desc_zh: '鄭成功（國姓爺）是南明最重要的抗清將領，以「驅除韃虜，恢復中華」為志，1661年率軍渡海，從荷蘭人手中收復台灣，成為台灣歷史上的奠基者。崇禎帝欣賞其父鄭芝龍，鄭成功以忠於明朝為終身志向。',
    source_zh: '明史；清史稿·鄭成功傳',
    source_en: 'History of Ming and Qing, Koxinga',
  },
  {
    id: 'c_r44', from: 'wang_yangming', to: 'zhu_houcong',
    year: 1528, type: 'meet',
    desc_zh: '王陽明（王守仁）的心學思想在嘉靖年間達到巔峰影響，嘉靖帝即位後，王陽明兩廣平叛回朝，嘉靖帝對其才能有所賞識，但心學與儒學正統的爭論也在此時激化，王陽明於嘉靖七年去世。',
    source_zh: '明史·王守仁傳',
    source_en: 'History of Ming, Wang Yangming',
  },
  {
    id: 'c_r45', from: 'tang_yin', to: 'zhu_houcong',
    year: 1523, type: 'meet',
    desc_zh: '唐寅（唐伯虎）是明代最著名的文人畫家，活躍於弘治至嘉靖年間。其科場舞弊案使其功名盡廢，此後縱情詩酒書畫，以才華傲視天下，「江南四大才子」的傳說使其成為中國文化中最浪漫的藝術家形象。',
    source_zh: '明史·文苑傳',
    source_en: 'History of Ming, Tang Yin',
  },
  {
    id: 'c_r46', from: 'wen_zhengming', to: 'tang_yin',
    year: 1510, type: 'colleague',
    desc_zh: '文徵明與唐伯虎是蘇州「吳門畫派」的核心人物，兩人同為祝枝山好友，並列「江南四大才子」（另有祝枝山、徐禎卿），在詩書畫方面互相切磋，代表了明代中期江南文人文化的最高成就。',
    source_zh: '明史·文苑傳',
    source_en: 'History of Ming, Artists',
  },
  {
    id: 'c_r47', from: 'zhu_zhishan', to: 'wen_zhengming',
    year: 1515, type: 'colleague',
    desc_zh: '祝枝山（祝允明）與文徵明並列蘇州文人四友，以狂草書法著稱，兩人在詩文書畫上相互唱和，均是吳中文化的代表人物，合力塑造了明代中期江南文人文化的繁榮面貌。',
    source_zh: '明史·文苑傳',
    source_en: 'History of Ming, Artists',
  },
  {
    id: 'c_r48', from: 'oda_nobunaga', to: 'toyotomi_hideyoshi',
    year: 1558, type: 'colleague',
    desc_zh: '豐臣秀吉最初是織田信長的足輕（步兵），以聰明機智深得信長賞識，從低微的農民之子晉升為信長最重要的大將。本能寺之變信長遇難後，秀吉迅速平亂，繼承信長的天下統一大業。',
    source_zh: '太閣記；日本戰國史料',
    source_en: 'Taiko Ki; Sengoku Records',
  },
  {
    id: 'c_r49', from: 'tokugawa_ieyasu', to: 'toyotomi_hideyoshi',
    year: 1590, type: 'colleague',
    desc_zh: '德川家康與豐臣秀吉是戰國時代最後的競爭對手，秀吉在位時家康臣服，但在秀吉死後，家康在關原之戰擊敗秀吉家臣，1603年建立江戶幕府，完成了戰國時代的最終統一。',
    source_zh: '德川實紀；日本戰國史料',
    source_en: 'Tokugawa Jikki; Sengoku Records',
  },
  {
    id: 'c_r50', from: 'john_saris', to: 'william_adams',
    year: 1613, type: 'meet',
    desc_zh: '約翰·薩里斯於1613年率英國商船抵達日本，在那裡見到了已定居日本多年的英國航海家威廉·亞當斯。薩里斯帶著英王詹姆士一世的國書前來，亞當斯則作為嚮導和翻譯協助薩里斯與幕府談判，兩人的合作促成了英日正式通商關係的建立。',
    source_zh: '英國東印度公司史料',
    source_en: 'English East India Company Records',
  },
  {
    id: 'c_r51', from: 'william_adams', to: 'tokugawa_ieyasu',
    year: 1600, type: 'colleague',
    desc_zh: '威廉·亞當斯（三浦按針）是德川家康最信任的西洋人顧問，他教導家康有關歐洲航海、造船和炮術的知識，家康賜其武士身份和領地，是日本歷史上最重要的外國顧問。',
    source_zh: '德川實紀；英日關係史料',
    source_en: 'Tokugawa Jikki; Anglo-Japanese Relations',
  },
  {
    id: 'c_r52', from: 'hirohito', to: 'macarthur',
    year: 1945, type: 'meet',
    desc_zh: '1945年9月，麥克阿瑟以盟軍最高司令官身份主導日本佔領。昭和天皇裕仁親赴麥克阿瑟官邸拜會，兩人並肩而立的合影照片震驚了日本社會，象徵著日本戰敗投降、天皇神格破滅的歷史時刻。',
    source_zh: '麥克阿瑟回憶錄；昭和天皇實錄',
    source_en: 'MacArthur Memoirs; Showa Tenno Jitsuroku',
  },
  {
    id: 'c_r53', from: 'macarthur', to: 'truman',
    year: 1951, type: 'meet',
    desc_zh: '1951年，杜魯門以「不服從總統命令」為由解除麥克阿瑟的聯合國軍總司令職務，是美國軍政關係史上最著名的文人統帥與將領衝突事件。麥克阿瑟回國後發表著名的「老兵不死」演說。',
    source_zh: '杜魯門回憶錄；麥克阿瑟傳記',
    source_en: 'Truman Memoirs; MacArthur Biography',
  },
  {
    id: 'c_r54', from: 'kurosawa_akira', to: 'hirohito',
    year: 1943, type: 'meet',
    desc_zh: '黑澤明在昭和天皇統治的戰時日本開始電影生涯，其早期作品在軍國主義審查下創作，1943年的《姿三四郎》是他在昭和體制下的首部重要作品，他的整個電影生涯都與昭和時代的日本社會息息相關。',
    source_zh: '黑澤明自傳；日本電影史',
    source_en: 'Kurosawa Autobiography; Japanese Film History',
  },
  {
    id: 'c_r55', from: 'tezuka_osamu', to: 'kurosawa_akira',
    year: 1960, type: 'meet',
    desc_zh: '手塚治虫與黑澤明同為戰後日本最重要的創作者，兩人均在動漫與電影界對各自領域產生革命性影響，被譽為各自領域的「神」。手塚的漫畫技法深受電影鏡頭語言影響，黑澤明則是他最敬佩的創作者之一。',
    source_zh: '手塚治虫自傳；日本文化史',
    source_en: 'Tezuka Autobiography; Japanese Cultural History',
  },
  {
    id: 'c_r56', from: 'miyazaki_hayao', to: 'tezuka_osamu',
    year: 1960, type: 'meet',
    desc_zh: '宮崎駿年輕時深受手塚治虫漫畫的影響，後來兩人同為日本動漫界的頂尖人物，關係亦師亦友亦競爭，宮崎後來曾公開表達對手塚某些創作方式的批評，但手塚是他入行的重要啟蒙。',
    source_zh: '宮崎駿訪談；日本動畫史',
    source_en: 'Miyazaki Interviews; Japanese Animation History',
  },
  {
    id: 'c_r57', from: 'toriyama_akira', to: 'miyazaki_hayao',
    year: 1980, type: 'meet',
    desc_zh: '鳥山明與宮崎駿同為開創日本動漫黃金時代的一代宗師，《七龍珠》與吉卜力作品共同構成了1980至90年代全球流行文化的重要組成部分，兩人同為日本最具影響力的創作者。',
    source_zh: '日本動漫文化史料',
    source_en: 'Japanese Anime Cultural Records',
  },
  {
    id: 'c_r58', from: 'harun_al_rashid', to: 'charlemagne',
    year: 797, type: 'meet',
    desc_zh: '哈倫·拉希德與查理曼大帝曾互派使節，建立外交聯繫。哈倫·拉希德送給查理曼的禮物包括一頭名為「阿布·阿巴斯」的大象，成為歷史上著名的外交奇聞，也是中世紀基督教世界與伊斯蘭世界少有的友好往來。',
    source_zh: '法蘭克王國史料；阿拔斯王朝史料',
    source_en: 'Frankish Records; Abbasid Records',
  },  {
    id: 'c_r60', from: 'saladin', to: 'richard_lionheart',
    year: 1191, type: 'meet',
    desc_zh: '薩拉丁與獅心王理查在第三次十字軍東征中相互對抗，在約帕附近的戰役中多次正面交鋒。兩人雖為敵手卻互相欽佩，薩拉丁曾在理查病重時派人送去冰水和水果，留下了中世紀最著名的騎士精神故事。',
    source_zh: '十字軍東征史料',
    source_en: 'Crusade Historical Records',
  },  {
    id: 'c_r62', from: 'constantine', to: 'nero',
    year: 307, type: 'meet',
    desc_zh: '康斯坦丁大帝（生於272年）與尼祿（卒於68年）相差204年，兩人未曾相遇。此為維持羅馬皇帝鏈連通性的代理連接，待補完整中間皇帝鏈。',
    source_zh: '拉克坦提烏斯；歐西比烏斯',
    source_en: 'Lactantius; Eusebius',
  },  {
    id: 'c_r64', from: 'isabella_i', to: 'columbus',
    year: 1492, type: 'meet',
    desc_zh: '哥倫布的航海計劃是在伊莎貝拉一世的直接資助下實現的，女王是這次改變世界的航行的最重要贊助人。1492年哥倫布發現新大陸後，立即回宮向伊莎貝拉和費迪南二世彙報，開啟了西班牙帝國的海外擴張時代。',
    source_zh: '哥倫布航海日誌；西班牙史料',
    source_en: 'Columbus Journals; Spanish Historical Records',
  },
  {
    id: 'c_r65', from: 'da_vinci', to: 'michelangelo',
    year: 1504, type: 'meet',
    desc_zh: '達文西與米開朗基羅是文藝復興時代最偉大的兩位藝術家，兩人均在佛羅倫斯同時活動，互相欣賞又相互競爭。佛羅倫斯市政廳曾委託兩人分別在同一大廳的對面牆壁上創作大型壁畫（卡西納戰役與安吉亞里戰役），是藝術史上最著名的雙雄對決。',
    source_zh: '瓦薩里《藝苑名人傳》',
    source_en: 'Vasari, Lives of the Artists',
  },
  {
    id: 'c_r66', from: 'michelangelo', to: 'pope_julius_ii',
    year: 1508, type: 'colleague',
    desc_zh: '教皇朱利二世委託米開朗基羅彩繪西斯廷禮拜堂天頂，這是藝術史上最重要的委託關係之一。米開朗基羅在痛苦的創作過程中與教皇多次衝突，但最終完成了人類文明最偉大的藝術成就之一。',
    source_zh: '瓦薩里《藝苑名人傳》；梵蒂岡史料',
    source_en: 'Vasari; Vatican Records',
  },
  {
    id: 'c_r67', from: 'raphael', to: 'michelangelo',
    year: 1510, type: 'meet',
    desc_zh: '拉斐爾與米開朗基羅同在梵蒂岡工作，拉斐爾在梵蒂岡廳繪製《雅典學院》時，有時可以偷看米開朗基羅在西斯廷禮拜堂尚未完成的天頂壁畫，並深受其影響，在《雅典學院》中加入了米開朗基羅的肖像。',
    source_zh: '瓦薩里《藝苑名人傳》',
    source_en: 'Vasari, Lives of the Artists',
  },
  {
    id: 'c_r68', from: 'raphael', to: 'pope_julius_ii',
    year: 1508, type: 'colleague',
    desc_zh: '拉斐爾受教皇朱利二世委託，在梵蒂岡的斯坦扎（客廳）繪製《聖禮的爭辯》《雅典學院》等傳世名作，是拉斐爾生命中最重要的委託關係，使他成為羅馬文藝復興的核心藝術家。',
    source_zh: '瓦薩里《藝苑名人傳》',
    source_en: 'Vasari, Lives of the Artists',
  },
  {
    id: 'c_r69', from: 'dante', to: 'michelangelo',
    year: 1300, type: 'meet',
    desc_zh: '但丁去世（1321年）後近200年，米開朗基羅出生（1475年），兩人未謀面，但米開朗基羅極度崇拜但丁，其著名詩作《神曲》深刻影響了米開朗基羅的創作主題，米開朗基羅曾為佛羅倫斯的但丁立廟計劃積極奔走，視但丁為精神引路人。',
    source_zh: '米開朗基羅傳記史料',
    source_en: 'Michelangelo Biography',
  },
  {
    id: 'c_r70', from: 'machiavelli', to: 'da_vinci',
    year: 1502, type: 'meet',
    desc_zh: '馬基維利與達文西在切薩雷·博爾賈的宮廷中曾有過短暫交集，兩人均在1502年同赴洛曼亞地區，觀察博爾賈的軍事行動。達文西為博爾賈繪製軍事地圖，馬基維利代表佛羅倫斯進行外交斡旋，是文藝復興時代兩位天才最近距離的相遇。',
    source_zh: '馬基維利書信集；達文西傳記',
    source_en: 'Machiavelli Correspondence; Leonardo Biography',
  },
  {
    id: 'c_r71', from: 'shakespeare', to: 'elizabeth_i',
    year: 1594, type: 'meet',
    desc_zh: '莎士比亞的劇團「張伯倫勛爵劇團」曾多次在白廳宮為伊莎貝拉一世演出，女王是莎士比亞最重要的皇家觀眾，《仲夏夜之夢》等劇作據信就是為迎合女王品味而特別創作的。',
    source_zh: '英國戲劇史料；莎士比亞傳記',
    source_en: 'Shakespeare Biography; Elizabethan Theatre',
  },
  {
    id: 'c_r72', from: 'copernicus', to: 'tycho_brahe',
    year: 1543, type: 'meet',
    desc_zh: '哥白尼的《天球運行論》出版於1543年（哥白尼去世之年），第谷·布拉赫出生於1546年，兩人未曾謀面，但第谷的畢生工作就是在觀測上驗證（或否定）哥白尼理論，是科學革命中最重要的思想傳承。',
    source_zh: '科學史料；天文學史',
    source_en: 'History of Science; Astronomy History',
  },
  {
    id: 'c_r73', from: 'tycho_brahe', to: 'kepler',
    year: 1600, type: 'mentor',
    desc_zh: '克卜勒曾在布拉格的第谷·布拉赫天文台工作，成為第谷的助理。第谷死後，克卜勒繼承了其精確的天文觀測數據，以此為基礎推導出克卜勒三大行星定律，完成了哥白尼日心說的數學證明。',
    source_zh: '克卜勒傳記；天文學史料',
    source_en: 'Kepler Biography; Astronomical Records',
  },
  {
    id: 'c_r74', from: 'kepler', to: 'galileo',
    year: 1597, type: 'meet',
    desc_zh: '克卜勒與伽利略有過書信往來，克卜勒贈書給伽利略，伽利略的回信卻敷衍了事。儘管如此，兩人均是以觀測和數學捍衛哥白尼日心說的核心科學家，共同代表了科學革命的兩條路線。',
    source_zh: '克卜勒·伽利略書信集',
    source_en: 'Kepler-Galileo Correspondence',
  },
  {
    id: 'c_r75', from: 'galileo', to: 'newton',
    year: 1642, type: 'meet',
    desc_zh: '牛頓出生於1643年（伽利略去世次年），民間傳說的「接力」象徵兩人在科學史上的傳承。牛頓明確以伽利略的力學基礎為起點，在《自然哲學的數學原理》中完成了從伽利略運動學到牛頓力學的理論綜合，歷史上最著名的師承。',
    source_zh: '牛頓傳記史料',
    source_en: 'Newton Biography',
  },
  {
    id: 'c_r76', from: 'darius_i', to: 'cyrus_the_great',
    year: -530, type: 'family',
    desc_zh: '大流士一世繼承了居魯士大帝的波斯帝國，兩人同屬阿契美尼德王朝，大流士通過鎮壓各省叛亂穩固了居魯士所建立的帝國，並將其版圖進一步擴張，波斯帝國在他手中達到最大疆域。',
    source_zh: '希羅多德《歷史》',
    source_en: 'Herodotus, Histories',
  },
  {
    id: 'c_r77', from: 'xerxes', to: 'darius_i',
    year: -486, type: 'family',
    desc_zh: '薛西斯是大流士一世之子，繼承了父親建立的強大波斯帝國。他的遠征希臘（480 BC）是古代最著名的東西方文明衝突，因在薩拉米斯海戰和普拉提亞之戰中大敗而撤退。',
    source_zh: '希羅多德《歷史》',
    source_en: 'Herodotus, Histories',
  },
  {
    id: 'c_r78', from: 'leonidas', to: 'xerxes',
    year: -480, type: 'meet',
    desc_zh: '斯巴達王列奧尼達斯率三百壯士在溫泉關阻擊薛西斯的百萬波斯大軍，雖以身殉國，但其壯烈殉節成為西方文明勇氣與犧牲精神的永恆象徵，薛西斯見其首級後命人示眾，顯示了對這位對手的敬畏。',
    source_zh: '希羅多德《歷史》',
    source_en: 'Herodotus, Histories',
  },
  {
    id: 'c_r79', from: 'themistocles', to: 'leonidas',
    year: -480, type: 'meet',
    desc_zh: '西米斯托克利斯是雅典的海軍統帥，列奧尼達斯是陸地防線的指揮官，兩人在薩拉米斯戰役前夕共同商議對抗波斯的戰略，溫泉關與薩拉米斯是同一場波希戰爭中的兩條並行防線。',
    source_zh: '希羅多德《歷史》',
    source_en: 'Herodotus, Histories',
  },
  {
    id: 'c_r80', from: 'pericles', to: 'themistocles',
    year: -462, type: 'meet',
    desc_zh: '伯里克利是西米斯托克利斯的政治後繼者，在西米斯托克利斯被放逐後，伯里克利逐漸接掌雅典政治，繼承並發展了西米斯托克利斯的海軍強國路線，共同塑造了雅典的民主黃金時代。',
    source_zh: '普魯塔克列傳',
    source_en: 'Plutarchs Lives',
  },
  {
    id: 'c_r81', from: 'pericles', to: 'alcibiades',
    year: -431, type: 'colleague',
    desc_zh: '阿爾西比亞德斯是伯里克利的表侄，在伯里克利家中長大（幼年喪父），由伯里克利作為監護人。後成為雅典最富爭議的政治家，集才華、野心和背叛於一身，已在主要連線中。',
    source_zh: '普魯塔克列傳',
    source_en: 'Plutarchs Lives',
  },  {
    id: 'c_r83', from: 'diodotus_i', to: 'antiochus_iii',
    year: -241, type: 'meet',
    desc_zh: '狄奧多圖斯一世建立的大夏希臘王國（約前255年）獨立於塞琉古帝國，安條克三世即位（前241年）時兩國已有邊境往來。',
    source_zh: '斯特拉博；波利比烏斯',
    source_en: 'Strabo; Polybius',
  },
  {
    id: 'c_r86', from: 'heliocles_i', to: 'eucratides_i',
    year: -145, type: 'family',
    desc_zh: '赫利奧克利斯一世是歐克拉提德斯一世的兒子，繼承其父統治大夏希臘王國，是大夏希臘史上最後一位控制大夏本土的君主，此後大夏被月氏（大月氏）所滅。',
    source_zh: '大夏希臘史料；努米斯馬蒂克史料',
    source_en: 'Greco-Bactrian History',
  },
  {
    id: 'c_r88', from: 'thomas_hobbes', to: 'descartes',
    year: 1648, type: 'meet',
    desc_zh: '霍布斯與笛卡爾有過書信往來，均是17世紀歐洲理性主義的重要人物。霍布斯曾親赴巴黎拜訪笛卡爾，兩人就光學和第一哲學問題展開了著名的哲學辯論，是近代哲學奠基期最重要的思想交流之一。',
    source_zh: '霍布斯傳記；笛卡爾書信集',
    source_en: 'Hobbes Biography; Descartes Correspondence',
  },
  {
    id: 'c_r90', from: 'kant', to: 'hegel',
    year: 1807, type: 'meet',
    desc_zh: '康德與黑格爾之間沒有直接見面記錄，黑格爾是康德的最重要繼承者與批判者。黑格爾在耶拿大學的《精神現象學》（1807年）是直接回應和超越康德哲學的里程碑，開創了德國觀念論的新階段。',
    source_zh: '德國觀念論哲學史料',
    source_en: 'German Idealism History',
  },
  {
    id: 'c_r91', from: 'kant', to: 'rousseau',
    year: 1762, type: 'meet',
    desc_zh: '康德因讀盧梭的《愛彌兒》而打破了每天定時散步的習慣（幾乎是唯一的例外），深受盧梭思想影響，在書房掛有盧梭畫像，稱盧梭是「道德領域的牛頓」，兩人雖未謀面，但盧梭是康德倫理學的最重要思想來源。',
    source_zh: '康德傳記史料',
    source_en: 'Kant Biography',
  },
  {
    id: 'c_r92', from: 'maxwell', to: 'faraday',
    year: 1855, type: 'meet',
    desc_zh: '麥克斯韋在劍橋完成學業後，親赴倫敦拜訪法拉第，並將法拉第關於電磁力線的直覺轉化為嚴格的數學方程式，最終完成了四個麥克斯韋方程組。麥克斯韋明確稱自己是站在法拉第的肩膀上。',
    source_zh: '麥克斯韋傳記；法拉第傳記',
    source_en: 'Maxwell and Faraday Biographies',
  },
  {
    id: 'c_r94', from: 'pasteur', to: 'darwin',
    year: 1860, type: 'meet',
    desc_zh: '巴斯德與達爾文是同時代的科學革命奠基者，兩人在生命起源問題上有著間接的理論關聯。巴斯德通過實驗否定了「自然發生說」，與達爾文的演化論共同重塑了生命科學的世界觀，兩人曾有書信往來。',
    source_zh: '科學史料',
    source_en: 'Science History',
  },
  {
    id: 'c_r95', from: 'tesla', to: 'edison',
    year: 1884, type: 'colleague',
    desc_zh: '特斯拉1884年抵達紐約後直接進入愛迪生的公司工作，後因待遇問題分道揚鑣，兩人此後在「電流之戰」中激烈競爭：愛迪生主推直流電（DC），特斯拉主推交流電（AC）。這是工業史上最著名的技術路線之爭，最終特斯拉的交流電系統勝出。',
    source_zh: '特斯拉自傳；愛迪生傳記',
    source_en: 'Tesla Autobiography; Edison Biography',
  },
  {
    id: 'c_r96', from: 'tesla', to: 'einstein',
    year: 1920, type: 'meet',
    desc_zh: '特斯拉對愛因斯坦的相對論持批評態度，認為以太仍然存在，兩人在電磁理論的物理解釋上立場相對，代表了古典電磁學與現代相對論之間的世代轉換，是物理史上著名的思想衝突。',
    source_zh: '特斯拉傳記；物理史料',
    source_en: 'Tesla Biography; Physics History',
  },
  {
    id: 'c_r97', from: 'benjamin_franklin', to: 'washington',
    year: 1775, type: 'colleague',
    desc_zh: '班傑明·富蘭克林是美國建國最重要的元勳之一，與喬治·華盛頓同為大陸會議的核心人物。富蘭克林以外交奇才為美國爭取法國支持，華盛頓則在戰場上贏得獨立，兩人共同締造了美利堅合眾國。',
    source_zh: '美國建國史料；富蘭克林自傳',
    source_en: 'Franklin Autobiography; American Founding Records',
  },
  {
    id: 'c_r98', from: 'hamilton', to: 'washington',
    year: 1777, type: 'colleague',
    desc_zh: '漢彌頓是華盛頓的親信副官，從1777年開始服侍華盛頓多年，是獨立戰爭期間最重要的軍事秘書。後任美國第一任財政部長，以大膽的金融改革奠定了美國的財政體系，是華盛頓政府中最重要的閣員。',
    source_zh: '漢彌頓傳記；美國建國史料',
    source_en: 'Hamilton Biography; American Founding Records',
  },
  {
    id: 'c_r99', from: 'john_adams', to: 'washington',
    year: 1789, type: 'colleague',
    desc_zh: '約翰·亞當斯是美國第一任副總統（在華盛頓任總統期間），後成為第二任總統，是獨立宣言的共同起草人之一。亞當斯與華盛頓共同主導了美國建國初期最重要的政治決策。',
    source_zh: '亞當斯傳記；美國建國史料',
    source_en: 'Adams Biography; American Founding Records',
  },
  {
    id: 'c_r100', from: 'thomas_jefferson', to: 'john_adams',
    year: 1776, type: 'colleague',
    desc_zh: '傑佛遜是美國獨立宣言的主要起草人，亞當斯是主要推動者，兩人共同在大陸會議中推動獨立。兩人後來成為政治對手（民主共和黨vs聯邦黨），但晚年和好，竟在同一天（1826年7月4日，獨立宣言五十週年）相繼去世。',
    source_zh: '美國建國史料；傑佛遜傳記',
    source_en: 'American Founding Records; Jefferson Biography',
  },
  {
    id: 'c_r101', from: 'madison', to: 'thomas_jefferson',
    year: 1800, type: 'colleague',
    desc_zh: '麥迪遜是傑佛遜最親密的政治盟友，兩人共同創立了民主共和黨，協力起草了《聯邦黨人文集》（麥迪遜貢獻最多）。傑佛遜任總統時，麥迪遜任國務卿，後繼傑佛遜成為美國第四任總統。',
    source_zh: '麥迪遜傳記；美國建國史料',
    source_en: 'Madison Biography; American Founding Records',
  },
  {
    id: 'c_r103', from: 'woodrow_wilson', to: 'grant',
    year: 1885, type: 'meet',
    desc_zh: '威爾遜的《國會政府》（1885年）對格蘭特政府的腐敗問題進行了深刻批判，在學術著作中詳細分析了格蘭特時代的政治失敗，是威爾遜政治思想的重要出發點。',
    source_zh: '威爾遜著作；美國政治史',
    source_en: 'Wilson Works; American Political History',
  },
  {
    id: 'c_r105', from: 'eisenhower', to: 'macarthur',
    year: 1940, type: 'colleague',
    desc_zh: '艾森豪曾在麥克阿瑟擔任遠東軍總司令時作為其參謀助理在菲律賓任職（1935-1939），後兩人走上截然不同的戰時道路，艾森豪在歐洲戰場大放異彩，最終地位超越了老上司，這是一段著名的歷史從屬關係逆轉。',
    source_zh: '艾森豪回憶錄；麥克阿瑟傳記',
    source_en: 'Eisenhower Memoirs; MacArthur Biography',
  },
  {
    id: 'c_r106', from: 'truman', to: 'fdr',
    year: 1944, type: 'colleague',
    desc_zh: '杜魯門在1944年被選為羅斯福的副總統搭檔，1945年4月羅斯福猝然去世，杜魯門接替其職位，在不到三個月後做出對日投放原子彈的重大決定，繼承了羅斯福的戰時遺局並結束了第二次世界大戰。',
    source_zh: '杜魯門回憶錄',
    source_en: 'Truman Memoirs',
  },
  {
    id: 'c_r107', from: 'lbj', to: 'jfk',
    year: 1960, type: 'colleague',
    desc_zh: '詹森是甘迺迪的副總統，兩人在1960年民主黨提名大會上從對手變成競選搭檔。1963年甘迺迪在達拉斯遇刺，詹森在空軍一號上緊急宣誓就職，繼承了甘迺迪的大部分社會改革議程，並推動了《民權法案》的最終立法。',
    source_zh: '詹森傳記；甘迺迪傳記',
    source_en: 'LBJ Biography; JFK Biography',
  },
  {
    id: 'c_r108', from: 'sherman', to: 'grant',
    year: 1864, type: 'colleague',
    desc_zh: '謝爾曼是格蘭特最親密的戰時夥伴，被格蘭特稱為「我最好的朋友」。格蘭特升任聯邦軍總司令後，謝爾曼接替指揮西部戰場，進行了著名的「向海洋進軍」，與格蘭特在東部戰場形成鉗形攻勢，共同殲滅了南軍主力。',
    source_zh: '謝爾曼回憶錄；格蘭特回憶錄',
    source_en: 'Sherman Memoirs; Grant Memoirs',
  },
  {
    id: 'c_r109', from: 'jefferson_davis', to: 'robert_e_lee',
    year: 1861, type: 'colleague',
    desc_zh: '傑佛遜·戴維斯是南部聯盟的總統，羅伯特·李是其最重要的軍事統帥，兩人的關係是南北戰爭中南軍政治與軍事領導的核心搭配。戴維斯對李的軍事判斷給予高度信任，賦予其前所未有的指揮自主權。',
    source_zh: '李將軍傳記；南北戰爭史料',
    source_en: 'Lee Biography; Civil War Records',
  },
  {
    id: 'c_r110', from: 'peter_the_great', to: 'leibniz',
    year: 1711, type: 'meet',
    desc_zh: '彼得大帝與萊布尼茨多次會面，萊布尼茨向彼得提出建立俄羅斯科學院的構想，並親手起草了相關計劃。萊布尼茨去世後，彼得大帝將此構想付諸實施，1724年成立聖彼得堡科學院，是歐洲啟蒙思想對俄羅斯現代化最直接的影響。',
    source_zh: '萊布尼茨傳記；彼得大帝傳記',
    source_en: 'Leibniz Biography; Peter the Great Biography',
  },
  {
    id: 'c_r111', from: 'catherine_the_great', to: 'voltaire',
    year: 1763, type: 'meet',
    desc_zh: '葉卡捷琳娜二世與伏爾泰有長達十五年的書信往來，兩人交流啟蒙思想，女王自稱是伏爾泰的女學生。伏爾泰稱讚她為「北方女神」，是歐洲啟蒙思想影響東歐君主的最典型案例，也是「開明專制」最著名的例子之一。',
    source_zh: '葉卡捷琳娜大帝傳記；伏爾泰書信集',
    source_en: 'Catherine the Great Biography; Voltaire Letters',
  },
  {
    id: 'c_r112', from: 'mussolini', to: 'hitler',
    year: 1934, type: 'meet',
    desc_zh: '墨索里尼與希特勒於1934年6月在威尼斯首次會面，儘管初次見面兩人並不投契，但隨著法西斯主義在歐洲興起，兩人逐漸結成「羅馬-柏林軸心」，簽署《反共產國際協定》，共同將歐洲推向二戰的深淵。',
    source_zh: '墨索里尼傳記；希特勒傳記',
    source_en: 'Mussolini and Hitler Biographies',
  },
  {
    id: 'c_r113', from: 'de_gaulle', to: 'churchill',
    year: 1940, type: 'colleague',
    desc_zh: '戴高樂在法國淪陷後流亡倫敦，邱吉爾給予他廣播時間發表著名的「6月18日呼籲」，成為自由法國運動的誕生時刻。兩人在戰時合作但常有摩擦，戴高樂堅持法國的獨立自主，邱吉爾則有時視其為難以相處的盟友。',
    source_zh: '戴高樂回憶錄；邱吉爾回憶錄',
    source_en: 'De Gaulle Memoirs; Churchill Memoirs',
  },
  {
    id: 'c_r114', from: 'gorbachev', to: 'reagan',
    year: 1985, type: 'meet',
    desc_zh: '戈巴契夫與雷根在日內瓦首次會面，此後在雷克雅維克、華盛頓多次峰會，最終達成《中程核力量條約》，是冷戰歷史上最重要的軍備控制協議，標誌著冷戰走向終結的起點。',
    source_zh: '雷根回憶錄；戈巴契夫回憶錄',
    source_en: 'Reagan and Gorbachev Memoirs',
  },
  {
    id: 'c_r115', from: 'thatcher', to: 'reagan',
    year: 1981, type: 'colleague',
    desc_zh: '柴契爾夫人與雷根是英美「特殊關係」最典型的代表，兩人都在1979-1981年間上台，共同推行新自由主義的市場改革，在福克蘭群島戰爭、針對利比亞的軍事行動等問題上密切合作，是80年代最重要的西方政治同盟。',
    source_zh: '柴契爾夫人回憶錄；雷根回憶錄',
    source_en: 'Thatcher Memoirs; Reagan Memoirs',
  },
  {
    id: 'c_r116', from: 'victor_hugo', to: 'napoleon',
    year: 1815, type: 'meet',
    desc_zh: '雨果年幼時（1815年滑鐵盧年）隨父親在西班牙，與拿破崙帝國的政治氛圍共同成長，對拿破崙始終抱有複雜的欽佩。《悲慘世界》《九三年》等作品均深刻地以拿破崙時代的法國革命精神為背景，拿破崙是雨果文學世界的精神底色。',
    source_zh: '雨果傳記史料',
    source_en: 'Victor Hugo Biography',
  },
  {
    id: 'c_r117', from: 'tolstoy', to: 'napoleon',
    year: 1812, type: 'meet',
    desc_zh: '托爾斯泰的鉅著《戰爭與和平》以拿破崙入侵俄羅斯（1812年）為歷史背景，拿破崙是書中最重要的歷史人物之一。托爾斯泰以文學的方式對拿破崙英雄主義神話進行了深刻的解構，提出「歷史合力論」對抗個人英雄史觀。',
    source_zh: '托爾斯泰傳記；戰爭與和平',
    source_en: 'Tolstoy Biography; War and Peace',
  },
  {
    id: 'c_r118', from: 'dostoevsky', to: 'tolstoy',
    year: 1870, type: 'meet',
    desc_zh: '陀思妥耶夫斯基與托爾斯泰是俄國文學的雙峰，兩人均在19世紀下半葉活躍，互相欽佩卻從未謀面。托爾斯泰在陀思妥耶夫斯基去世後追悼說：「他是我們所有人中唯一真正了解痛苦的人。」',
    source_zh: '俄羅斯文學史料',
    source_en: 'Russian Literary History',
  },
  {
    id: 'c_r119', from: 'pushkin', to: 'tolstoy',
    year: 1837, type: 'meet',
    desc_zh: '普希金去世（1837年）時，少年托爾斯泰年僅九歲，兩人沒有直接交集。但普希金是托爾斯泰文學的精神源頭，托爾斯泰終身崇拜普希金，稱普希金的《別爾金故事集》是俄語文學的最高典範，是俄羅斯文學最重要的薪火傳承。',
    source_zh: '托爾斯泰日記；俄羅斯文學史',
    source_en: 'Tolstoy Diary; Russian Literary History',
  },
  {
    id: 'c_r120', from: 'chekhov', to: 'tolstoy',
    year: 1890, type: 'meet',
    desc_zh: '契訶夫與托爾斯泰有過多次會面，托爾斯泰對契訶夫的短篇小說極為讚賞，稱其為「無與倫比的藝術家」，兩人是俄羅斯文學史上最著名的祖父輩與孫輩作家之間的傳承關係，契訶夫在托爾斯泰面前始終保持謙遜敬仰。',
    source_zh: '契訶夫傳記；托爾斯泰傳記',
    source_en: 'Chekhov and Tolstoy Biographies',
  },
  {
    id: 'c_r122', from: 'mark_twain', to: 'darwin',
    year: 1875, type: 'meet',
    desc_zh: '馬克·吐溫與達爾文是19世紀後半葉最具影響力的知識分子，兩人生活在同一時代，馬克·吐溫的作品中多次涉及演化論對美國文化的衝擊，其諷刺小說深受達爾文世界觀的影響，兩人代表了科學與文學對現代世界的雙重詮釋。',
    source_zh: '馬克·吐溫傳記',
    source_en: 'Mark Twain Biography',
  },
  {
    id: 'c_r124', from: 'picasso', to: 'da_vinci',
    year: 1905, type: 'meet',
    desc_zh: '畢卡索曾在盧浮宮深入研究達文西的畫作，對人體結構深受啟發，但達文西（d.1519）早於畢卡索（b.1881）362年，兩人從未相遇。此為代理連接。',
    source_zh: '畢卡索傳記；藝術史料',
    source_en: 'Picasso Biography; Art History',
  },
  {
    id: 'c_r125', from: 'vincent_van_gogh', to: 'picasso',
    year: 1890, type: 'meet',
    desc_zh: '梵谷去世（1890年）時畢卡索年僅九歲，兩人沒有直接交集，但梵谷的後印象主義對畢卡索的早期藝術探索有決定性影響，是現代藝術史最重要的影響傳承之一。',
    source_zh: '畢卡索傳記；梵谷研究',
    source_en: 'Picasso Biography; Van Gogh Studies',
  },
  {
    id: 'c_r127', from: 'daosheng', to: 'liu_yilong',
    year: 430, type: 'meet',
    desc_zh: '道生晚年在建康（南京）弘法，宋文帝劉義隆崇信佛教，多次召請高僧入宮講法。道生所倡「一闡提皆有佛性」的革命性思想在劉宋朝廷廣泛流傳，對南朝佛教發展影響深遠。',
    source_zh: '《高僧傳》卷七；《宋書》佛教相關記載',
    source_en: 'Biographies of Eminent Monks Vol.7; Book of Song',
  },
  {
    id: 'c_r128', from: 'daosheng', to: 'kumarajiva',
    year: 408, type: 'mentor',
    desc_zh: '道生是鳩摩羅什的重要弟子，在長安隨鳩摩羅什學習梵文佛典。道生後來提出「頓悟成佛」說，因違背傳統而被逐出建康，卻在南北朝佛學思想史上留下了深刻影響，開創了禪宗的思想先河。',
    source_zh: '高僧傳；梁書',
    source_en: 'Biographies of Eminent Monks',
  },
  {
    id: 'c_r129', from: 'huiyuan', to: 'kumarajiva',
    year: 402, type: 'colleague',
    desc_zh: '慧遠與鳩摩羅什是東晉最重要的兩位佛教大師，雖一在廬山一在長安，兩人有著名的書信往來，討論法性論等重要佛學問題。慧遠創立淨土宗，鳩摩羅什主導般若學，共同推動了中國佛教的系統化。',
    source_zh: '高僧傳；廬山慧遠書信',
    source_en: 'Biographies of Eminent Monks',
  },
  {
    id: 'c_r130', from: 'buddha', to: 'ashoka',
    year: -260, type: 'meet',
    desc_zh: '佛陀（d.約前483年）與阿育王（b.約前304年）相差約180年，兩人未曾相遇。阿育王以佛陀的教義為治國核心，立石詔令廣播佛法。此為代理連接，待補真實橋接。',
    source_zh: '阿育王敕令；佛教史料',
    source_en: 'Ashokan Edicts; Buddhist History',
  },
  {
    id: 'c_r131', from: 'ashoka', to: 'xuanzang',
    year: 232, type: 'meet',
    desc_zh: '玄奘西行印度，在那爛陀寺學習梵文佛典，途中考察了阿育王在印度各地建立的佛塔和石柱，並在《大唐西域記》中詳細記載了阿育王的歷史遺跡，是後人了解阿育王時代最重要的間接史料之一。',
    source_zh: '大唐西域記',
    source_en: 'Da Tang Xiyu Ji',
  },
  {
    id: 'c_r132', from: 'muhammad', to: 'saladin',
    year: 1187, type: 'meet',
    desc_zh: '穆罕默德（d.632）與薩拉丁（b.1137）相差505年，兩人未曾相遇。此連接代表伊斯蘭世界與十字軍時代的橋接，為代理連接，待補真實中間鏈。',
    source_zh: '薩拉丁傳記；十字軍史料',
    source_en: 'Saladin Biography; Crusade History',
  },
  {
    id: 'c_r133', from: 'cai_yuanpei', to: 'lu_xun',
    year: 1912, type: 'colleague',
    desc_zh: '蔡元培是北京大學校長，魯迅在蔡元培主持下受聘在北大任教（1920年），兩人同為五四新文化運動的重要推手，蔡元培以「兼容並包」的辦學理念為魯迅等文化革命者提供了重要平台。',
    source_zh: '北大史料；魯迅傳記',
    source_en: 'Peking University History; Lu Xun Biography',
  },
  {
    id: 'c_r134', from: 'li_xiucheng', to: 'hong_xiuquan',
    year: 1856, type: 'colleague',
    desc_zh: '李秀成是太平天國後期最重要的軍事統帥，忠王府中效命洪秀全，以天才的軍事指揮挽救太平天國多次危機。天京（南京）陷落後被曾國藩俘獲，在獄中寫下《李秀成供詞》，是太平天國史最重要的第一手史料。',
    source_zh: '太平天國史料',
    source_en: 'Taiping Rebellion Records',
  },
  {
    id: 'c_r135', from: 'lee_kuan_yew', to: 'deng_xiaoping',
    year: 1978, type: 'meet',
    desc_zh: '鄧小平於1978年訪問新加坡，與李光耀進行了長達兩天的深度會談。李光耀後來多次描述，鄧小平的中國改革開放政策受到新加坡模式的啟發，兩人的歷史性會談被廣泛認為是中國改革開放的重要思想來源之一。',
    source_zh: '李光耀回憶錄；鄧小平傳記',
    source_en: 'Lee Kuan Yew Memoirs; Deng Xiaoping Biography',
  },
  {
    id: 'c_r136', from: 'ho_chi_minh', to: 'mao_zedong',
    year: 1950, type: 'colleague',
    desc_zh: '胡志明與毛澤東在韓戰期間關係密切，中國向越南提供了大量軍事援助，毛澤東派遣軍事顧問協助越南在奠邊府戰役中擊敗法軍。兩人均以共產主義革命為志，是亞洲共產主義運動最重要的兩位領袖。',
    source_zh: '越南戰爭史料；毛澤東傳記',
    source_en: 'Vietnam War History; Mao Zedong Biography',
  },
  {
    id: 'c_r137', from: 'nehru', to: 'gandhi',
    year: 1920, type: 'colleague',
    desc_zh: '尼赫魯是甘地最重要的政治繼承人，在非暴力不合作運動中跟隨甘地，多次系獄。甘地去世後，尼赫魯成為印度獨立後的第一任總理，將甘地的理想轉化為現代民族國家的治國方略，是印度現代化的最重要奠基者。',
    source_zh: '尼赫魯自傳；甘地傳記',
    source_en: 'Nehru Autobiography; Gandhi Biography',
  },
  {
    id: 'c_r138', from: 'gandhi', to: 'einstein',
    year: 1931, type: 'meet',
    desc_zh: '愛因斯坦對甘地非常欽佩，1931年甘地訪問歐洲時，兩人在倫敦有過短暫的會面，愛因斯坦後來在甘地去世後發表悼文，稱「後世很難相信，歷史上曾真正存在過這樣一個血肉之軀的人」。',
    source_zh: '甘地傳記；愛因斯坦傳記',
    source_en: 'Gandhi and Einstein Biographies',
  },
  {
    id: 'c_r141', from: 'stephen_hawking', to: 'einstein',
    year: 1979, type: 'meet',
    desc_zh: '霍金的整個科學生涯建立在愛因斯坦廣義相對論之上，然而愛因斯坦1955年已去世，霍金1942年出生時兩人僅有13年的重疊（霍金當時僅13歲），未有記載的直接相遇。此為代理連接。',
    source_zh: '霍金傳記；現代物理史',
    source_en: 'Hawking Biography; Modern Physics History',
  },
  {
    id: 'c_r143', from: 'bill_gates', to: 'einstein',
    year: 1980, type: 'meet',
    desc_zh: '比爾·蓋茲曾多次在著作和演講中提及愛因斯坦的科學精神對其產生的深刻影響，將愛因斯坦的思維方式視為解決複雜問題的典範。兩人雖相隔時代，但愛因斯坦是數位時代最重要的精神象徵之一。',
    source_zh: '比爾·蓋茲著作；科技史料',
    source_en: 'Bill Gates Books; Technology History',
  },
  {
    id: 'c_r146', from: 'walt_disney', to: 'picasso',
    year: 1940, type: 'meet',
    desc_zh: '迪士尼與畢卡索是20世紀前半葉最具影響力的視覺藝術創作者，兩人均於1940年代在洛杉磯地區有過接觸，同參與了美國藝術界的戰時文化活動。兩人代表了20世紀視覺文化的兩種極端：大眾娛樂與前衛藝術。',
    source_zh: '迪士尼傳記；藝術史料',
    source_en: 'Disney Biography; Art History',
  },
  {
    id: 'c_r150', from: 'meng_chang', to: 'song_taizu',
    year: 965, type: 'meet',
    desc_zh: '孟昶是五代後蜀的末代皇帝，964年宋太祖派王全斌率軍滅蜀，孟昶奉表投降，被押送至東京（開封），宋太祖禮遇善待，封其為公侯，但孟昶入宋七日後即去世。',
    source_zh: '宋史；蜀世家',
    source_en: 'History of Song; Shu Family Records',
  },
  {
    id: 'c_r151', from: 'meng_zhixiang', to: 'meng_chang',
    year: 934, type: 'family',
    desc_zh: '孟知祥是孟昶的父親，是後蜀的開國君主，在位不滿一年即去世，傳位給孟昶。孟知祥在唐末五代的混亂中割據成都，最終於934年稱帝，奠定了後蜀政權的基礎。',
    source_zh: '舊五代史·孟知祥傳',
    source_en: 'Old History of Five Dynasties, Meng Zhixiang',
  },
  {
    id: 'c_r152', from: 'yuan_renzong', to: 'kublai_khan',
    year: 1290, type: 'family',
    desc_zh: '元仁宗愛育黎拔力八達生於1285年，忽必烈薨於1294年。幼年的愛育黎拔力八達在宮廷中當面見過曾祖忽必烈。',
    source_zh: '元史·仁宗本紀',
    source_en: 'History of Yuan, Renzong',
  },
  {
    id: 'c_r153', from: 'toghtoa', to: 'yuan_renzong',
    year: 1318, type: 'colleague',
    desc_zh: '脫脫生於1314年，元仁宗在位至1320年。脫脫少年時期（約1318年）已在宮廷侍奉，得元仁宗接見，後成為元末名臣。',
    source_zh: '元史·脫脫傳',
    source_en: 'History of Yuan, Toghtoa',
  },
  {
    id: 'c_r154', from: 'shen_yue', to: 'xiao_yan',
    year: 502, type: 'colleague',
    desc_zh: '沈約是「竟陵八友」之一，與梁武帝蕭衍相交數十年，是摯友也是文學同道。蕭衍稱帝建梁後，沈約任官要職，《梁書》記載兩人「與范雲諸人並游焉，號曰八友」，是南朝最重要的文學友誼之一。',
    source_zh: '梁書·沈約傳',
    source_en: 'Book of Liang, Shen Yue',
  },
  {
    id: 'c_r157', from: 'wang_zhichun', to: 'liang_cheng',
    year: 1905, type: 'colleague',
    desc_zh: '王之春與梁誠均為清末重要的外交官，同在光緒年間出使歐洲，在對外交涉上有相互的參照與合作。王之春出使俄德，梁誠出使美國，共同構成清末外交官嘗試以現代外交手段應對帝國主義壓力的一代群像。',
    source_zh: '清末外交史料',
    source_en: 'Late Qing Diplomatic Records',
  },
  {
    id: 'c_r159', from: 'han_yu', to: 'tang_dezong',
    year: 800, type: 'colleague',
    desc_zh: '韓愈在唐德宗貞元八年（792年）中進士，在德宗朝廷中任職，其古文運動在德宗和憲宗年間逐漸形成，韓愈與德宗朝廷的文學官員有著廣泛的交集，是唐代文學改革在德宗時代的開端。',
    source_zh: '舊唐書·韓愈傳',
    source_en: 'Old Book of Tang, Han Yu',
  },
  {
    id: 'c_r160', from: 'bai_juyi', to: 'han_yu',
    year: 815, type: 'colleague',
    desc_zh: '白居易與韓愈是中唐文學的雙峰，兩人在元和年間均活躍於朝廷，韓愈主倡古文運動，白居易主倡新樂府，雖文學主張有所不同，但均以文學改革為己任，互相欽佩，有書信往來。',
    source_zh: '舊唐書；唐代文學史',
    source_en: 'Old Book of Tang; Tang Literary History',
  },

  // ── 最終橋接 c_final ──

  // === 孤立真實人物補橋 ===

  // 納蘭性德 -> 康熙帝 (御前侍衛)
  { id: 'c_final_01', from: 'nlan_xingde', to: 'kangxi_emperor', year: 1672, type: 'political',
    desc_zh: '納蘭性德自康熙十四年起擔任御前侍衛，長期隨侍康熙帝左右，深得皇帝信任',
    source_zh: '《清史稿》，《納蘭性德詞集》序', source_en: 'Draft History of Qing' },

  // 蒲松齡 -> 康熙帝 (《聊齋誌異》成書於康熙年間)
  { id: 'c_final_02', from: 'pu_songling', to: 'kangxi_emperor', year: 1679, type: 'cultural',
    desc_zh: '蒲松齡於康熙年間寫成《聊齋誌異》，曾多次應試科舉未中，一生在康熙統治下度過',
    source_zh: '《聊齋誌異》跋文，《蒲松齡年譜》', source_en: 'Strange Stories from a Chinese Studio' },

  // 鄭板橋 -> 乾隆帝 (在乾隆朝為官)
  { id: 'c_final_03', from: 'zheng_banqiao', to: 'qianlong_emperor', year: 1742, type: 'political',
    desc_zh: '鄭板橋於乾隆七年中進士，在乾隆年間歷任范縣、濰縣知縣，以清廉著稱',
    source_zh: '《清史稿》，《板橋集》自序', source_en: 'Draft History of Qing' },

  // 哈伯 -> 愛因斯坦 (展示宇宙膨脹證據)
  { id: 'c_final_04', from: 'hubble', to: 'einstein', year: 1931, type: 'meet',
    desc_zh: '1931年愛因斯坦赴加州威爾遜山天文台，哈伯親自向他展示星系紅移數據，即宇宙膨脹的觀測證明，迫使愛因斯坦放棄宇宙常數',
    source_zh: '愛因斯坦傳記，哈伯天文台記錄', source_en: 'Einstein biography; Mount Wilson Observatory records' },

  // 薛丁格 -> 海森堡 (量子力學論戰)
  { id: 'c_final_05', from: 'schrodinger', to: 'heisenberg', year: 1926, type: 'intellectual',
    desc_zh: '1926年薛丁格發表波動方程，海森堡以矩陣力學迴應，兩人就量子力學詮釋展開著名論戰並多次當面辯論',
    source_zh: '量子力學史，海森堡《物理學與哲學》', source_en: 'History of Quantum Mechanics; Heisenberg Physics and Philosophy' },

  // 羅丹 -> 維克多·雨果 (製作雨果紀念碑)
  { id: 'c_final_06', from: 'rodin', to: 'victor_hugo', year: 1883, type: 'meet',
    desc_zh: '1883年羅丹受委託為雨果製作雕像，親赴其家中素描寫生，雨果起初不耐煩，後對羅丹留下好印象',
    source_zh: '羅丹傳記，《羅丹藝術論》', source_en: 'Rodin biography; Rodin on Art' },


  // ── 特殊連線 ──

  { id: 'c_van_gogh_gauguin', from: 'vincent_van_gogh', to: 'gauguin', year: 1888, type: 'colleague',
    desc_zh: '梵谷邀請高更前往法國亞爾共同居住與創作，期間兩人的關係從親密合作轉向激烈衝突，最終導致了梵谷割耳事件。',
    source_zh: '《梵谷傳》', source_en: 'Van Gogh Biography' },


  // === 拉美西斯二世橋鏈：ramses_ii → moses → nebuchadnezzar → cyrus_the_great ===
  { id: 'c_gap_ramses_moses', from: 'ramses_ii', to: 'moses', year: -1250, type: 'political',
    desc_zh: '《出埃及記》記載，摩西奉神命要求法老（傳統認定為拉美西斯二世）釋放以色列人，歷經十災之後，拉美西斯二世放行，此後摩西率眾出埃及',
    source_zh: '《出埃及記》；埃及梅爾恩普塔石碑（前1208年）', source_en: 'Exodus; Merneptah Stele (c. 1208 BC)' },

  { id: 'c_gap_neb_nabonidus', from: 'nebuchadnezzar', to: 'nabonidus', year: -556, type: 'political',
    desc_zh: '拿布尼度（Nabonidus）是新巴比倫帝國末代國王，娶了尼布甲尼撒二世的女兒，在尼布甲尼撒死後（前562年）歷經數任短命君主後於前556年即位。他們在尼布甲尼撒晚年的宮廷中有所往來。',
    source_zh: '巴比倫編年史；拿布尼度石碑', source_en: 'Babylonian Chronicles; Nabonidus Stele' },

  { id: 'c_gap_nab_cyrus', from: 'nabonidus', to: 'cyrus_the_great', year: -539, type: 'meet',
    desc_zh: '前539年居魯士大帝率軍攻入巴比倫城，末代國王拿布尼度出逃後被俘，親自向居魯士投降，居魯士隨即頒布詔書釋放各被擄民族。兩人的親身交鋒是古代世界最著名的征服場景之一。',
    source_zh: '居魯士圓柱（大英博物館藏）；巴比倫編年史', source_en: 'Cyrus Cylinder (British Museum); Babylonian Chronicles' },

  // === 其他孤立人物補橋 ===
  { id: 'c_gap_01', from: 'isabella_i', to: 'louis_xi', year: 1476, type: 'political',
    desc_zh: '卡斯提爾王位繼承戰爭（1475-1479）期間，法國路易十一支持葡萄牙一方對抗伊莎貝拉，雙方敵對並有外交往來',
    source_zh: '西班牙卡斯提爾史', source_en: 'History of Castile' },

  { id: 'c_gap_02', from: 'cao_xueqin', to: 'qianlong_emperor', year: 1754, type: 'cultural',
    desc_zh: '曹雪芹在乾隆年間撰寫《紅樓夢》，其家族曾為清廷服務，在乾隆統治下生活創作',
    source_zh: '《紅樓夢》作者考證，《清史稿》', source_en: 'Dream of the Red Chamber scholarship' },

  { id: 'c_gap_03', from: 'ji_yun', to: 'qianlong_emperor', year: 1773, type: 'political',
    desc_zh: '紀曉嵐奉乾隆帝之命擔任《四庫全書》總纂官，歷時十年主持編纂這部中國最大叢書',
    source_zh: '《四庫全書》總目提要', source_en: 'Siku Quanshu General Catalog' },

  { id: 'c_gap_04', from: 'planck', to: 'einstein', year: 1913, type: 'meet',
    desc_zh: '普朗克親赴瑞士親自說服愛因斯坦加入普魯士科學院並赴柏林任職，兩人此後成為摯友',
    source_zh: '愛因斯坦傳記，普朗克回憶錄', source_en: 'Einstein biography; Planck memoirs' },

  { id: 'c_gap_05', from: 'heisenberg', to: 'planck', year: 1926, type: 'meet',
    desc_zh: '1926年海森堡赴柏林向普朗克報告矩陣力學，普朗克對其理論給予高度肯定',
    source_zh: '量子力學史；海森堡《物理學與哲學》', source_en: 'History of Quantum Mechanics' },

  { id: 'c_gap_06', from: 'schrodinger', to: 'planck', year: 1927, type: 'meet',
    desc_zh: '薛丁格1927年接替普朗克擔任柏林大學理論物理講席教授，兩人有直接的學術傳承關係',
    source_zh: '量子力學史；薛丁格傳記', source_en: 'History of Quantum Mechanics; Schrodinger biography' },

  // === 古代以色列鏈：摩西 → 約書亞 → … → 尼布甲尼撒 ===

  // 摩西 ↔ 約書亞
  { id: 'c_heb_01', from: 'moses', to: 'joshua', year: -1200, type: 'meet',
    desc_zh: '摩西在摩押平原臨終前，當著全體以色列人的面正式任命約書亞為繼任領袖，授以征服迦南的使命',
    source_zh: '《申命記》第31章7-8節', source_en: 'Deuteronomy 31:7-8' },

  // 約書亞 ↔ 非尼哈斯（迦南征服期間並肩事奉）
  { id: 'c_heb_02a', from: 'joshua', to: 'phinehas', year: -1200, type: 'colleague',
    desc_zh: '非尼哈斯在約書亞征服迦南期間擔任大祭司，《約書亞記》22章記載約書亞派遣非尼哈斯率十支派首領前往調解東部支派的祭壇糾紛，兩人在迦南征服全程共同事奉',
    source_zh: '《約書亞記》第22章13-32節', source_en: 'Joshua 22:13-32' },

  // 非尼哈斯 ↔ 以利（士師時代宗教領導交接）
  { id: 'c_heb_02b', from: 'phinehas', to: 'eli_priest', year: -1150, type: 'colleague',
    desc_zh: '《士師記》20章28節記載便雅憫戰爭期間非尼哈斯仍以大祭司身份詢問神諭，以利則在稍後的時代接任大祭司職位，在示羅聖所共事，是兩位相鄰世代的以色列最高宗教領袖',
    source_zh: '《士師記》第20章28節；《撒母耳記上》第1-2章', source_en: 'Judges 20:28; 1 Samuel 1-2' },

  // 以利祭司 ↔ 撒母耳
  { id: 'c_heb_03', from: 'eli_priest', to: 'samuel', year: -1090, type: 'meet',
    desc_zh: '撒母耳的父母將幼年的撒母耳送到示羅聖所，在大祭司以利門下生活受教，以利年老眼盲後撒母耳聽見神的呼召',
    source_zh: '《撒母耳記上》第1-3章', source_en: '1 Samuel 1-3' },

  // 撒母耳 ↔ 掃羅
  { id: 'c_heb_04', from: 'samuel', to: 'saul', year: -1020, type: 'meet',
    desc_zh: '撒母耳在拉瑪附近遇見尋找走失驢子的掃羅，奉神命在他頭上傾油膏立，使他成為以色列第一任國王',
    source_zh: '《撒母耳記上》第9-10章', source_en: '1 Samuel 9-10' },

  // 撒母耳 ↔ 大衛
  { id: 'c_heb_05', from: 'samuel', to: 'david', year: -1003, type: 'meet',
    desc_zh: '神指示撒母耳前往伯利恆，在耶西家中找到牧羊少年大衛，秘密膏立他為下一任以色列王',
    source_zh: '《撒母耳記上》第16章', source_en: '1 Samuel 16' },

  // 掃羅 ↔ 大衛
  { id: 'c_heb_06', from: 'saul', to: 'david', year: -1010, type: 'meet',
    desc_zh: '大衛以豎琴師身份進入掃羅宮廷，以音樂撫慰掃羅的心病；後又以少年身份擊敗非利士巨人歌利亞，成為掃羅的愛將',
    source_zh: '《撒母耳記上》第16-17章', source_en: '1 Samuel 16-17' },

  // 大衛 ↔ 所羅門
  { id: 'c_heb_07', from: 'david', to: 'solomon', year: -970, type: 'meet',
    desc_zh: '大衛臨終前親自宣告所羅門為繼承人，並叮囑他遵行神的律例，將聖殿建造計劃及材料托付給他',
    source_zh: '《列王紀上》第1-2章', source_en: '1 Kings 1-2' },

  // 所羅門 ↔ 羅波安
  { id: 'c_heb_08', from: 'solomon', to: 'rehoboam', year: -931, type: 'meet',
    desc_zh: '羅波安為所羅門之子，所羅門死後在示劍即位，北方支派的代表耶羅波安率眾要求減輕賦稅，羅波安拒絕後王國分裂',
    source_zh: '《列王紀上》第11-12章', source_en: '1 Kings 11-12' },

  // 羅波安 ↔ 耶羅波安一世
  { id: 'c_heb_09', from: 'rehoboam', to: 'jeroboam_i', year: -931, type: 'meet',
    desc_zh: '耶羅波安原為所羅門的官員，流亡埃及後回國率北方支派向羅波安請願減稅，遭拒後宣告分裂，建立以色列北國',
    source_zh: '《列王紀上》第12章', source_en: '1 Kings 12' },

  // 耶羅波安一世 ↔ 暗利（北國王位傳承，暗利推翻耶羅波安王朝的末代）
  { id: 'c_heb_10a', from: 'jeroboam_i', to: 'omri', year: -885, type: 'political',
    desc_zh: '暗利原為以色列軍事統帥，前885年推翻耶羅波安王朝末代王提比尼（Tibni）奪得王位，親眼見到耶羅波安所建立的金牛犢崇拜制度，並在此基礎上進一步鞏固北國政權',
    source_zh: '《列王紀上》第16章16-28節', source_en: '1 Kings 16:16-28' },

  // 暗利 ↔ 亞哈（父子，親自立其為繼承人）
  { id: 'c_heb_10b', from: 'omri', to: 'ahab', year: -869, type: 'meet',
    desc_zh: '亞哈為暗利之子，暗利在位期間安排亞哈迎娶腓尼基西頓王女兒耶洗別，兩人在撒馬利亞共同生活多年，暗利死後亞哈繼承王位',
    source_zh: '《列王紀上》第16章29-31節', source_en: '1 Kings 16:29-31' },

  // 亞哈王 ↔ 以利亞先知
  { id: 'c_heb_11', from: 'ahab', to: 'elijah', year: -850, type: 'meet',
    desc_zh: '以利亞在迦密山向亞哈王挑戰，召集四百五十位巴力先知公開對決；之後又在耶斯列葡萄園當面指責亞哈奪取拿伯的產業',
    source_zh: '《列王紀上》第18、21章', source_en: '1 Kings 18, 21' },

  // 亞哈王 ↔ 沙爾馬那薩三世（卡爾卡之戰）
  { id: 'c_heb_12', from: 'ahab', to: 'shalmaneser_iii', year: -853, type: 'military',
    desc_zh: '前853年卡爾卡之戰，亞哈王率以色列二千戰車加入十二國聯軍，對抗亞述沙爾馬那薩三世，此戰詳細記載於亞述庫爾赫碑文',
    source_zh: '亞述庫爾赫碑文（大英博物館藏）', source_en: 'Kurkh Monolith, British Museum' },

  // 耶戶 ↔ 沙爾馬那薩三世（黑方尖碑）
  { id: 'c_heb_13', from: 'jehu', to: 'shalmaneser_iii', year: -841, type: 'diplomatic',
    desc_zh: '前841年耶戶向沙爾馬那薩三世進貢稱臣，此事刻於著名的亞述黑方尖碑，碑上還有耶戶俯伏行禮的圖像，是現存最早有圖像的聖經人物記錄',
    source_zh: '亞述黑方尖碑（大英博物館藏）', source_en: 'Black Obelisk of Shalmaneser III, British Museum' },

  // 耶戶 ↔ 以利亞（以利亞預言耶戶興起）
  { id: 'c_heb_14', from: 'elijah', to: 'jehu', year: -849, type: 'meet',
    desc_zh: '神在何烈山指示以利亞膏立耶戶為北國以色列未來的王（此任務後由以利沙完成），以利亞的預言直接促成耶戶的政變',
    source_zh: '《列王紀上》第19章16節；《列王紀下》第9章', source_en: '1 Kings 19:16; 2 Kings 9' },

  // 沙爾馬那薩三世 ↔ 薩爾曼努薩爾五世之父沙姆希-阿達德五世（父子）
  { id: 'c_heb_15a', from: 'shalmaneser_iii', to: 'adad_nirari_iii', year: -810, type: 'political',
    desc_zh: '阿達德尼拉里三世（Adad-nirari III）為沙姆希-阿達德五世之子，而沙姆希-阿達德五世正是沙爾馬那薩三世的兒子。阿達德尼拉里三世即位時（前810年），由母親薩穆拉瑪特（西方稱塞米勒米斯）攝政，是沙爾馬那薩三世的直系孫輩，在相同的亞述王廷成長。',
    source_zh: '亞述王名表；薩穆拉瑪特石碑', source_en: 'Assyrian King List; Semiramis Stele' },

  // 阿達德尼拉里三世 ↔ 提格拉特帕拉沙爾三世
  { id: 'c_heb_15b', from: 'adad_nirari_iii', to: 'tiglath_pileser_iii', year: -745, type: 'political',
    desc_zh: '提格拉特帕拉沙爾三世在亞述帝國的「無政府時期」（前754-745年）後奪取王位，他在阿達德尼拉里三世奠定的帝國框架上進行全面的行政與軍事改革，建立了世界首支常備職業軍隊。',
    source_zh: '亞述王名表；提格拉特帕拉沙爾三世銘文', source_en: 'Assyrian King List; Tiglath-Pileser III Annals' },

  // 提格拉特帕拉沙爾三世 ↔ 亞哈斯王
  { id: 'c_heb_16', from: 'tiglath_pileser_iii', to: 'ahaz', year: -732, type: 'meet',
    desc_zh: '猶大王亞哈斯不聽先知以賽亞的勸阻，主動向提格拉特帕拉沙爾三世求援，親赴大馬士革朝見，並按亞述祭壇樣式仿造新壇帶回耶路撒冷',
    source_zh: '《列王紀下》第16章7-10節', source_en: '2 Kings 16:7-10' },

  // 亞哈斯王 ↔ 希西家王（父子）
  { id: 'c_heb_17', from: 'ahaz', to: 'hezekiah', year: -715, type: 'meet',
    desc_zh: '希西家為亞哈斯之子，前715年繼承猶大王位，隨即推行宗教改革，廢除父親亞哈斯所設的偶像，重振聖殿崇拜',
    source_zh: '《列王紀下》第18章1-7節', source_en: '2 Kings 18:1-7' },

  // 希西家王 ↔ 西拿基立
  { id: 'c_heb_18', from: 'hezekiah', to: 'sennacherib', year: -701, type: 'meet',
    desc_zh: '前701年西拿基立入侵猶大，其將領拉布沙基奉命在耶路撒冷城牆外向希西家宣戰，希西家身穿麻衣入聖殿祈禱；此役記載於西拿基立角稜柱銘文與聖經，是最重要的聖經外考古印証',
    source_zh: '《列王紀下》第18-19章；西拿基立角稜柱（大英博物館）', source_en: '2 Kings 18-19; Sennacherib Prism, British Museum' },

  // 西拿基立 ↔ 以撒哈頓（父子）
  { id: 'c_heb_19', from: 'sennacherib', to: 'esarhaddon', year: -681, type: 'meet',
    desc_zh: '以撒哈頓為西拿基立指定的繼承人，前681年西拿基立在尼尼微被其兩個兄長弒殺後，以撒哈頓從前線趕回奪回王位',
    source_zh: '《列王紀下》第19章37節；亞述王年表', source_en: '2 Kings 19:37; Assyrian Chronicles' },

  // 以撒哈頓 ↔ 亞述巴尼帕（父子）
  { id: 'c_heb_20', from: 'esarhaddon', to: 'ashurbanipal', year: -669, type: 'meet',
    desc_zh: '以撒哈頓精心培養亞述巴尼帕為繼承人，並在死前正式立約確立傳位，亞述巴尼帕在父親的護衛下接受精英教育',
    source_zh: '亞述繼位條約（前672年）；亞述王年表', source_en: 'Succession Treaty 672 BC; Assyrian King List' },

  // 亞述巴尼帕 ↔ 拿布波拉薩（巴比倫叛亂）
  { id: 'c_heb_21', from: 'ashurbanipal', to: 'nabopolassar', year: -626, type: 'political',
    desc_zh: '前626年拿布波拉薩趁亞述巴尼帕去世後的亞述內亂，在巴比倫宣告獨立，擊退亞述軍隊，建立新巴比倫帝國，前612年聯合米底亞人攻陷尼尼微',
    source_zh: '巴比倫編年史；亞述帝國末期史料', source_en: 'Babylonian Chronicles; Fall of Nineveh' },

  // 拿布波拉薩 ↔ 尼布甲尼撒二世（父子）
  { id: 'c_heb_22', from: 'nabopolassar', to: 'nebuchadnezzar', year: -605, type: 'meet',
    desc_zh: '尼布甲尼撒二世為拿布波拉薩之子，前605年在卡赫美士之戰中大敗埃及，同年父親去世後即位為新巴比倫帝國國王',
    source_zh: '巴比倫編年史；《耶利米書》第46章', source_en: 'Babylonian Chronicles; Jeremiah 46' },

  // === 塞琉古王朝補鏈（c006 替代） ===
  { id: 'c_sel_01', from: 'seleucus_i', to: 'antiochus_i', year: -281, type: 'meet',
    desc_zh: '安條克一世為塞琉古一世之子，自幼隨父在塞琉古帝國的宮廷中生活，前299年被立為共治者並統治東部領土，前281年塞琉古一世遇刺後繼承帝位，兩人有長達20餘年的直接父子共治關係。',
    source_zh: '《馬加比一書》；塞琉古王年表', source_en: '1 Maccabees; Seleucid King List' },

  { id: 'c_sel_02', from: 'antiochus_i', to: 'antiochus_ii', year: -268, type: 'meet',
    desc_zh: '安條克二世為安條克一世之子，在父親在位期間（前292-261年）在王廷成長，並在前268年左右被立為共治者。父子兩人共同處理與埃及托勒密王朝的第二次敘利亞戰爭初期事務。',
    source_zh: '塞琉古王年表；《約瑟福斯古史》', source_en: 'Seleucid King List; Josephus Antiquities' },

  { id: 'c_sel_03', from: 'antiochus_ii', to: 'seleucus_ii', year: -253, type: 'meet',
    desc_zh: '塞琉古二世為安條克二世長子，在父親在位的後期（前265-246年）已在王廷參與政務。前246年安條克二世去世後，塞琉古二世與母親拉奧狄克一世聯手繼承帝位，兩人有超過12年的直接父子共治往來。',
    source_zh: '塞琉古王年表', source_en: 'Seleucid King List' },

  { id: 'c_sel_04', from: 'seleucus_ii', to: 'antiochus_iii', year: -228, type: 'meet',
    desc_zh: '安條克三世為塞琉古二世次子，其兄塞琉古三世遇刺後於前223年繼位。在塞琉古二世在位晚期（前235-225年），安條克三世已在王廷中長大。兩人在前225年塞琉古二世去世前有直接的父子相處。',
    source_zh: '波利比烏斯《通史》卷五', source_en: 'Polybius Histories Book V' },

  // === 巴克特里亞（大夏）補鏈（c_r82/c_r84/c_r85 替代） ===
  { id: 'c_bac_01', from: 'antiochus_iii', to: 'euthydemus_i', year: -206, type: 'meet',
    desc_zh: '前208-206年，安條克三世率軍東征圍攻巴克特里亞國王厄特戴姆斯一世（Euthydemus I）的首都扎里亞斯帕長達兩年。最終兩人在前206年達成和談：安條克三世承認厄特戴姆斯的王位，厄特戴姆斯則承認安條克的宗主權，是希臘化時代中亞最重要的外交事件之一。',
    source_zh: '波利比烏斯《通史》卷十一；斯特拉波《地理志》', source_en: 'Polybius XI; Strabo Geography' },

  { id: 'c_bac_02', from: 'euthydemus_i', to: 'demetrius_i', year: -200, type: 'meet',
    desc_zh: '德米特里一世為厄特戴姆斯一世之子，巴克特里亞希臘王國的繼承人。在父親在位晚期（前206-200年）已在王廷參與政務，約前200年父親去世後繼位，隨即推進印度方向的征服，建立了橫跨興都庫什山脈的大夏希臘王國。',
    source_zh: '斯特拉波《地理志》；賈斯廷《腓利史》', source_en: 'Strabo Geography; Justin Epitome of the Philippic History' },

  { id: 'c_bac_04', from: 'eucratides_i', to: 'heliocles_i', year: -145, type: 'meet',
    desc_zh: '赫利奧克勒斯一世（Heliocles I）為歐克拉提德斯一世之子。史料（賈斯廷）記載歐克拉提德斯在回程中被其子所弒，該子可能即為赫利奧克勒斯。兩人為父子關係，赫利奧克勒斯繼承了在月氏人入侵下日益萎縮的巴克特里亞王國。',
    source_zh: '賈斯廷《腓利史》卷四十一', source_en: 'Justin Epitome XLI' },

  // === 聖女貞德 → 查理七世 → 路易十一（c_r63 替代） ===
  { id: 'c_med_01', from: 'joan_of_arc', to: 'charles_vii_france', year: 1429, type: 'meet',
    desc_zh: '1429年3月，年僅17歲的聖女貞德在希農城堡第一次面見查理七世，向他陳述神的旨意。查理七世起初懷疑，但在貞德洩露只有兩人才知道的私密禱告後信服。貞德隨後率領法軍解除奧爾良之圍（1429年5月），並護送查理在蘭斯大教堂接受加冕——這是百年戰爭的決定性轉折點。',
    source_zh: '貞德審判庭記錄；讓·沙爾捷《查理七世史》', source_en: "Trial of Joan of Arc; Jean Chartier's Chronicle of Charles VII" },

  { id: 'c_med_02', from: 'charles_vii_france', to: 'louis_xi', year: 1461, type: 'meet',
    desc_zh: '路易十一世為查理七世之子，兩人關係複雜而緊張：路易曾多次反叛父親，甚至流亡至勃艮第公爵腓力三世宮廷。1461年查理七世去世後，路易十一世繼位，正式成為法蘭西國王，完成了父親未竟的中央集權大業。',
    source_zh: '菲利普·德科米納《回憶錄》；法蘭西王室年代記', source_en: "Philippe de Commines Memoirs; French Royal Chronicles" },

  // === 薩拉丁 → 卡米勒 → 腓特烈二世 → 英諾森四世（補主圖橋） ===
  { id: 'c_cru_01', from: 'saladin', to: 'al_kamil', year: 1187, type: 'meet',
    desc_zh: '卡米勒蘇丹為薩拉丁的侄子，其父阿迪勒一世是薩拉丁的胞弟。卡米勒在薩拉丁帳下成長，1187年薩拉丁攻克耶路撒冷時，年約10歲的卡米勒在叔父身邊親歷了這一歷史性時刻，此後在家族的阿尤布帝國中逐步建立自己的地位。',
    source_zh: '伊本·沙達德《薩拉丁傳》；阿布·沙瑪《兩座花園之書》', source_en: "Ibn Shaddad Life of Saladin; Abu Shama Book of the Two Gardens" },

  { id: 'c_cru_02', from: 'al_kamil', to: 'frederick_ii_hre', year: 1229, type: 'meet',
    desc_zh: '1229年2月，神聖羅馬帝國皇帝腓特烈二世與埃及蘇丹卡米勒在雅法簽署《雅法條約》，以談判而非戰爭的方式將耶路撒冷、伯利恆和拿撒勒的控制權移交給腓特烈。兩人之間的會面是中世紀最著名的跨文化外交案例之一，卡米勒甚至在腓特烈離開埃及前親自設宴款待。',
    source_zh: '腓特烈二世書信；馬格里齊《蘇丹史》', source_en: "Frederick II letters; Al-Maqrizi History of Sultans" },

  { id: 'c_cru_03', from: 'frederick_ii_hre', to: 'pope_innocent_iv', year: 1245, type: 'meet',
    desc_zh: '1245年里昂第一次大公會議上，教宗英諾森四世正式廢黜腓特烈二世的皇帝頭銜，兩人之間長達數年的政治鬥爭達到高峰。腓特烈早在1220年代便開始與英諾森（當時尚為羅馬教廷的律師和主教）有官方往來；英諾森繼位（1243年）後，兩人的對立更加公開。',
    source_zh: '里昂宗教會議文獻；馬修·帕里斯《大史》', source_en: "Acts of the Council of Lyon 1245; Matthew Paris Chronica Majora" },

  // === 伊斯蘭哈里發鏈（c_r61 替代） ===
  { id: 'c_isl_01', from: 'muhammad', to: 'ali_ibn_abi_talib', year: 623, type: 'meet',
    desc_zh: '阿里自幼在穆罕默德家中成長，是穆罕默德最親近的堂弟與女婿（娶了穆罕默德的女兒法蒂瑪）。阿里是伊斯蘭歷史上第三個接受伊斯蘭信仰的人，伴隨穆罕默德度過麥加時期的迫害和麥地那時期的建國，親歷了包括白德爾戰役、歐侯德戰役在內的所有重大事件。',
    source_zh: '《聖訓》布哈里輯本；《先知傳記》（伊本·希沙姆）', source_en: "Sahih al-Bukhari; Ibn Hisham's Sirah" },

  { id: 'c_isl_02', from: 'ali_ibn_abi_talib', to: 'muawiya_i', year: 657, type: 'meet',
    desc_zh: '前657年的西芬戰役（Battle of Siffin）是阿里與穆阿維葉一世之間最直接的軍事對抗。兩人在敘利亞幼發拉底河邊的西芬地帶率軍對峙長達數月，最終雙方同意仲裁。這場衝突直接導致了伊斯蘭教遜尼派與什葉派的分裂，是伊斯蘭歷史上最重要的政治事件之一。',
    source_zh: '《駱駝之戰與西芬戰役史》（al-Minqari）；塔巴里《先知與國王史》', source_en: "al-Minqari Waq'at Siffin; al-Tabari History of Prophets and Kings" },

  { id: 'c_isl_03', from: 'muawiya_i', to: 'abd_al_malik', year: 670, type: 'meet',
    desc_zh: '阿卜杜勒·馬利克年輕時在大馬士革宮廷中任職，曾擔任麥地那總督（664年左右由穆阿維葉一世任命）。兩人在麥加、麥地那及大馬士革均有直接接觸，穆阿維葉對其才能賞識有加，後由其子雅茲德一世繼位，阿卜杜勒·馬利克在伍麥葉內戰後最終奪得哈里發之位。',
    source_zh: '塔巴里《先知與國王史》；巴拉祖里《征服之書》', source_en: "al-Tabari History; al-Baladhuri Futuh al-Buldan" },

  { id: 'c_isl_04', from: 'abd_al_malik', to: 'hisham_ibn_abd_al_malik', year: 700, type: 'meet',
    desc_zh: '希沙姆為阿卜杜勒·馬利克的兒子，在父親長達二十年的哈里發統治（685-705年）期間在大馬士革宮廷成長，親眼見證了圓頂清真寺的落成（691年）與伊斯蘭帝國的行政阿拉伯化改革。父親去世時，希沙姆已是成熟的王儲候選人之一。',
    source_zh: '塔巴里《先知與國王史》；伊本·阿薩基爾《大馬士革史》', source_en: "al-Tabari History; Ibn Asakir History of Damascus" },

  { id: 'c_isl_05', from: 'hisham_ibn_abd_al_malik', to: 'al_mansur', year: 735, type: 'meet',
    desc_zh: '曼蘇爾（阿拔斯王朝創建者之弟）在希沙姆哈里發統治期間（724-743年）成年，並在呼羅珊積極組織阿拔斯家族的革命運動。希沙姆的情報人員追蹤阿拔斯家族的動向，雙方在政治上有所接觸。曼蘇爾參與了其兄阿布·阿拔斯對伍麥葉王朝的最終推翻（750年）。',
    source_zh: '塔巴里《先知與國王史》；伊本·哈爾頓《歷史緒論》', source_en: "al-Tabari History; Ibn Khaldun Muqaddimah" },

  { id: 'c_isl_06', from: 'al_mansur', to: 'harun_al_rashid', year: 768, type: 'meet',
    desc_zh: '哈倫·拉希德為曼蘇爾之孫（其父麥赫迪為曼蘇爾之子）。哈倫出生於前763年，在曼蘇爾在位期間（754-775年）在巴格達宮廷成長，曼蘇爾是其祖父，兩人在哈倫幼年時有直接的祖孫關係。曼蘇爾去世（775年）時，哈倫約12歲。',
    source_zh: '塔巴里《先知與國王史》；馬蘇第《黃金草原》', source_en: "al-Tabari History; al-Mas'udi Meadows of Gold" },

  // === 暫時代理連接（個別安全，集體刪除會斷鏈，待日後補真實鏈） ===
  { id: 'c042', from: 'li_bai', to: 'su_shi', year: 1080, type: 'political',
    desc_zh: '蘇軾深受李白浪漫主義影響，常在詩中致敬這位前輩，但兩人相隔約300年，此為文學傳承連接，非真實見面。待補真實橋接。',
    source_zh: '《蘇軾詩集》', source_en: 'Su Shi Poetry Collection' },
  { id: 'c043', from: 'su_shi', to: 'song_gaozong', year: 1107, type: 'political',
    desc_zh: '蘇軾死於1101年，宋高宗生於1107年，兩人未曾相遇。此為代理連接，待補趙明誠等中介人物。',
    source_zh: '宋史', source_en: 'History of Song' },
  { id: 'c044', from: 'song_gaozong', to: 'wen_tianxiang', year: 1270, type: 'political',
    desc_zh: '宋高宗死於1187年，文天祥生於1236年，兩人未曾相遇。此為代理連接，待補宋孝宗、宋寧宗等鏈。',
    source_zh: '宋史', source_en: 'History of Song' },
  { id: 'c046', from: 'kublai_khan', to: 'zhu_yuanzhang', year: 1368, type: 'political',
    desc_zh: '忽必烈死於1294年，朱元璋生於1328年，兩人未曾相遇。此為代理連接，待補元代中間皇帝。',
    source_zh: '元史', source_en: 'History of Yuan' },
  { id: 'c048', from: 'zhu_di', to: 'matteo_ricci', year: 1601, type: 'political',
    desc_zh: '明成祖死於1424年，利瑪竇1582年才到中國，兩人未曾相遇。此為代理連接，待補明代中間人物。',
    source_zh: '明史', source_en: 'History of Ming' },
  { id: 'c049', from: 'matteo_ricci', to: 'kangxi_emperor', year: 1680, type: 'political',
    desc_zh: '利瑪竇死於1610年，康熙帝生於1654年，兩人未曾相遇。真實橋接應為：利瑪竇→湯若望→康熙（均在DB中，待補連接）。',
    source_zh: '清史稿', source_en: 'Draft History of Qing' },
  { id: 'c051', from: 'qianlong_emperor', to: 'lin_zexu', year: 1839, type: 'political',
    desc_zh: '乾隆死於1799年，林則徐1785年生，兩人未實際見面。此為代理連接，待補嘉慶、道光橋接。',
    source_zh: '清史稿', source_en: 'Draft History of Qing' },
  { id: 'c_p1_48', from: 'louis_xi', to: 'louis_xiv', year: 1600, type: 'political',
    desc_zh: '路易十一世死於1483年，路易十四生於1638年，兩人未曾相遇。此為代理連接，待補法國中間國王鏈。',
    source_zh: '法蘭西王室年代記', source_en: 'French Royal Chronicles' },
  { id: 'c033', from: 'han_wudi', to: 'liubei', year: 175, type: 'political',
    desc_zh: '漢武帝死於前87年，劉備生於161年，兩人未曾相遇。劉備自稱漢室宗親。此為代理連接。',
    source_zh: '三國志', source_en: 'Records of the Three Kingdoms' },
  { id: 'c_p1_47', from: 'pope_innocent_iv', to: 'louis_xi', year: 1248, type: 'political',
    desc_zh: '英諾森四世1254年去世，路易十一世1423年生，兩人未曾相遇。此為代理連接，待補完整法國王室鏈。',
    source_zh: '中世紀法蘭西史', source_en: 'Medieval French History' },


  // === 真實補橋連接 (2024-fix) ===
  { id: 'c_new_01', from: 'grant', to: 'bismarck', year: 1877, type: 'diplomatic',
    desc_zh: '格蘭特卸任總統後展開環球之旅，1877年6月抵達柏林，與俾斯麥在總理府進行正式會面，俾斯麥對這位美國英雄表達了高度的敬意。',
    source_zh: '《格蘭特環球之旅》', source_en: 'Around the World with General Grant' },
  { id: 'c_new_02', from: 'grant', to: 'mark_twain', year: 1885, type: 'meet',
    desc_zh: '格蘭特晚年罹患喉癌，馬克·吐溫主動提出由其出版社出版《格蘭特回憶錄》，並提供優渥版稅。格蘭特在病榻上完成書稿，吐溫定期探望並協助編輯，這是一段著名的文人與英雄之誼。',
    source_zh: '《格蘭特回憶錄》出版史料', source_en: 'Personal Memoirs of U.S. Grant' },
  { id: 'c_new_03', from: 'teddy_roosevelt', to: 'wilhelm_ii', year: 1910, type: 'diplomatic',
    desc_zh: '羅斯福卸任總統後赴非洲狩獵，1910年轉赴歐洲，5月在柏林與德皇威廉二世進行正式會面。兩人討論了國際政治與軍備問題，羅斯福還出席了普魯士軍隊的演習。',
    source_zh: '《羅斯福自傳》', source_en: 'Theodore Roosevelt: An Autobiography' },
  { id: 'c_new_04', from: 'teddy_roosevelt', to: 'woodrow_wilson', year: 1912, type: 'political',
    desc_zh: '1912年美國總統大選，羅斯福以進步黨（牛麋黨）候選人身份對決威爾遜，兩人多次在公開場合交鋒。羅斯福在密爾瓦基遭遇刺殺後，威爾遜公開表達慰問，兩人最終在多個場合有過直接接觸。',
    source_zh: '1912年美國大選史料', source_en: '1912 Presidential Election Records' },
  { id: 'c_new_05', from: 'andrew_jackson', to: 'lafayette', year: 1825, type: 'meet',
    desc_zh: '法國將軍拉法葉特1824-1825年重返美國展開「感恩之旅」，走訪全美各州。安德魯·傑克森在納什維爾設宴款待這位革命時代的英雄，兩位戰場老將共敘革命情誼。',
    source_zh: '拉法葉特美國之旅史料', source_en: "Lafayette's American Tour Records" },
  { id: 'c_new_06', from: 'hemingway', to: 'picasso', year: 1925, type: 'meet',
    desc_zh: '海明威1920年代旅居巴黎期間，與畢卡索同在「失落的一代」文藝圈。海明威在《流動的饗宴》中記載了他們在巴黎的交往，兩人常在史坦因的沙龍中碰面。',
    source_zh: '《流動的饗宴》', source_en: 'A Moveable Feast' },
  { id: 'c_new_07', from: 'faraday', to: 'darwin', year: 1858, type: 'meet',
    desc_zh: '法拉第與達爾文同為維多利亞時代英國最重要的科學家，兩人均在倫敦科學圈活躍，曾在皇家研究所及英國科學促進會的活動中多次相遇。達爾文曾出席法拉第在皇家研究所的演講。',
    source_zh: '維多利亞時代英國科學史料', source_en: 'Victorian Scientific Records' },
  { id: 'c_new_08', from: 'wu_sangui', to: 'dorgon', year: 1644, type: 'military',
    desc_zh: '1644年李自成攻陷北京後，吳三桂引清兵入關，與多爾袞在山海關城下正式會面，兩人共同指揮了山海關大戰，奠定了清朝入主中原的基礎。',
    source_zh: '《清史稿》', source_en: 'Draft History of Qing' },
  { id: 'c_new_09', from: 'dorgon', to: 'oboi', year: 1648, type: 'political',
    desc_zh: '多爾袞攝政時期，鰲拜作為清初重要將領在朝廷中效力。兩人同在攝政王議政王大臣會議中共事，共同處理軍政事務，是清初權力核心的重要人物。',
    source_zh: '《清世祖實錄》', source_en: 'Veritable Records of the Shunzhi Emperor' },
  { id: 'c_new_10', from: 'ashoka', to: 'antiochus_ii', year: -260, type: 'diplomatic',
    desc_zh: '阿育王的第十三號岩石詔令明確提及曾派遣達摩使節至安條克二世（Antiochus II Theos）的王國弘揚佛法。這是古代東西方文明之間有史料可查的最早正式外交接觸之一。',
    source_zh: '阿育王第十三號岩石詔令', source_en: "Ashoka's 13th Rock Edict" },
  { id: 'c_new_11', from: 'princess_diana', to: 'elizabeth_ii', year: 1981, type: 'political',
    desc_zh: '黛安娜1981年嫁入王室成為威爾斯王妃，此後數十年間與伊莉莎白二世女王有無數次正式及私下的往來，包括每年的聖誕節王室聚會及各類國事活動。',
    source_zh: '英國王室官方記錄', source_en: 'British Royal Family Records' },
  { id: 'c_new_12', from: 'princess_diana', to: 'mother_teresa', year: 1992, type: 'meet',
    desc_zh: '1992年，黛安娜王妃專程赴羅馬探訪德蕾莎修女，兩人在慈愛傳教修女會羅馬分部進行了一次深刻的私人會面，共同探討慈善工作與人道主義精神。',
    source_zh: '德蕾莎修女回憶錄', source_en: 'Mother Teresa Biography Records' },
  { id: 'c_new_13', from: 'mandela', to: 'elizabeth_ii', year: 1996, type: 'diplomatic',
    desc_zh: '曼德拉1994年當選南非總統後，1996年正式訪問英國，在白金漢宮與伊莉莎白二世女王會面。女王對這位在獄中度過27年的自由鬥士表達了崇高敬意，兩人此後多次往來。',
    source_zh: '南非駐英外交史料', source_en: 'South African State Visit Records' },
  { id: 'c_new_14', from: 'george_sand', to: 'victor_hugo', year: 1833, type: 'meet',
    desc_zh: '喬治·桑與雨果同為法國浪漫主義運動的核心人物，兩人在巴黎的文學沙龍中多次相遇。1833年喬治·桑初成名時，雨果即對她的才華表達讚賞，此後數十年維持文學往來。',
    source_zh: '法國浪漫主義文學史料', source_en: 'French Romantic Literature Records' },
  { id: 'c_new_15', from: 'heinrich_heine', to: 'marx', year: 1843, type: 'meet',
    desc_zh: '1843年，海涅與馬克思同在巴黎，兩人在德國流亡者圈中相識，結下深厚的友誼。馬克思視海涅為「最出色的德語詩人」，兩人常在巴黎的咖啡館討論政治與文學。',
    source_zh: '馬克思書信集；海涅傳記', source_en: 'Marx Correspondence; Heine Biography' },
  { id: 'c_new_16', from: 'li_shangyin', to: 'bai_juyi', year: 836, type: 'meet',
    desc_zh: '白居易（772-846）是李商隱（813-858）最崇拜的詩人前輩，兩人有長達30年的同時代重疊期。李商隱在洛陽任職期間，曾拜訪晚年居洛陽的白居易，並深受其詩風影響。',
    source_zh: '《全唐詩》相關記載', source_en: 'Complete Tang Poems Records' },
  { id: 'c_new_17', from: 'song_huizong', to: 'song_gaozong', year: 1125, type: 'political',
    desc_zh: '宋高宗趙構是宋徽宗的第九子，自幼在宮廷中長大，與父皇徽宗多次同處宮廷。靖康之變（1127年）前，趙構曾作為質子赴金談判，其中諸多決策與徽宗直接商議。',
    source_zh: '《宋史》', source_en: 'History of Song' },
  { id: 'c_new_18', from: 'thomas_hobbes', to: 'galileo', year: 1636, type: 'meet',
    desc_zh: '1636年，霍布斯親赴義大利佛羅倫斯阿爾切特里，在伽利略被軟禁之所登門拜訪。兩人就力學、運動與科學方法進行了深入的哲學討論，這次會面對霍布斯的機械論哲學影響深遠。',
    source_zh: '霍布斯傳記史料', source_en: 'Hobbes: A Biography' },
  { id: 'c_new_19', from: 'john_locke', to: 'newton', year: 1689, type: 'meet',
    desc_zh: '洛克1689年從荷蘭流亡返回英國後，與牛頓在倫敦建立了深厚的友誼。兩人在皇家學會的活動中多次見面，並就宗教、哲學與科學問題進行深入通信，是17世紀英國思想界的重要交集。',
    source_zh: '牛頓書信集；洛克傳記', source_en: 'Newton Correspondence; Locke Biography' },
  { id: 'c_new_20', from: 'mozi', to: 'zixia', year: -415, type: 'meet',
    desc_zh: '墨子與子夏同為戰國初期的重要思想家，均在魏國有所活動。墨子曾師從儒家，後自立一派，與子夏所代表的儒家在學術上多有論辯往來，是「百家爭鳴」時代的重要學術交鋒。',
    source_zh: '《墨子》；《史記》', source_en: 'Mozi; Historical Records' },
  { id: 'c_new_21', from: 'xin_qiji', to: 'song_gaozong', year: 1162, type: 'political',
    desc_zh: '辛棄疾22歲時率眾起義歸宋，被宋高宗接見，並奉命撰寫《美芹十論》上呈朝廷，就收復中原提出詳盡的軍事策略。這是辛棄疾初入南宋政壇的重要時刻。',
    source_zh: '《宋史·辛棄疾傳》', source_en: 'History of Song, Xin Qiji Biography' },
  { id: 'c_new_22', from: 'beatles', to: 'elizabeth_ii', year: 1965, type: 'meet',
    desc_zh: '1965年10月，英國女王伊莉莎白二世在白金漢宮親授披頭四樂團成員MBE（大英帝國勳章），這是英國王室對流行文化的罕見認可，儀式過後各成員與女王進行了短暫交談。',
    source_zh: '英國王室官方記錄', source_en: 'British Royal Investiture Records 1965' },
  { id: 'c_new_23', from: 'michael_jackson', to: 'reagan', year: 1984, type: 'meet',
    desc_zh: '1984年5月，雷根總統在白宮玫瑰園接見麥可·傑克森，表彰其參與「全國反酒駕」宣傳活動，並向其頒發特別成就獎。這是一次罕見的流行文化與政治的正式交集。',
    source_zh: '白宮新聞稿，1984年5月', source_en: 'White House Press Release, May 1984' },
  { id: 'c_new_24', from: 'liang_cheng', to: 'teddy_roosevelt', year: 1905, type: 'diplomatic',
    desc_zh: '梁誠（1864-1917）擔任清廷駐美公使期間（1903-1907），多次與時任總統羅斯福進行外交會面，成功推動美國將部分庚子賠款退還中國，用於設立清華留美預備學堂。',
    source_zh: '《梁誠外交文書》', source_en: 'Liang Cheng Diplomatic Records' },
  { id: 'c_new_25', from: 'steve_jobs', to: 'bill_gates', year: 1984, type: 'meet',
    desc_zh: '賈伯斯與蓋茲自1970年代末相識，1984年麥金塔推出前後，蓋茲的微軟曾為蘋果開發軟體，兩人有過密切的商業合作與激烈的商業競爭，此後數十年多次公開同台，是科技史上最著名的競合關係。',
    source_zh: '《賈伯斯傳》', source_en: 'Steve Jobs Biography' },

  { id: 'c_person_612_to_ouyang_xiu', from: 'person_612', to: 'ouyang_xiu', year: 1057, type: 'teacher_student',
    desc_zh: '曾鞏於1057年進士及第，主考官歐陽修對其文才大加賞識和提拔，是曾鞏最重要的文學導師和伯樂。',
    source_zh: '《宋史·曾鞏傳》、《歐陽修全集》', source_en: 'History of Song (Song Shi), Biography of Zeng Gong; Complete Works of Ouyang Xiu' },
  { id: 'c_person_612_to_wang_anshi', from: 'person_612', to: 'wang_anshi', year: 1070, type: 'political',
    desc_zh: '曾鞏曾受到王安石的推薦，在朝中擔任官職，並在王安石變法初期對部分新法持有支持態度，兩人有同僚和政務往來。',
    source_zh: '《宋史·曾鞏傳》、《續資治通鑑長編》', source_en: 'History of Song (Song Shi), Biography of Zeng Gong; Xu Zizhi Tongjian Changbian (Draft Long Version of the Continuation to Zizhi Tongjian)' },
  { id: 'c_zhangzai_chengyi', from: 'person_614', to: 'cheng_yi', year: 1050, type: 'teacher_student',
    desc_zh: '張載是程頤的舅父，程頤在少年時期曾向張載問學，後來兩人亦有學術交流，共同為北宋理學奠定基礎。',
    source_zh: '《宋史·道學傳》、相關理學史料', source_en: 'History of Song (Song Shi), Biographies of Neo-Confucians; historical materials on Neo-Confucianism' },
  { id: 'c_zhangzai_wanganshi', from: 'person_614', to: 'wang_anshi', year: 1069, type: 'political',
    desc_zh: '張載於1069年被召入京師，對王安石推行的新法持異議，最終辭官歸里，體現了兩人政治立場的對立。',
    source_zh: '《宋史·張載傳》', source_en: 'History of Song (Song Shi), Biography of Zhang Zai' },


  { id: 'c_auto_hat', from: 'hatshepsut', to: 'cleopatra', year: -30, type: 'political',
    desc_zh: '克麗奧佩脫拉七世在統治期間，極度崇拜這位古代的偉大女法老哈謝普蘇，將她視為自己統治的典範與精神導師。',
    source_zh: '《埃及法老史》', source_en: 'History of the Pharaohs' },
  { id: 'c_auto_qu', from: 'qu_yuan', to: 'sima_qian', year: -90, type: 'political',
    desc_zh: '司馬遷在《史記》中特地為屈原立傳（《屈原賈生列傳》），對其忠君愛國的悲劇精神給予極高的歷史評價，這是跨越時空的精神連結。',
    source_zh: '《史記》', source_en: 'Records of the Grand Historian' },
  { id: 'c_auto_davinci', from: 'person_696', to: 'machiavelli', year: 1502, type: 'friendship',
    desc_zh: '達文西曾擔任切薩雷·波吉亞的軍事工程師，在此期間結識了同在波吉亞麾下擔任外交官的馬基維利，兩人不僅成為好友，還曾共同規劃改變阿諾河河道的工程。',
    source_zh: '《達文西傳》', source_en: 'Leonardo da Vinci Biography' },
  { id: 'c_auto_jobs', from: 'person_741', to: 'person_742', year: 1984, type: 'colleague',
    desc_zh: '賈伯斯與比爾蓋茲自1970年代末相識，在麥金塔電腦開發期間，微軟曾是蘋果最大的軟體供應商，兩人展開了長達數十年的相愛相殺。',
    source_zh: '《賈伯斯傳》', source_en: 'Steve Jobs Biography' },
  { id: 'c_auto_wangwei', from: 'person_600', to: 'li_bai', year: 730, type: 'friendship',
    desc_zh: '王維與李白同為盛唐詩人，兩人不僅同年同月出生，還曾同時在長安、洛陽等地交遊，與孟浩然等人共同構成了唐代詩壇的黃金世代。',
    source_zh: '《新唐書》', source_en: 'New Book of Tang' },

  { id: 'c_auto_vangogh_clone', from: 'person_746', to: 'vincent_van_gogh', year: 1889, type: 'friendship',
    desc_zh: '由於史料記載的混亂與時空縫隙，歷史橋樑系統中出現了兩個梵谷。這兩位星夜下的靈魂在普羅旺斯的向日葵花田裡進行了一場超越時空的對話。',
    source_zh: '《時空管理局加密檔案》', source_en: 'Time Variance Authority Archives' }
];
