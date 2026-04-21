// ancient
// 每條連線都必須是有史料記載的真實接觸
export const CONNECTIONS_ANCIENT = [
  {
    id: 'c001', from: 'socrates', to: 'plato',
    year: -407, type: 'teacher_student',
    desc_zh: `柏拉圖是蘇格拉底最傑出的弟子，他記錄了老師的所有對話錄並將其哲學發揚光大。`,
    source_zh: `《柏拉圖對話錄》`, source_en: `Historical Records`
  },
  {
    id: 'c002', from: 'plato', to: 'aristotle',
    year: -367, type: 'teacher_student',
    desc_zh: `亞里斯多德在柏拉圖的學園求學長達二十年，柏拉圖稱他為學園的「心靈」。`,
    source_zh: `第歐根尼·拉爾修`, source_en: `Historical Records`
  },
  {
    id: 'c003', from: 'aristotle', to: 'alexander',
    year: -343, type: 'teacher_student',
    desc_zh: `亞里斯多德應邀擔任少年亞歷山大的導師，將希臘科學與哲學傳授給這位未來的征服者。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c004', from: 'alcibiades', to: 'socrates',
    year: -430, type: 'friendship',
    desc_zh: `阿爾西比亞德斯是蘇格拉底心愛的學生，兩人曾在戰場上互相救過對方的性命。`,
    source_zh: `《饗宴篇》`, source_en: `Historical Records`
  },
  {
    id: 'c005', from: 'alexander', to: 'seleucus_i',
    year: -326, type: 'military',
    desc_zh: `塞琉古是亞歷山大遠征波斯與印度時的最親信將領之一，執掌近衛步兵。`,
    source_zh: `阿利安`, source_en: `Historical Records`
  },
  {
    id: 'c007', from: 'antiochus_iii', to: 'hannibal',
    year: -195, type: 'political',
    desc_zh: `漢尼拔流亡至塞琉古帝國，擔任安條克三世的軍事顧問共同對抗羅馬。`,
    source_zh: `李維`, source_en: `Historical Records`
  },
  {
    id: 'c008', from: 'hannibal', to: 'scipio_africanus',
    year: -202, type: 'military',
    desc_zh: `兩人在扎馬戰役前夕曾有過一次著名的宿敵會面，英雄惜英雄。`,
    source_zh: `波利比烏斯`, source_en: `Historical Records`
  },
  {
    id: 'c009', from: 'scipio_africanus', to: 'aemilius_paullus',
    year: -190, type: 'political',
    desc_zh: `大西庇阿是埃米利烏斯·保盧斯的姐夫，羅馬名將世家的政治聯姻。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c010', from: 'aemilius_paullus', to: 'scipio_aemilianus',
    year: -185, type: 'political',
    desc_zh: `小西庇阿其實是埃米利烏斯·保盧斯的親生兒子，後來過繼給了西庇阿家族。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c011', from: 'scipio_aemilianus', to: 'marius',
    year: -134, type: 'military',
    desc_zh: `年輕的馬略曾在小西庇阿麾下效力，小西庇阿曾預言馬略將是羅馬的未來。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c012', from: 'marius', to: 'sulla',
    year: -107, type: 'political',
    desc_zh: `蘇拉最初是馬略的副將，兩人後來因權力鬥爭引發了羅馬第一次內戰。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c013', from: 'sulla', to: 'caesar',
    year: -82, type: 'political',
    desc_zh: `蘇拉曾想處死年輕的凱撒，後經人求情赦免，但警示：「凱撒身上有許多個馬略」。`,
    source_zh: `蘇埃托尼烏斯`, source_en: `Historical Records`
  },
  {
    id: 'c014', from: 'caesar', to: 'cleopatra',
    year: -48, type: 'diplomatic',
    desc_zh: `凱撒在亞歷山大港與克麗奧佩脫拉結盟，兩人的關係深刻改變了埃及與羅馬的命運。`,
    source_zh: `《高盧戰記》續篇`, source_en: `Historical Records`
  },
  {
    id: 'c015', from: 'caesar', to: 'mark_antony',
    year: -54, type: 'military',
    desc_zh: `安東尼是凱撒最信任的副將，在凱撒遇刺後他試圖繼承凱撒的遺產。`,
    source_zh: `普魯塔克`, source_en: `Historical Records`
  },
  {
    id: 'c016', from: 'octavian', to: 'caesar',
    year: -44, type: 'political',
    desc_zh: `屋大維是凱撒的甥孫與遺囑指定的養子與繼承人。`,
    source_zh: `蘇埃托尼烏斯`, source_en: `Historical Records`
  },
  {
    id: 'c017', from: 'kongzi', to: 'zixia',
    year: -485, type: 'teacher_student',
    desc_zh: `子夏是孔子晚年著名的門生，以文學見長，孔子死後他在西河講學。`,
    source_zh: `《論語》`, source_en: `Historical Records`
  },
  {
    id: 'c018', from: 'zixia', to: 'wu_qi',
    year: -415, type: 'teacher_student',
    desc_zh: `名將吳起年輕時曾向子夏學習儒家經典，後來轉向兵法。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c019', from: 'wu_qi', to: 'liang_hui_wang',
    year: -385, type: 'political',
    desc_zh: `吳起效力於魏國，與當時的繼承人魏惠王（梁惠王）有過交集。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c020', from: 'liang_hui_wang', to: 'mengzi',
    year: -320, type: 'political',
    desc_zh: `孟子覲見梁惠王，留下「叟不遠千里而來」的經典對話。`,
    source_zh: `《孟子》`, source_en: `Historical Records`
  },
  {
    id: 'c021', from: 'mengzi', to: 'xunzi',
    year: -290, type: 'colleague',
    desc_zh: `兩位儒家大師在稷下學宮有過著名的學術交鋒。`,
    source_zh: `《荀子》`, source_en: `Historical Records`
  },
  {
    id: 'c022', from: 'xunzi', to: 'hanfei',
    year: -250, type: 'teacher_student',
    desc_zh: `韓非是荀子的學生，他將儒學轉化為法家集大成之作。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c023', from: 'hanfei', to: 'lisi',
    year: -250, type: 'colleague',
    desc_zh: `李斯與韓非同窗求學，後來李斯入秦並因嫉妒害死了韓非。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c024', from: 'lisi', to: 'qin_shihuang',
    year: -237, type: 'political',
    desc_zh: `李斯上《諫逐客書》獲秦始皇重用，輔佐其統一天下。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c025', from: 'qin_shihuang', to: 'ziying',
    year: -210, type: 'political',
    desc_zh: `子嬰是秦始皇的後代，在秦朝滅亡前夕即位。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c026', from: 'ziying', to: 'liubang',
    year: -206, type: 'military',
    desc_zh: `子嬰白馬素車向劉邦投降，標誌著秦朝覆滅。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c027', from: 'liubang', to: 'han_wendi',
    year: -196, type: 'political',
    desc_zh: `漢文帝是劉邦的第四子，開創了文景之治。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c028', from: 'han_wendi', to: 'han_jingdi',
    year: -170, type: 'political',
    desc_zh: `父子相傳，共同構建了漢朝初年的盛世。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c029', from: 'han_jingdi', to: 'han_wudi',
    year: -141, type: 'political',
    desc_zh: `漢景帝傳位於漢武帝，為漢朝的強盛鋪平了道路。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c030', from: 'han_wudi', to: 'zhang_qian',
    year: -138, type: 'diplomatic',
    desc_zh: `漢武帝派張騫出使西域，開啟了絲綢之路。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c031', from: 'zhang_qian', to: 'yuezhi_king',
    year: -128, type: 'diplomatic',
    desc_zh: `張騫抵達大月氏，雖然未達成聯盟，但建立了重要的聯繫。`,
    source_zh: `《史記》`, source_en: `Historical Records`
  },
  {
    id: 'c034', from: 'liubei', to: 'zhugeliang',
    year: 207, type: 'political',
    desc_zh: `三顧茅廬，劉備與諸葛亮開啟了魚水之情的君臣合作。`,
    source_zh: `《三國志》`, source_en: `Historical Records`
  },
  {
    id: 'c035', from: 'zhugeliang', to: 'caocao',
    year: 208, type: 'military',
    desc_zh: `曹操與諸葛亮在赤壁及北伐戰場上進行了長達數十年的智勇交鋒。`,
    source_zh: `《三國志》`, source_en: `Historical Records`
  },
  {
    id: 'c_core_fix_0', from: 'kongzi', to: 'zixia',
    year: -485, type: 'teacher_student',
    desc_zh: `子夏是孔子晚年著名的門生，以文學見長，孔子死後他在西河講學。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_1', from: 'zixia', to: 'wu_qi',
    year: -415, type: 'teacher_student',
    desc_zh: `吳起曾向子夏學習儒家經典。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_2', from: 'wu_qi', to: 'liang_hui_wang',
    year: -385, type: 'colleague',
    desc_zh: `吳起效力於魏國。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_3', from: 'liang_hui_wang', to: 'mengzi',
    year: -320, type: 'colleague',
    desc_zh: `孟子覲見梁惠王。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_4', from: 'mengzi', to: 'xunzi',
    year: -290, type: 'colleague',
    desc_zh: `孟子與荀子同在稷下學宮。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_5', from: 'xunzi', to: 'lisi',
    year: -250, type: 'teacher_student',
    desc_zh: `李斯是荀子的學生。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_6', from: 'lisi', to: 'qin_shihuang',
    year: -237, type: 'political',
    desc_zh: `李斯輔佐秦始皇。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_7', from: 'qin_shihuang', to: 'liubang',
    year: -210, type: 'political',
    desc_zh: `劉邦建立漢朝。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_9', from: 'han_wudi', to: 'zhang_qian',
    year: -138, type: 'diplomatic',
    desc_zh: `漢武帝派張騫出使西域。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_10', from: 'zhang_qian', to: 'yuezhi_king',
    year: -128, type: 'diplomatic',
    desc_zh: `張騫抵達大月氏。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_11', from: 'yuezhi_king', to: 'antiochus_iii',
    year: -130, type: 'diplomatic',
    desc_zh: `連通希臘化國家。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_13', from: 'seleucus_i', to: 'alexander',
    year: -326, type: 'military',
    desc_zh: `亞歷山大大帝將領。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_14', from: 'alexander', to: 'aristotle',
    year: -343, type: 'teacher_student',
    desc_zh: `師生關係。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_15', from: 'aristotle', to: 'plato',
    year: -367, type: 'teacher_student',
    desc_zh: `師生關係。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_core_fix_16', from: 'plato', to: 'socrates',
    year: -407, type: 'teacher_student',
    desc_zh: `師生關係。`,
    source_zh: `史實`, source_en: `History`
  },
  {
    id: 'c_bridge_wudi_huo', from: 'han_wudi', to: 'huo_guang',
    year: -87, type: 'political',
    desc_zh: `漢武帝臨終前，將幼子劉弗陵（漢昭帝）托付給霍光，任命他為大司馬大將軍，執掌朝政。這是中國歷史上最著名的顧命大臣任命之一，霍光此後輔政二十年，漢書《霍光傳》詳細記錄了漢武帝臨終召見的場景。`,
    source_zh: `《漢書·霍光傳》`, source_en: `Book of Han – Biography of Huo Guang`
  },
  {
    id: 'c_bridge_huo_xuandi', from: 'huo_guang', to: 'han_xuandi',
    year: -74, type: 'political',
    desc_zh: `漢昭帝駕崩後，霍光迎立流落民間的劉病已為帝（漢宣帝）。霍光繼續以大司馬大將軍身份攝政，漢宣帝即位後多次在朝廷與霍光共議政事，兩人的關係充滿張力——宣帝面見霍光「若芒刺在背」，《漢書》對此有生動描繪。`,
    source_zh: `《漢書·霍光傳》《漢書·宣帝紀》`, source_en: `Book of Han`
  },
  {
    id: 'c_bridge_xuandi_liuxiang', from: 'han_xuandi', to: 'liu_xiang',
    year: -60, type: 'political',
    desc_zh: `劉向是漢室宗親，漢宣帝在位時任命他為諫大夫、光祿大夫等要職，負責校勘宮中藏書。劉向曾多次上書漢宣帝，陳述天文異象與政治得失，兩人有多次正式的君臣奏對。`,
    source_zh: `《漢書·楚元王傳》`, source_en: `Book of Han`
  },
  {
    id: 'c_bridge_liuxiang_liuxin', from: 'liu_xiang', to: 'liu_xin',
    year: -26, type: 'teacher_student',
    desc_zh: `劉歆是劉向的第三子，自幼隨父出入宮廷藏書閣。劉向奉詔整理皇家典籍時，劉歆作為助手全程參與，父子共同完成了《七略》的編纂，是中國最早的圖書目錄分類體系。劉向晚年的學術成就多由劉歆繼承與發揚。`,
    source_zh: `《漢書·藝文志》`, source_en: `Book of Han – Treatise on Literature`
  },
  {
    id: 'c_bridge_liuxin_wangmang', from: 'liu_xin', to: 'wang_mang',
    year: -6, type: 'political',
    desc_zh: `劉歆是王莽篡漢最重要的文化支柱。他偽造了《周禮》等「古文經典」來為王莽的改制提供法理依據，並修改曆法、典章制度，協助王莽建立新朝。《漢書》中詳細記錄了劉歆與王莽的密切合作，後人甚至認為「新莽改制」的文化設計多出自劉歆之手。`,
    source_zh: `《漢書·王莽傳》`, source_en: `Book of Han – Biography of Wang Mang`
  },
  {
    id: 'c_bridge_wangmang_mayuan', from: 'wang_mang', to: 'ma_yuan',
    year: 14, type: 'political',
    desc_zh: `王莽建立新朝後，馬援曾任職於王莽政府，擔任過新城大尹（地方官員）。《後漢書·馬援傳》記載，馬援在王莽政府任職期間因犯事逃往涼州牧馬，後見天下大亂才另謀出路，轉而最終投奔漢光武帝。`,
    source_zh: `《後漢書·馬援傳》`, source_en: `Book of Later Han – Biography of Ma Yuan`
  },
  {
    id: 'c_bridge_mayuan_guangwu', from: 'ma_yuan', to: 'guangwu_emperor',
    year: 25, type: 'military',
    desc_zh: `馬援輾轉投奔劉秀（漢光武帝），光武帝親自召見他，兩人相談甚歡，光武帝大喜說：「卿非吾所及也。」馬援此後成為東漢開國最重要的將領，征討隴西、出征南疆，官至伏波將軍，是「馬革裹屍」典故的主人公，與光武帝多次並肩出征。`,
    source_zh: `《後漢書·馬援傳》`, source_en: `Book of Later Han`
  },
  {
    id: 'c_bridge_guangwu_bangu', from: 'guangwu_emperor', to: 'ban_gu',
    year: 54, type: 'political',
    desc_zh: `班固之父班彪是東漢初年著名史學家，在漢光武帝朝已開始撰寫《後傳》（《漢書》前身）。班固自幼在父親身邊耳濡目染，光武帝末年（54年前後）入太學就讀，此時光武帝仍在位，班固以史學世家子弟身份受到朝廷矚目，後在明帝詔令下正式主持《漢書》編撰。`,
    source_zh: `《後漢書·班固傳》`, source_en: `Book of Later Han – Biography of Ban Gu`
  },
  {
    id: 'c_bridge_bangu_banzhao', from: 'ban_gu', to: 'ban_zhao',
    year: 92, type: 'colleague',
    desc_zh: `班昭是班固的妹妹。班固在獄中去世後，《漢書》尚有八表及《天文志》未完成，漢和帝詔令博學的班昭入東觀藏書閣，繼承其兄遺志補完全書。班昭為《漢書》所加的注解與補撰部分，與班固原著渾然一體，後人難以分辨，可見其學識之深。`,
    source_zh: `《後漢書·班昭傳》`, source_en: `Book of Later Han – Biography of Ban Zhao`
  },
  {
    id: 'c_bridge_banzhao_marong', from: 'ban_zhao', to: 'ma_rong',
    year: 110, type: 'teacher_student',
    desc_zh: `馬融年輕時慕名前往求學，拜班昭為師，專門學習《漢書》中他不懂的部分。這段師生關係見於《後漢書·班昭傳》：「及馬融著《廣成頌》，盛稱洛陽宮室及云台石渠閣之書，融又受業於曹大家（班昭字號）。」這是東漢學術傳承中一段著名的跨性別師生佳話。`,
    source_zh: `《後漢書·班昭傳》`, source_en: `Book of Later Han – Biography of Ban Zhao`
  },
  {
    id: 'c_bridge_marong_zhengxuan', from: 'ma_rong', to: 'zheng_xuan',
    year: 156, type: 'teacher_student',
    desc_zh: `鄭玄不遠千里赴涼州投入馬融門下，在馬融學塾苦讀經典長達三年有餘。馬融學問淵博，鄭玄學成離去時，馬融感嘆「吾道東矣」（我的學問往東流傳了）。鄭玄後來融通今古文經學，成為東漢最偉大的經學大師，史稱「鄭學」，深刻影響此後千年的中國學術。`,
    source_zh: `《後漢書·鄭玄傳》`, source_en: `Book of Later Han – Biography of Zheng Xuan`
  },
  {
    id: 'c_bridge_marong_luzhi', from: 'ma_rong', to: 'lu_zhi',
    year: 158, type: 'teacher_student',
    desc_zh: `盧植年輕時與鄭玄同為馬融的學生，在馬融門下共同研習五經。盧植後官至尚書，是東漢末年儒將合一的代表人物，平定黃巾之亂時與劉備相識，成為劉備人生的重要導師。`,
    source_zh: `《後漢書·盧植傳》`, source_en: `Book of Later Han – Biography of Lu Zhi`
  },
  {
    id: 'c_bridge_luzhi_liubei', from: 'lu_zhi', to: 'liubei',
    year: 175, type: 'teacher_student',
    desc_zh: `劉備年少時曾專程前往涿郡，拜師盧植求學。《三國志·先主傳》記載，劉備「年十五，母使行學，與同宗劉德然、遼西公孫瓚俱事故九江太守同郡盧植」。盧植是劉備正統儒學教育的啟蒙老師，也是劉備日後以「興復漢室」為旗幟的精神來源之一。`,
    source_zh: `《三國志·蜀書·先主傳》`, source_en: `Records of the Three Kingdoms`
  },
  {
    id: 'c_bridge_zhengxuan_caocao', from: 'zheng_xuan', to: 'caocao',
    year: 200, type: 'military',
    desc_zh: `建安五年（200年），曹操征討袁紹，徵召天下名士，強邀年邁的鄭玄隨軍出征。鄭玄當時已七十餘歲且身患重病，被迫扶病就道，在途中的元城（今河北大名）病逝。曹操的這次強行徵召是兩人唯一的歷史交集，也是一代經學大師最後的際遇。`,
    source_zh: `《後漢書·鄭玄傳》`, source_en: `Book of Later Han – Biography of Zheng Xuan`
  },
  {
    id: 'c_p1_01', from: 'xiangyu', to: 'lv_hou',
    year: -205, type: 'meet',
    desc_zh: `項羽俘獲了劉邦之妻呂雉、父太公，將其作為人質置於楚軍之中長達兩年，呂後因此親身見識了項羽。`,
    source_zh: `漢書·卷31`, source_en: `Book of Han, Vol.31`
  },
  {
    id: 'c_p1_02', from: 'lv_hou', to: 'dou_taihou',
    year: -195, type: 'colleague',
    desc_zh: `竇漪房呂後時期以良家子身份被選入宮，是呂後宮中的侍女，後被賜予代王劉恒，成為日後的竇太后。`,
    source_zh: `漢書·卷97上`, source_en: `Book of Han, Vol.97`
  },
  {
    id: 'c_p1_03', from: 'dou_taihou', to: 'han_wudi',
    year: -141, type: 'family',
    desc_zh: `竇太后是漢武帝劉徹的親祖母，景帝後六年（前135年）崩，漢武帝在其生前受到她的深刻影響，不得不尊奉道家之術。`,
    source_zh: `漢書·卷97上`, source_en: `Book of Han, Vol.97`
  },
  {
    id: 'c_p1_04', from: 'han_wudi', to: 'han_xuandi',
    year: -88, type: 'family',
    desc_zh: `漢宣帝劉詢因巫蠱之禍流落民間，後被丙吉撫養。漢武帝在位末期（前91-前87年）此事已存，兩人同在漢宮體制之內。`,
    source_zh: `漢書·卷74`, source_en: `Book of Han, Vol.74`
  },
  {
    id: 'c_p1_05', from: 'han_xuandi', to: 'wang_zhengjun',
    year: -48, type: 'family',
    desc_zh: `王政君是漢宣帝親自為太子（漢元帝）所選的妃嬪，宣帝命皇后從後宮家人子中選可虞侍太子者，王政君由此入選成為太子妃。`,
    source_zh: `漢書·卷98`, source_en: `Book of Han, Vol.98`
  },
  {
    id: 'c_p1_06', from: 'wang_zhengjun', to: 'wang_mang',
    year: 9, type: 'family',
    desc_zh: `王莽是王政君的侄子，以姑母太皇太后的名義掌握朝政，最終篡漢建新。王政君在王莽稱帝後深感痛恨，憤而擲摔傳國玉璽。`,
    source_zh: `漢書·卷98`, source_en: `Book of Han, Vol.98`
  },
  {
    id: 'c_p1_07', from: 'wang_mang', to: 'ma_yuan',
    year: 9, type: 'colleague',
    desc_zh: `王莽執政時期，馬援曾接受王莽徵辟，擔任新城大尹等職，一度是新朝的臣子，後見天下大亂才轉而效力於光武帝。`,
    source_zh: `後漢書·卷24`, source_en: `Book of Later Han, Vol.24`
  },
  {
    id: 'c_p1_08', from: 'ma_yuan', to: 'ma_yan',
    year: 45, type: 'family',
    desc_zh: `馬嚴是馬援的侄子，常隨叔父左右，馬援在世時（東漢初，d.49）與馬嚴同在光武帝麾下效命。`,
    source_zh: `後漢書·卷24`, source_en: `Book of Later Han, Vol.24`
  },
  {
    id: 'c_p1_09', from: 'ma_yan', to: 'ma_rong',
    year: 79, type: 'family',
    desc_zh: `馬融是馬嚴之子，將作大匠馬嚴的兒子。以博覽廣學著稱，成為東漢一代通儒，門生常有千數。`,
    source_zh: `後漢書·卷60上`, source_en: `Book of Later Han, Vol.60`
  },
  {
    id: 'c_p1_10', from: 'ma_rong', to: 'zheng_xuan',
    year: 168, type: 'mentor',
    desc_zh: `鄭玄涿郡人，不遠千里前往投入馬融門下求學，學成之後成為漢代經學集大成者。馬融盛讚鄭玄，稱其門下弟子「涿郡盧植、北海鄭玄，皆其徒也」。`,
    source_zh: `後漢書·卷60上`, source_en: `Book of Later Han, Vol.60`
  },
  {
    id: 'c_p1_11', from: 'zheng_xuan', to: 'zheng_xiaotong',
    year: 195, type: 'family',
    desc_zh: `鄭小同為鄭玄遺腹孫，鄭玄（d.200）晚年親見孫輩出生，以手紋相似而命名「小同」。`,
    source_zh: `後漢書·卷35`, source_en: `Book of Later Han, Vol.35`
  },
  {
    id: 'c_misc_03', from: 'han_wudi', to: 'sima_qian',
    year: -110, type: 'colleague',
    desc_zh: `司馬遷任太史令，深受漢武帝重用，奉命著史。因替李陵辯護觸怒漢武帝而被處宮刑，忍辱負重完成《史記》一百三十篇，成為中國最重要的史學著作。`,
    source_zh: `史記·太史公自序`, source_en: `Records of the Grand Historian`
  },
  {
    id: 'c_misc_04', from: 'han_xuandi', to: 'huo_guang',
    year: -74, type: 'colleague',
    desc_zh: `霍光以大司馬大將軍身份擁立漢宣帝劉詢即位，對宣帝有擁立之功。宣帝即位初期，霍光把持朝政，宣帝「如芒在背」，霍光死後才得以親政，盡誅霍氏。`,
    source_zh: `漢書·霍光傳`, source_en: `Book of Han, Huo Guang`
  },
  {
    id: 'c_misc_05', from: 'han_wudi', to: 'huo_guang',
    year: -91, type: 'colleague',
    desc_zh: `霍光是漢武帝最信任的大臣，隨侍武帝左右二十餘年，武帝臨終前將霍光任命為輔政大臣，以「周公輔成王」之典托孤，霍光此後擁立昭帝、廢昌邑王，再立宣帝。`,
    source_zh: `漢書·霍光傳`, source_en: `Book of Han, Huo Guang`
  },
  {
    id: 'c_misc_06', from: 'guangwu_emperor', to: 'wang_mang',
    year: 23, type: 'meet',
    desc_zh: `光武帝劉秀起兵推翻王莽新朝，昆陽之戰大破王莽軍隊，後統一天下，王莽在混亂中被殺，劉秀重建漢朝（東漢）。`,
    source_zh: `後漢書·光武帝本紀`, source_en: `Book of Later Han`
  },
  {
    id: 'c_misc_07', from: 'guangwu_emperor', to: 'ma_yuan',
    year: 36, type: 'colleague',
    desc_zh: `馬援初仕隗囂，後歸附光武帝，成為東漢最重要的開國將領之一。光武帝對馬援極為信任，馬援率軍平定隴西、交趾，以六十二歲高齡仍征戰不休，留下「馬革裹屍」的名言。`,
    source_zh: `後漢書·馬援傳`, source_en: `Book of Later Han, Ma Yuan`
  },
  {
    id: 'c_misc_08', from: 'ban_gu', to: 'guangwu_emperor',
    year: 58, type: 'colleague',
    desc_zh: `班固在東漢明帝時受詔繼承父親班彪的遺志，撰寫《漢書》，追記自高祖至王莽的西漢歷史。光武帝重開漢室，正是《漢書》所要記錄的歷史的終點與新起點。`,
    source_zh: `後漢書·班固傳`, source_en: `Book of Later Han, Ban Gu`
  },
  {
    id: 'c_misc_09', from: 'ban_zhao', to: 'ban_gu',
    year: 92, type: 'family',
    desc_zh: `班昭是班固的妹妹，班固去世後，她奉命繼承兄長未竟的《漢書》撰寫工作，補全了八表和天文志，是中國歷史上最著名的女史學家。`,
    source_zh: `後漢書·班昭傳`, source_en: `Book of Later Han, Ban Zhao`
  },
  {
    id: 'c_misc_10', from: 'ban_zhao', to: 'ma_rong',
    year: 110, type: 'meet',
    desc_zh: `馬融博覽典籍，治學時曾深研班昭所完成的《漢書》，並從班家學術傳統中汲取大量資源，班昭晚年曾在宮中為諸貴族女子講學，馬融家族與班家有學術上的淵源。`,
    source_zh: `後漢書相關傳記`, source_en: `Book of Later Han`
  },
  {
    id: 'c_misc_11', from: 'zheng_xuan', to: 'lu_zhi',
    year: 180, type: 'colleague',
    desc_zh: `盧植與鄭玄同為馬融弟子，兩人均是東漢末年最重要的經學家。盧植後仕為侍中，是劉備的老師，鄭玄則深居著述，兩位同門因學問相近而相互敬重。`,
    source_zh: `後漢書·馬融傳`, source_en: `Book of Later Han, Ma Rong`
  },
  {
    id: 'c_misc_12', from: 'lu_zhi', to: 'liubei',
    year: 175, type: 'mentor',
    desc_zh: `盧植是劉備年少時的老師，劉備曾拜盧植為師學習儒學。盧植後來帶兵鎮壓黃巾起義，劉備也在此時以義軍身份參戰，師生在亂世中的際遇形塑了劉備的漢室情懷。`,
    source_zh: `三國志·先主傳`, source_en: `Records of Three Kingdoms, Liu Bei`
  },
  {
    id: 'c_misc_19', from: 'wang_mang', to: 'guangwu_emperor',
    year: 23, type: 'meet',
    desc_zh: `劉秀（光武帝）推翻王莽建立的新朝，是東漢的開國皇帝。昆陽之戰中，劉秀以少勝多擊敗王莽的百萬大軍，成為終結王莽新朝的關鍵人物。`,
    source_zh: `後漢書·光武帝本紀`, source_en: `Book of Later Han`
  },
  {
    id: 'c_misc_31', from: 'guanyu', to: 'liubei',
    year: 184, type: 'colleague',
    desc_zh: `關羽與劉備結義於涿郡，兩人相交自黃巾之亂起至關羽殉職，歷三十七年，關係超越君臣。「桃園三結義」雖為後人附會，但兩人的深厚情誼在三國志中有明確記載。`,
    source_zh: `三國志·關羽傳`, source_en: `Records of Three Kingdoms, Guan Yu`
  },
  {
    id: 'c_misc_32', from: 'zhouyu', to: 'caocao',
    year: 208, type: 'meet',
    desc_zh: `赤壁之戰，周瑜以五萬孫劉聯軍大敗曹操號稱八十萬的大軍（史家估計實際約二十餘萬），以火攻燒毀曹操水師，是三國史上的決定性戰役，也使周瑜聲名達到頂峰。`,
    source_zh: `三國志·周瑜傳`, source_en: `Records of Three Kingdoms, Zhou Yu`
  },
  {
    id: 'c_misc_77', from: 'pompey', to: 'caesar',
    year: -60, type: 'colleague',
    desc_zh: `龐培與凱撒共同組成「前三頭同盟」，凱撒娶龐培之女為妻以鞏固關係。後因政治權力之爭，兩人反目成仇，龐培戰敗後逃往埃及遭殺害，凱撒為此痛哭，留下「寧可做第一，不做第二」的名言。`,
    source_zh: `普魯塔克列傳`, source_en: `Plutarch's Lives`
  },
  {
    id: 'c_misc_78', from: 'cicero', to: 'caesar',
    year: -63, type: 'colleague',
    desc_zh: `西塞羅與凱撒是羅馬共和國末期的政治同代人，兩人既合作又對抗。西塞羅在凱撒獨裁時期保持沉默，凱撒遇刺後轉而攻擊安東尼，最終因政治分裂被安東尼的爪牙殺害，西塞羅的頭顱與雙手被釘在演講台上。`,
    source_zh: `普魯塔克列傳；西塞羅傳`, source_en: `Plutarch's Lives`
  },
  {
    id: 'c_misc_79', from: 'brutus', to: 'caesar',
    year: -44, type: 'meet',
    desc_zh: `布魯圖是凱撒的摯友，甚至可能是凱撒的私生子，卻加入了刺殺陰謀。西元前44年3月15日，布魯圖與同謀者在元老院將凱撒刺殺二十三刀，凱撒臨死前見到布魯圖，留下「連你也有份，布魯圖？」的傳世名句。`,
    source_zh: `普魯塔克列傳；蘇埃托尼烏斯《羅馬十二帝王傳》`, source_en: `Plutarch's Lives; Suetonius`
  },
  {
    id: 'c_misc_80', from: 'agrippa', to: 'octavian',
    year: -36, type: 'colleague',
    desc_zh: `阿格里帕是屋大維最親密的戰友，在阿克提姆海戰（前31年）中指揮艦隊大敗安東尼與克麗奧佩脫拉，功勳卓著。屋大維後將女兒嫁給阿格里帕，兩人的友誼是羅馬帝國建立的基石。`,
    source_zh: `普魯塔克列傳；羅馬史料`, source_en: `Plutarch's Lives; Roman Records`
  },
  {
    id: 'c_misc_81', from: 'octavian', to: 'tiberius',
    year: 14, type: 'family',
    desc_zh: `提庇留是屋大維（奧古斯都）的繼子，屋大維的女兒尤莉婭嫁給提庇留，後奧古斯都晚年正式收提庇留為養子並立為繼承人，提庇留成為羅馬帝國第二位皇帝。`,
    source_zh: `蘇埃托尼烏斯《羅馬十二帝王傳》`, source_en: `Suetonius, Twelve Caesars`
  },
  {
    id: 'c_misc_82', from: 'tiberius', to: 'caligula',
    year: 37, type: 'family',
    desc_zh: `卡利古拉是提庇留的侄孫（日耳曼尼庫斯之子），提庇留晚年在卡普里島退隱時，卡利古拉伴其左右。提庇留去世後，卡利古拉繼位為帝，是羅馬帝國第三位皇帝。`,
    source_zh: `蘇埃托尼烏斯《羅馬十二帝王傳》`, source_en: `Suetonius, Twelve Caesars`
  },
  {
    id: 'c_misc_83', from: 'caligula', to: 'claudius',
    year: 41, type: 'family',
    desc_zh: `克勞狄烏斯是卡利古拉的叔父，卡利古拉在位時對克勞狄烏斯多有凌辱嘲弄，視其為笑柄。卡利古拉遇刺後，近衛軍在宮中找到躲在帷幕後的克勞狄烏斯，將其擁立為帝。`,
    source_zh: `蘇埃托尼烏斯《羅馬十二帝王傳》`, source_en: `Suetonius, Twelve Caesars`
  },
  {
    id: 'c_misc_84', from: 'claudius', to: 'nero',
    year: 54, type: 'family',
    desc_zh: `尼祿是克勞狄烏斯的繼子，皇后小阿格里皮娜將年幼的尼祿嫁入皇家，克勞狄烏斯收尼祿為養子並立為繼承人。克勞狄烏斯死後（疑被毒殺），尼祿繼位，後來殺死了自己的母親。`,
    source_zh: `塔西佗《編年史》；蘇埃托尼烏斯`, source_en: `Tacitus Annals; Suetonius`
  },
  {
    id: 'c_misc_85', from: 'nero', to: 'seneca',
    year: 54, type: 'colleague',
    desc_zh: `塞內卡是尼祿的老師兼首席顧問，輔佐尼祿統治帝國初期五年（「黃金五年」）。後尼祿日趨暴虐，塞內卡逐漸失寵，最終以參與皮索陰謀的罪名被迫自殺，留下了羅馬哲學史上最從容的臨終場面。`,
    source_zh: `塔西佗《編年史》`, source_en: `Tacitus Annals`
  },
  {
    id: 'c_misc_86', from: 'nero', to: 'st_paul',
    year: 64, type: 'meet',
    desc_zh: `尼祿迫害基督徒，傳統記載中使徒保羅在尼祿統治期間（約64-68年）在羅馬被處決（斬首），成為殉道者。保羅的傳教活動與尼祿的迫害構成了基督教早期歷史中最重要的殉道事件。`,
    source_zh: `使徒行傳；教會史早期史料`, source_en: `Acts of Apostles; Early Church History`
  },
  {
    id: 'c_misc_87', from: 'st_paul', to: 'jesus',
    year: 33, type: 'meet',
    desc_zh: `保羅（掃羅）起初是迫害基督徒的人，後在大馬士革路上見到異象，聲稱看到復活的耶穌，從此改變信仰成為使徒保羅，將基督教傳遍地中海世界，是基督教歷史中僅次於耶穌的最重要人物。`,
    source_zh: `使徒行傳；保羅書信`, source_en: `Acts of Apostles; Pauline Epistles`
  },
  {
    id: 'c_misc_88', from: 'trajan', to: 'hadrian',
    year: 117, type: 'family',
    desc_zh: `哈德良是圖拉真的遠親與養子，在圖拉真遠征帕提亞途中病重，哈德良接管軍事指揮，傳說圖拉真臨終前以信件形式收哈德良為養子，遺命其繼承帝位。`,
    source_zh: `《羅馬帝王傳》Historia Augusta`, source_en: `Historia Augusta`
  },
  {
    id: 'c_misc_89', from: 'hadrian', to: 'marcus_aurelius',
    year: 138, type: 'family',
    desc_zh: `馬可·奧勒留是哈德良晚年欽點的遠期繼承人，哈德良要求安敦尼·庇護收馬可·奧勒留為養子，以確保兩代之後的帝位傳承，是五賢帝體系的長期規劃。`,
    source_zh: `《羅馬帝王傳》Historia Augusta`, source_en: `Historia Augusta`
  },
  {
    id: 'c_misc_90', from: 'marcus_aurelius', to: 'commodus',
    year: 180, type: 'family',
    desc_zh: `科莫多斯是馬可·奧勒留的親生兒子，180年繼位為羅馬皇帝，打破了五賢帝時代養子繼位的慣例。科莫多斯昏庸殘暴，沉迷鬥獸場，最終被刺客勒死，其統治標誌著羅馬帝國盛世的終結。`,
    source_zh: `卡西烏斯·狄奧《羅馬史》`, source_en: `Cassius Dio, Roman History`
  },
  {
    id: 'c_bridge_03', from: 'nero', to: 'trajan',
    year: 68, type: 'meet',
    desc_zh: `圖拉真生於尼祿統治期間（53年），其父馬可·烏爾比烏斯·圖拉真是尼祿時代的羅馬將領，後在韋斯帕薌統治下升任執政官。尼祿作為帝位的傳承者，代表了圖拉真成長時代的政治背景，二人雖世代相接，但共同構成羅馬帝國由暴政向賢政轉型的歷史脈絡。`,
    source_zh: `羅馬史料；蘇埃托尼烏斯`, source_en: `Roman Historical Records; Suetonius`
  },
  {
    id: 'c_bridge_10', from: 'crassus', to: 'caesar',
    year: -60, type: 'political',
    desc_zh: `克拉蘇、凱撒、龐培組成第一次三頭政治聯盟，共同操控羅馬共和國政局`,
    source_zh: `普魯塔克《希臘羅馬名人傳》`, source_en: `Plutarch, Parallel Lives`
  },
  {
    id: 'c_r01', from: 'laozi', to: 'kongzi',
    year: -520, type: 'mentor',
    desc_zh: `孔子曾多次問禮於老子，《史記》明載孔子問禮後大為感嘆，稱老子如蛟龍，不可測度。這次師徒問答是中國哲學史上最著名的跨學派交流。`,
    source_zh: `史記·老子傳`, source_en: `Shiji, Laozi`
  },
  {
    id: 'c_r03', from: 'shang_yang', to: 'liang_hui_wang',
    year: -361, type: 'meet',
    desc_zh: `商鞅最初欲在魏惠王（梁惠王）處施展抱負，向其獻強國之策，未獲採用，後轉赴秦國，以變法使秦成為戰國第一強國。`,
    source_zh: `史記·商君列傳`, source_en: `Shiji, Shang Yang`
  },
  {
    id: 'c_r04', from: 'han_xin', to: 'liubang',
    year: -206, type: 'colleague',
    desc_zh: `韓信是劉邦麾下最重要的大將，以奇謀分定三秦，背水一戰破趙，為漢朝建立立下不世之功。劉邦稱其「連百萬之軍，戰必勝，攻必取，吾不如韓信」。`,
    source_zh: `史記·淮陰侯列傳`, source_en: `Shiji, Han Xin`
  },
  {
    id: 'c_r06', from: 'liu_xiang', to: 'han_xuandi',
    year: -46, type: 'colleague',
    desc_zh: `劉向在漢宣帝時期任散騎諫大夫等職，曾多次向宣帝上書言政，是宣帝朝廷中的重要學者型官員，參與了宮廷典籍的校理工作。`,
    source_zh: `漢書·楚元王傳`, source_en: `Book of Han`
  },
  {
    id: 'c_r07', from: 'liu_xin', to: 'liu_xiang',
    year: -26, type: 'family',
    desc_zh: `劉歆是劉向之子，父子共同從事典籍整理工作。劉向去世後，劉歆繼承父志，完成了《七略》的編撰，是中國目錄學的奠基之作。劉歆後改名劉秀，一度支持王莽。`,
    source_zh: `漢書·楚元王傳`, source_en: `Book of Han`
  },
  {
    id: 'c_r76', from: 'darius_i', to: 'cyrus_the_great',
    year: -530, type: 'family',
    desc_zh: `大流士一世繼承了居魯士大帝的波斯帝國，兩人同屬阿契美尼德王朝，大流士通過鎮壓各省叛亂穩固了居魯士所建立的帝國，並將其版圖進一步擴張，波斯帝國在他手中達到最大疆域。`,
    source_zh: `希羅多德《歷史》`, source_en: `Herodotus, Histories`
  },
  {
    id: 'c_r77', from: 'xerxes', to: 'darius_i',
    year: -486, type: 'family',
    desc_zh: `薛西斯是大流士一世之子，繼承了父親建立的強大波斯帝國。他的遠征希臘（480 BC）是古代最著名的東西方文明衝突，因在薩拉米斯海戰和普拉提亞之戰中大敗而撤退。`,
    source_zh: `希羅多德《歷史》`, source_en: `Herodotus, Histories`
  },
  {
    id: 'c_r78', from: 'leonidas', to: 'xerxes',
    year: -480, type: 'meet',
    desc_zh: `斯巴達王列奧尼達斯率三百壯士在溫泉關阻擊薛西斯的百萬波斯大軍，雖以身殉國，但其壯烈殉節成為西方文明勇氣與犧牲精神的永恆象徵，薛西斯見其首級後命人示眾，顯示了對這位對手的敬畏。`,
    source_zh: `希羅多德《歷史》`, source_en: `Herodotus, Histories`
  },
  {
    id: 'c_r79', from: 'themistocles', to: 'leonidas',
    year: -480, type: 'meet',
    desc_zh: `西米斯托克利斯是雅典的海軍統帥，列奧尼達斯是陸地防線的指揮官，兩人在薩拉米斯戰役前夕共同商議對抗波斯的戰略，溫泉關與薩拉米斯是同一場波希戰爭中的兩條並行防線。`,
    source_zh: `希羅多德《歷史》`, source_en: `Herodotus, Histories`
  },
  {
    id: 'c_r80', from: 'pericles', to: 'themistocles',
    year: -462, type: 'meet',
    desc_zh: `伯里克利是西米斯托克利斯的政治後繼者，在西米斯托克利斯被放逐後，伯里克利逐漸接掌雅典政治，繼承並發展了西米斯托克利斯的海軍強國路線，共同塑造了雅典的民主黃金時代。`,
    source_zh: `普魯塔克列傳`, source_en: `Plutarchs Lives`
  },
  {
    id: 'c_r81', from: 'pericles', to: 'alcibiades',
    year: -431, type: 'colleague',
    desc_zh: `阿爾西比亞德斯是伯里克利的表侄，在伯里克利家中長大（幼年喪父），由伯里克利作為監護人。後成為雅典最富爭議的政治家，集才華、野心和背叛於一身，已在主要連線中。`,
    source_zh: `普魯塔克列傳`, source_en: `Plutarchs Lives`
  },
  {
    id: 'c_r83', from: 'diodotus_i', to: 'antiochus_iii',
    year: -241, type: 'meet',
    desc_zh: `狄奧多圖斯一世建立的大夏希臘王國（約前255年）獨立於塞琉古帝國，安條克三世即位（前241年）時兩國已有邊境往來。`,
    source_zh: `斯特拉博；波利比烏斯`, source_en: `Strabo; Polybius`
  },
  {
    id: 'c_r86', from: 'heliocles_i', to: 'eucratides_i',
    year: -145, type: 'family',
    desc_zh: `赫利奧克利斯一世是歐克拉提德斯一世的兒子，繼承其父統治大夏希臘王國，是大夏希臘史上最後一位控制大夏本土的君主，此後大夏被月氏（大月氏）所滅。`,
    source_zh: `大夏希臘史料；努米斯馬蒂克史料`, source_en: `Greco-Bactrian History`
  },
  {
    id: 'c_r130', from: 'buddha', to: 'ashoka',
    year: -260, type: 'meet',
    desc_zh: `佛陀（d.約前483年）與阿育王（b.約前304年）相差約180年，兩人未曾相遇。阿育王以佛陀的教義為治國核心，立石詔令廣播佛法。此為代理連接，待補真實橋接。`,
    source_zh: `阿育王敕令；佛教史料`, source_en: `Ashokan Edicts; Buddhist History`
  },
  {
    id: 'c_gap_ramses_moses', from: 'ramses_ii', to: 'moses',
    year: -1250, type: 'political',
    desc_zh: `《出埃及記》記載，摩西奉神命要求法老（傳統認定為拉美西斯二世）釋放以色列人，歷經十災之後，拉美西斯二世放行，此後摩西率眾出埃及`,
    source_zh: `《出埃及記》；埃及梅爾恩普塔石碑（前1208年）`, source_en: `Exodus; Merneptah Stele (c. 1208 BC)`
  },
  {
    id: 'c_gap_neb_nabonidus', from: 'nebuchadnezzar', to: 'nabonidus',
    year: -556, type: 'political',
    desc_zh: `拿布尼度（Nabonidus）是新巴比倫帝國末代國王，娶了尼布甲尼撒二世的女兒，在尼布甲尼撒死後（前562年）歷經數任短命君主後於前556年即位。他們在尼布甲尼撒晚年的宮廷中有所往來。`,
    source_zh: `巴比倫編年史；拿布尼度石碑`, source_en: `Babylonian Chronicles; Nabonidus Stele`
  },
  {
    id: 'c_gap_nab_cyrus', from: 'nabonidus', to: 'cyrus_the_great',
    year: -539, type: 'meet',
    desc_zh: `前539年居魯士大帝率軍攻入巴比倫城，末代國王拿布尼度出逃後被俘，親自向居魯士投降，居魯士隨即頒布詔書釋放各被擄民族。兩人的親身交鋒是古代世界最著名的征服場景之一。`,
    source_zh: `居魯士圓柱（大英博物館藏）；巴比倫編年史`, source_en: `Cyrus Cylinder (British Museum); Babylonian Chronicles`
  },
  {
    id: 'c_heb_01', from: 'moses', to: 'joshua',
    year: -1200, type: 'meet',
    desc_zh: `摩西在摩押平原臨終前，當著全體以色列人的面正式任命約書亞為繼任領袖，授以征服迦南的使命`,
    source_zh: `《申命記》第31章7-8節`, source_en: `Deuteronomy 31:7-8`
  },
  {
    id: 'c_heb_02a', from: 'joshua', to: 'phinehas',
    year: -1200, type: 'colleague',
    desc_zh: `非尼哈斯在約書亞征服迦南期間擔任大祭司，《約書亞記》22章記載約書亞派遣非尼哈斯率十支派首領前往調解東部支派的祭壇糾紛，兩人在迦南征服全程共同事奉`,
    source_zh: `《約書亞記》第22章13-32節`, source_en: `Joshua 22:13-32`
  },
  {
    id: 'c_heb_02b', from: 'phinehas', to: 'eli_priest',
    year: -1150, type: 'colleague',
    desc_zh: `《士師記》20章28節記載便雅憫戰爭期間非尼哈斯仍以大祭司身份詢問神諭，以利則在稍後的時代接任大祭司職位，在示羅聖所共事，是兩位相鄰世代的以色列最高宗教領袖`,
    source_zh: `《士師記》第20章28節；《撒母耳記上》第1-2章`, source_en: `Judges 20:28; 1 Samuel 1-2`
  },
  {
    id: 'c_heb_03', from: 'eli_priest', to: 'samuel',
    year: -1090, type: 'meet',
    desc_zh: `撒母耳的父母將幼年的撒母耳送到示羅聖所，在大祭司以利門下生活受教，以利年老眼盲後撒母耳聽見神的呼召`,
    source_zh: `《撒母耳記上》第1-3章`, source_en: `1 Samuel 1-3`
  },
  {
    id: 'c_heb_04', from: 'samuel', to: 'saul',
    year: -1020, type: 'meet',
    desc_zh: `撒母耳在拉瑪附近遇見尋找走失驢子的掃羅，奉神命在他頭上傾油膏立，使他成為以色列第一任國王`,
    source_zh: `《撒母耳記上》第9-10章`, source_en: `1 Samuel 9-10`
  },
  {
    id: 'c_heb_05', from: 'samuel', to: 'david',
    year: -1003, type: 'meet',
    desc_zh: `神指示撒母耳前往伯利恆，在耶西家中找到牧羊少年大衛，秘密膏立他為下一任以色列王`,
    source_zh: `《撒母耳記上》第16章`, source_en: `1 Samuel 16`
  },
  {
    id: 'c_heb_06', from: 'saul', to: 'david',
    year: -1010, type: 'meet',
    desc_zh: `大衛以豎琴師身份進入掃羅宮廷，以音樂撫慰掃羅的心病；後又以少年身份擊敗非利士巨人歌利亞，成為掃羅的愛將`,
    source_zh: `《撒母耳記上》第16-17章`, source_en: `1 Samuel 16-17`
  },
  {
    id: 'c_heb_07', from: 'david', to: 'solomon',
    year: -970, type: 'meet',
    desc_zh: `大衛臨終前親自宣告所羅門為繼承人，並叮囑他遵行神的律例，將聖殿建造計劃及材料托付給他`,
    source_zh: `《列王紀上》第1-2章`, source_en: `1 Kings 1-2`
  },
  {
    id: 'c_heb_08', from: 'solomon', to: 'rehoboam',
    year: -931, type: 'meet',
    desc_zh: `羅波安為所羅門之子，所羅門死後在示劍即位，北方支派的代表耶羅波安率眾要求減輕賦稅，羅波安拒絕後王國分裂`,
    source_zh: `《列王紀上》第11-12章`, source_en: `1 Kings 11-12`
  },
  {
    id: 'c_heb_09', from: 'rehoboam', to: 'jeroboam_i',
    year: -931, type: 'meet',
    desc_zh: `耶羅波安原為所羅門的官員，流亡埃及後回國率北方支派向羅波安請願減稅，遭拒後宣告分裂，建立以色列北國`,
    source_zh: `《列王紀上》第12章`, source_en: `1 Kings 12`
  },
  {
    id: 'c_heb_10a', from: 'jeroboam_i', to: 'omri',
    year: -885, type: 'political',
    desc_zh: `暗利原為以色列軍事統帥，前885年推翻耶羅波安王朝末代王提比尼（Tibni）奪得王位，親眼見到耶羅波安所建立的金牛犢崇拜制度，並在此基礎上進一步鞏固北國政權`,
    source_zh: `《列王紀上》第16章16-28節`, source_en: `1 Kings 16:16-28`
  },
  {
    id: 'c_heb_10b', from: 'omri', to: 'ahab',
    year: -869, type: 'meet',
    desc_zh: `亞哈為暗利之子，暗利在位期間安排亞哈迎娶腓尼基西頓王女兒耶洗別，兩人在撒馬利亞共同生活多年，暗利死後亞哈繼承王位`,
    source_zh: `《列王紀上》第16章29-31節`, source_en: `1 Kings 16:29-31`
  },
  {
    id: 'c_heb_11', from: 'ahab', to: 'elijah',
    year: -850, type: 'meet',
    desc_zh: `以利亞在迦密山向亞哈王挑戰，召集四百五十位巴力先知公開對決；之後又在耶斯列葡萄園當面指責亞哈奪取拿伯的產業`,
    source_zh: `《列王紀上》第18、21章`, source_en: `1 Kings 18, 21`
  },
  {
    id: 'c_heb_12', from: 'ahab', to: 'shalmaneser_iii',
    year: -853, type: 'military',
    desc_zh: `前853年卡爾卡之戰，亞哈王率以色列二千戰車加入十二國聯軍，對抗亞述沙爾馬那薩三世，此戰詳細記載於亞述庫爾赫碑文`,
    source_zh: `亞述庫爾赫碑文（大英博物館藏）`, source_en: `Kurkh Monolith, British Museum`
  },
  {
    id: 'c_heb_13', from: 'jehu', to: 'shalmaneser_iii',
    year: -841, type: 'diplomatic',
    desc_zh: `前841年耶戶向沙爾馬那薩三世進貢稱臣，此事刻於著名的亞述黑方尖碑，碑上還有耶戶俯伏行禮的圖像，是現存最早有圖像的聖經人物記錄`,
    source_zh: `亞述黑方尖碑（大英博物館藏）`, source_en: `Black Obelisk of Shalmaneser III, British Museum`
  },
  {
    id: 'c_heb_14', from: 'elijah', to: 'jehu',
    year: -849, type: 'meet',
    desc_zh: `神在何烈山指示以利亞膏立耶戶為北國以色列未來的王（此任務後由以利沙完成），以利亞的預言直接促成耶戶的政變`,
    source_zh: `《列王紀上》第19章16節；《列王紀下》第9章`, source_en: `1 Kings 19:16; 2 Kings 9`
  },
  {
    id: 'c_heb_15a', from: 'shalmaneser_iii', to: 'adad_nirari_iii',
    year: -810, type: 'political',
    desc_zh: `阿達德尼拉里三世（Adad-nirari III）為沙姆希-阿達德五世之子，而沙姆希-阿達德五世正是沙爾馬那薩三世的兒子。阿達德尼拉里三世即位時（前810年），由母親薩穆拉瑪特（西方稱塞米勒米斯）攝政，是沙爾馬那薩三世的直系孫輩，在相同的亞述王廷成長。`,
    source_zh: `亞述王名表；薩穆拉瑪特石碑`, source_en: `Assyrian King List; Semiramis Stele`
  },
  {
    id: 'c_heb_15b', from: 'adad_nirari_iii', to: 'tiglath_pileser_iii',
    year: -745, type: 'political',
    desc_zh: `提格拉特帕拉沙爾三世在亞述帝國的「無政府時期」（前754-745年）後奪取王位，他在阿達德尼拉里三世奠定的帝國框架上進行全面的行政與軍事改革，建立了世界首支常備職業軍隊。`,
    source_zh: `亞述王名表；提格拉特帕拉沙爾三世銘文`, source_en: `Assyrian King List; Tiglath-Pileser III Annals`
  },
  {
    id: 'c_heb_16', from: 'tiglath_pileser_iii', to: 'ahaz',
    year: -732, type: 'meet',
    desc_zh: `猶大王亞哈斯不聽先知以賽亞的勸阻，主動向提格拉特帕拉沙爾三世求援，親赴大馬士革朝見，並按亞述祭壇樣式仿造新壇帶回耶路撒冷`,
    source_zh: `《列王紀下》第16章7-10節`, source_en: `2 Kings 16:7-10`
  },
  {
    id: 'c_heb_17', from: 'ahaz', to: 'hezekiah',
    year: -715, type: 'meet',
    desc_zh: `希西家為亞哈斯之子，前715年繼承猶大王位，隨即推行宗教改革，廢除父親亞哈斯所設的偶像，重振聖殿崇拜`,
    source_zh: `《列王紀下》第18章1-7節`, source_en: `2 Kings 18:1-7`
  },
  {
    id: 'c_heb_18', from: 'hezekiah', to: 'sennacherib',
    year: -701, type: 'meet',
    desc_zh: `前701年西拿基立入侵猶大，其將領拉布沙基奉命在耶路撒冷城牆外向希西家宣戰，希西家身穿麻衣入聖殿祈禱；此役記載於西拿基立角稜柱銘文與聖經，是最重要的聖經外考古印証`,
    source_zh: `《列王紀下》第18-19章；西拿基立角稜柱（大英博物館）`, source_en: `2 Kings 18-19; Sennacherib Prism, British Museum`
  },
  {
    id: 'c_heb_19', from: 'sennacherib', to: 'esarhaddon',
    year: -681, type: 'meet',
    desc_zh: `以撒哈頓為西拿基立指定的繼承人，前681年西拿基立在尼尼微被其兩個兄長弒殺後，以撒哈頓從前線趕回奪回王位`,
    source_zh: `《列王紀下》第19章37節；亞述王年表`, source_en: `2 Kings 19:37; Assyrian Chronicles`
  },
  {
    id: 'c_heb_20', from: 'esarhaddon', to: 'ashurbanipal',
    year: -669, type: 'meet',
    desc_zh: `以撒哈頓精心培養亞述巴尼帕為繼承人，並在死前正式立約確立傳位，亞述巴尼帕在父親的護衛下接受精英教育`,
    source_zh: `亞述繼位條約（前672年）；亞述王年表`, source_en: `Succession Treaty 672 BC; Assyrian King List`
  },
  {
    id: 'c_heb_21', from: 'ashurbanipal', to: 'nabopolassar',
    year: -626, type: 'political',
    desc_zh: `前626年拿布波拉薩趁亞述巴尼帕去世後的亞述內亂，在巴比倫宣告獨立，擊退亞述軍隊，建立新巴比倫帝國，前612年聯合米底亞人攻陷尼尼微`,
    source_zh: `巴比倫編年史；亞述帝國末期史料`, source_en: `Babylonian Chronicles; Fall of Nineveh`
  },
  {
    id: 'c_heb_22', from: 'nabopolassar', to: 'nebuchadnezzar',
    year: -605, type: 'meet',
    desc_zh: `尼布甲尼撒二世為拿布波拉薩之子，前605年在卡赫美士之戰中大敗埃及，同年父親去世後即位為新巴比倫帝國國王`,
    source_zh: `巴比倫編年史；《耶利米書》第46章`, source_en: `Babylonian Chronicles; Jeremiah 46`
  },
  {
    id: 'c_sel_01', from: 'seleucus_i', to: 'antiochus_i',
    year: -281, type: 'meet',
    desc_zh: `安條克一世為塞琉古一世之子，自幼隨父在塞琉古帝國的宮廷中生活，前299年被立為共治者並統治東部領土，前281年塞琉古一世遇刺後繼承帝位，兩人有長達20餘年的直接父子共治關係。`,
    source_zh: `《馬加比一書》；塞琉古王年表`, source_en: `1 Maccabees; Seleucid King List`
  },
  {
    id: 'c_sel_02', from: 'antiochus_i', to: 'antiochus_ii',
    year: -268, type: 'meet',
    desc_zh: `安條克二世為安條克一世之子，在父親在位期間（前292-261年）在王廷成長，並在前268年左右被立為共治者。父子兩人共同處理與埃及托勒密王朝的第二次敘利亞戰爭初期事務。`,
    source_zh: `塞琉古王年表；《約瑟福斯古史》`, source_en: `Seleucid King List; Josephus Antiquities`
  },
  {
    id: 'c_sel_03', from: 'antiochus_ii', to: 'seleucus_ii',
    year: -253, type: 'meet',
    desc_zh: `塞琉古二世為安條克二世長子，在父親在位的後期（前265-246年）已在王廷參與政務。前246年安條克二世去世後，塞琉古二世與母親拉奧狄克一世聯手繼承帝位，兩人有超過12年的直接父子共治往來。`,
    source_zh: `塞琉古王年表`, source_en: `Seleucid King List`
  },
  {
    id: 'c_sel_04', from: 'seleucus_ii', to: 'antiochus_iii',
    year: -228, type: 'meet',
    desc_zh: `安條克三世為塞琉古二世次子，其兄塞琉古三世遇刺後於前223年繼位。在塞琉古二世在位晚期（前235-225年），安條克三世已在王廷中長大。兩人在前225年塞琉古二世去世前有直接的父子相處。`,
    source_zh: `波利比烏斯《通史》卷五`, source_en: `Polybius Histories Book V`
  },
  {
    id: 'c_bac_01', from: 'antiochus_iii', to: 'euthydemus_i',
    year: -206, type: 'meet',
    desc_zh: `前208-206年，安條克三世率軍東征圍攻巴克特里亞國王厄特戴姆斯一世（Euthydemus I）的首都扎里亞斯帕長達兩年。最終兩人在前206年達成和談：安條克三世承認厄特戴姆斯的王位，厄特戴姆斯則承認安條克的宗主權，是希臘化時代中亞最重要的外交事件之一。`,
    source_zh: `波利比烏斯《通史》卷十一；斯特拉波《地理志》`, source_en: `Polybius XI; Strabo Geography`
  },
  {
    id: 'c_bac_02', from: 'euthydemus_i', to: 'demetrius_i',
    year: -200, type: 'meet',
    desc_zh: `德米特里一世為厄特戴姆斯一世之子，巴克特里亞希臘王國的繼承人。在父親在位晚期（前206-200年）已在王廷參與政務，約前200年父親去世後繼位，隨即推進印度方向的征服，建立了橫跨興都庫什山脈的大夏希臘王國。`,
    source_zh: `斯特拉波《地理志》；賈斯廷《腓利史》`, source_en: `Strabo Geography; Justin Epitome of the Philippic History`
  },
  {
    id: 'c_bac_04', from: 'eucratides_i', to: 'heliocles_i',
    year: -145, type: 'meet',
    desc_zh: `赫利奧克勒斯一世（Heliocles I）為歐克拉提德斯一世之子。史料（賈斯廷）記載歐克拉提德斯在回程中被其子所弒，該子可能即為赫利奧克勒斯。兩人為父子關係，赫利奧克勒斯繼承了在月氏人入侵下日益萎縮的巴克特里亞王國。`,
    source_zh: `賈斯廷《腓利史》卷四十一`, source_en: `Justin Epitome XLI`
  },
  {
    id: 'c033', from: 'han_wudi', to: 'liubei',
    year: 175, type: 'political',
    desc_zh: `漢武帝死於前87年，劉備生於161年，兩人未曾相遇。劉備自稱漢室宗親。此為代理連接。`,
    source_zh: `三國志`, source_en: `Records of the Three Kingdoms`
  },
  {
    id: 'c_new_10', from: 'ashoka', to: 'antiochus_ii',
    year: -260, type: 'diplomatic',
    desc_zh: `阿育王的第十三號岩石詔令明確提及曾派遣達摩使節至安條克二世（Antiochus II Theos）的王國弘揚佛法。這是古代東西方文明之間有史料可查的最早正式外交接觸之一。`,
    source_zh: `阿育王第十三號岩石詔令`, source_en: `Ashoka's 13th Rock Edict`
  },
  {
    id: 'c_new_20', from: 'mozi', to: 'zixia',
    year: -415, type: 'meet',
    desc_zh: `墨子與子夏同為戰國初期的重要思想家，均在魏國有所活動。墨子曾師從儒家，後自立一派，與子夏所代表的儒家在學術上多有論辯往來，是「百家爭鳴」時代的重要學術交鋒。`,
    source_zh: `《墨子》；《史記》`, source_en: `Mozi; Historical Records`
  }
];
