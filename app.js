const SM={1:{name:"視覺",sub:"用眼睛看",icon:"👁️",color:"#D4EDDA",tc:"#2E7D32",conn:"看起來",lbl:"視覺詞"},2:{name:"聽覺",sub:"用耳朵聽",icon:"👂",color:"#DBEAFE",tc:"#1565C0",conn:"聽起來",lbl:"聽覺詞"},3:{name:"嗅覺",sub:"用鼻子聞",icon:"👃",color:"#FEF9C3",tc:"#7A5C00",conn:"聞起來",lbl:"嗅覺詞"},4:{name:"味覺",sub:"用嘴巴嚐",icon:"👅",color:"#FCE4EC",tc:"#880E4F",conn:"嚐起來",lbl:"味覺詞"},5:{name:"觸覺",sub:"用手摸",icon:"✋",color:"#EDE7F6",tc:"#4527A0",conn:"摸起來",lbl:"觸覺詞"},6:{name:"心覺",sub:"心裡的感覺",icon:"💖",color:"#FFE0B2",tc:"#BF360C",conn:"",lbl:"心覺詞"}};

// ── WORD TYPES ──────────────────────────────────────────────────
// t (type) controls how the word fits in sentence:
//   adj   = 純形容詞，可前置修飾主題（紅紅的、毛茸茸的）
//   pred  = 謂語型，跟在「看起來/聞起來」後（漂亮、好吃、花香）
//   onoma = 擬聲詞，用「發出___的聲音」（叮咚叮咚、嘩嘩嘩）
//   env   = 環境描述，放句首（夜晚好安靜、鳥叫聲）
//   part  = 帶部位的描述詞，組成「穿著/帶著/拿著___」（制服紅紅的）
//   heart = 心覺詞

const CH={
1:[{w:"大大的",z:"ㄉㄚˋ ㄉㄚˋ ˙ㄉㄜ",t:"adj"},{w:"小小的",z:"ㄒㄧㄠˇ ㄒㄧㄠˇ ˙ㄉㄜ",t:"adj"},{w:"圓圓的",z:"ㄩㄢˊ ㄩㄢˊ ˙ㄉㄜ",t:"adj"},{w:"長長的",z:"ㄔㄤˊ ㄔㄤˊ ˙ㄉㄜ",t:"adj"},{w:"亮亮的",z:"ㄌㄧㄤˋ ㄌㄧㄤˋ ˙ㄉㄜ",t:"adj"},{w:"閃閃發光",z:"ㄕㄢˇ ㄕㄢˇ ㄈㄚ ㄍㄨㄤ",t:"pred"},{w:"漂亮",z:"ㄆㄧㄠˋ ㄌㄧㄤˋ",t:"pred"},{w:"可愛",z:"ㄎㄜˇ ㄞˋ",t:"pred"},{w:"賞心悅目",z:"ㄕㄤˇ ㄒㄧㄣ ㄩㄝˋ ㄇㄨˋ",t:"pred"}],
2:[{w:"大聲",z:"ㄉㄚˋ ㄕㄥ",t:"pred"},{w:"小聲",z:"ㄒㄧㄠˇ ㄕㄥ",t:"pred"},{w:"輕輕的",z:"ㄑㄧㄥ ㄑㄧㄥ ˙ㄉㄜ",t:"adj"},{w:"安靜",z:"ㄢ ㄐㄧㄥˋ",t:"pred"},{w:"好聽",z:"ㄏㄠˇ ㄊㄧㄥ",t:"pred"},{w:"叮咚叮咚",z:"ㄉㄧㄥ ㄉㄨㄥ ㄉㄧㄥ ㄉㄨㄥ",t:"onoma"},{w:"沙沙作響",z:"ㄕㄚ ㄕㄚ ㄗㄨㄛˋ ㄒㄧㄤˇ",t:"onoma"},{w:"轟隆轟隆",z:"ㄏㄨㄥ ˙ㄌㄨㄥ ㄏㄨㄥ ˙ㄌㄨㄥ",t:"onoma"},{w:"咕嚕咕嚕",z:"ㄍㄨ ˙ㄌㄨ ㄍㄨ ˙ㄌㄨ",t:"onoma"}],
3:[{w:"香香的",z:"ㄒㄧㄤ ㄒㄧㄤ ˙ㄉㄜ",t:"adj"},{w:"臭臭的",z:"ㄔㄡˋ ㄔㄡˋ ˙ㄉㄜ",t:"adj"},{w:"淡淡的香",z:"ㄉㄢˋ ㄉㄢˋ ˙ㄉㄜ ㄒㄧㄤ",t:"adj"},{w:"甜甜的香味",z:"ㄊㄧㄢˊ ㄊㄧㄢˊ ˙ㄉㄜ ㄒㄧㄤ ㄨㄟˋ",t:"adj"},{w:"花香",z:"ㄏㄨㄚ ㄒㄧㄤ",t:"pred"},{w:"好聞",z:"ㄏㄠˇ ㄨㄣˊ",t:"pred"},{w:"不好聞",z:"ㄅㄨˋ ㄏㄠˇ ㄨㄣˊ",t:"pred"}],
4:[{w:"甜甜的",z:"ㄊㄧㄢˊ ㄊㄧㄢˊ ˙ㄉㄜ",t:"adj"},{w:"酸酸的",z:"ㄙㄨㄢ ㄙㄨㄢ ˙ㄉㄜ",t:"adj"},{w:"苦苦的",z:"ㄎㄨˇ ㄎㄨˇ ˙ㄉㄜ",t:"adj"},{w:"辣辣的",z:"ㄌㄚˋ ㄌㄚˋ ˙ㄉㄜ",t:"adj"},{w:"鹹鹹的",z:"ㄒㄧㄢˊ ㄒㄧㄢˊ ˙ㄉㄜ",t:"adj"},{w:"脆脆的",z:"ㄘㄨㄟˋ ㄘㄨㄟˋ ˙ㄉㄜ",t:"adj"},{w:"好吃",z:"ㄏㄠˇ ㄔ",t:"pred"},{w:"難吃",z:"ㄋㄢˊ ㄔ",t:"pred"},{w:"多汁",z:"ㄉㄨㄛ ㄓ",t:"adj"}],
5:[{w:"軟軟的",z:"ㄖㄨㄢˇ ㄖㄨㄢˇ ˙ㄉㄜ",t:"adj"},{w:"硬硬的",z:"ㄧㄥˋ ㄧㄥˋ ˙ㄉㄜ",t:"adj"},{w:"滑滑的",z:"ㄏㄨㄚˊ ㄏㄨㄚˊ ˙ㄉㄜ",t:"adj"},{w:"粗粗的",z:"ㄘㄨ ㄘㄨ ˙ㄉㄜ",t:"adj"},{w:"冷冷的",z:"ㄌㄥˇ ㄌㄥˇ ˙ㄉㄜ",t:"adj"},{w:"熱熱的",z:"ㄖㄜˋ ㄖㄜˋ ˙ㄉㄜ",t:"adj"},{w:"暖暖的",z:"ㄋㄨㄢˇ ㄋㄨㄢˇ ˙ㄉㄜ",t:"adj"},{w:"刺刺的",z:"ㄘˋ ㄘˋ ˙ㄉㄜ",t:"adj"},{w:"毛茸茸的",z:"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ",t:"adj"}],
6:[{w:"讓我覺得很開心",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄎㄞ ㄒㄧㄣ",t:"heart"},{w:"讓我覺得好幸福",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄒㄧㄥˋ ㄈㄨˊ",t:"heart"},{w:"讓我覺得好舒服",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄕㄨ ˙ㄈㄨ",t:"heart"},{w:"讓我覺得很害怕",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄏㄞˋ ˙ㄆㄚ",t:"heart"},{w:"讓我覺得很神奇",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄕㄣˊ ㄑㄧˊ",t:"heart"},{w:"讓我覺得很興奮",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄣˋ",t:"heart"},{w:"讓我覺得好美麗",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄇㄟˇ ㄌㄧˋ",t:"heart"},{w:"我好喜歡",z:"ㄨㄛˇ ㄏㄠˇ ㄒㄧˇ ㄏㄨㄢ",t:"heart"},{w:"我不喜歡",z:"ㄨㄛˇ ㄅㄨˋ ㄒㄧˇ ㄏㄨㄢ",t:"heart"},{w:"讓我想到……",z:"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ˙ㄉㄠ……",t:"heart",ellipsis:true},{w:"像糖果一樣甜蜜",z:"ㄒㄧㄤˋ ㄊㄤˊ ㄍㄨㄛˇ ㄧˋ ㄧㄤˋ ㄊㄧㄢˊ ㄇㄧˋ",t:"heart"},{w:"像雲一樣輕柔",z:"ㄒㄧㄤˋ ㄩㄣˊ ㄧˋ ㄧㄤˋ ㄑㄧㄥ ㄖㄡˊ",t:"heart"},{w:"真是賞心悅目",z:"ㄓㄣ ˙ㄕ ㄕㄤˇ ㄒㄧㄣ ㄩㄝˋ ㄇㄨˋ",t:"heart"},{w:"讓我驚訝極了",z:"ㄖㄤˋ ㄨㄛˇ ㄐㄧㄥ ㄧㄚˋ ㄐㄧˊ ˙ㄌㄜ",t:"heart"}]
};

const SUBJECTS=[
{"name":"玫瑰花","cl":"朵","z":"ㄇㄟˊ ㄍㄨㄟ ㄏㄨㄚ","cat":"植物","e":"🌹","senseRating":{1:3,2:1,3:3,4:0,5:2,6:3},"chalTip":{2:"玫瑰花本身沒有聲音，但風吹過花叢可能有沙沙聲，這是環境描述喔！",4:"玫瑰花不能吃，沒有味道喔！",5:"花瓣摸起來是柔軟的，但花莖有刺，可以試試觸覺描述。"},"rec":{1:[{"w":"紅紅的","z":"ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"粉粉的","z":"ㄈㄣˇ ˙ㄈㄣ ˙ㄉㄜ","t":"adj"},{"w":"花瓣薄薄的","z":"ㄏㄨㄚ ㄅㄢˋ ㄅㄠˊ ˙ㄅㄠ ˙ㄉㄜ","t":"adj"},{"w":"漂亮","z":"ㄆㄧㄠˋ ㄌㄧㄤˋ","t":"pred"}],2:[{"w":"風吹沙沙響","z":"ㄈㄥ ㄔㄨㄟ ㄕㄚ ˙ㄕㄚ ㄒㄧㄤˇ","t":"env"},{"w":"安靜","z":"ㄢ ㄐㄧㄥˋ","t":"env"}],3:[{"w":"玫瑰花香","z":"ㄇㄟˊ ㄍㄨㄟ ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"好濃的香味","z":"ㄏㄠˇ ㄋㄨㄥˊ ˙ㄉㄜ ㄒㄧㄤ ㄨㄟˋ","t":"adj"}],5:[{"w":"花瓣軟軟的","z":"ㄏㄨㄚ ㄅㄢˋ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"花莖硬硬的","z":"ㄏㄨㄚ ㄐㄧㄥ ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好浪漫","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄌㄤˋ ㄇㄢˋ","t":"heart"},{"w":"讓我覺得好漂亮","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄆㄧㄠˋ ˙ㄌㄧㄤ","t":"heart"},{"w":"我好喜歡","z":"ㄨㄛˇ ㄏㄠˇ ㄒㄧˇ ㄏㄨㄢ","t":"heart"}]},"chal":{4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"苦苦的","z":"ㄎㄨˇ ˙ㄎㄨ ˙ㄉㄜ","t":"adj"},{"w":"辣辣的","z":"ㄌㄚˋ ˙ㄌㄚ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}]},"suggestSentence":"紅紅的玫瑰花，聞起來香香的，讓我覺得好浪漫。"},
{"name":"草莓","cl":"顆","z":"ㄘㄠˇ ㄇㄟˊ","cat":"植物","e":"🍓","senseRating":{1:3,2:0,3:3,4:3,5:2,6:3},"chalTip":{2:"草莓很安靜，沒有聲音喔！除非是咬下去的脆脆聲。",5:"草莓通常是涼涼的、軟軟的，不會是熱熱的或硬硬的喔！"},"rec":{1:[{"w":"紅紅的","z":"ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"尖尖的","z":"ㄐㄧㄢ ˙ㄐㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"上面有小點點","z":"˙ㄕㄤ ˙ㄇㄧㄢ ㄧㄡˇ ㄒㄧㄠˇ ㄉㄧㄢˇ ˙ㄉㄧㄢ","t":"pred"}],3:[{"w":"草莓香","z":"ㄘㄠˇ ㄇㄟˊ ㄒㄧㄤ","t":"pred"},{"w":"酸酸甜甜的香","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ ㄒㄧㄤ","t":"adj"}],4:[{"w":"酸酸甜甜的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"脆脆的","z":"ㄘㄨㄟˋ ˙ㄘㄨㄟ ˙ㄉㄜ","t":"adj"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"涼涼的","z":"ㄌㄧㄤˊ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"表皮粗粗的","z":"ㄅㄧㄠˇ ㄆㄧˊ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我好想吃","z":"ㄖㄤˋ ㄨㄛˇ ㄏㄠˇ ㄒㄧㄤˇ ㄔ","t":"heart"},{"w":"讓我覺得好甜蜜","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄊㄧㄢˊ ㄇㄧˋ","t":"heart"}]},"chal":{2:[{"w":"大聲","z":"ㄉㄚˋ ㄕㄥ","t":"pred"},{"w":"轟隆轟隆","z":"ㄏㄨㄥ ˙ㄌㄨㄥ ㄏㄨㄥ ˙ㄌㄨㄥ","t":"onoma"}],5:[{"w":"熱熱的","z":"ㄖㄜˋ ˙ㄖㄜ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"紅紅的草莓，聞起來草莓香，嚐起來酸酸甜甜的，讓我好想吃！"},
{"name":"蘋果","cl":"顆","z":"ㄆㄧㄥˊ ㄍㄨㄛˇ","cat":"植物","e":"🍎","senseRating":{1:3,2:0,3:3,4:3,5:2,6:3},"chalTip":{2:"蘋果很安靜，沒有聲音喔！除非是咬下去的脆脆聲。"},"rec":{1:[{"w":"紅紅的","z":"ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"圓圓的","z":"ㄩㄢˊ ˙ㄩㄢ ˙ㄉㄜ","t":"adj"},{"w":"光滑亮亮的","z":"ㄍㄨㄤ ㄏㄨㄚˊ ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"}],3:[{"w":"蘋果香","z":"ㄆㄧㄥˊ ㄍㄨㄛˇ ㄒㄧㄤ","t":"pred"},{"w":"甜甜的清香","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ ㄑㄧㄥ ㄒㄧㄤ","t":"adj"}],4:[{"w":"甜甜脆脆的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ㄘㄨㄟˋ ˙ㄘㄨㄟ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"}],5:[{"w":"光滑滑的","z":"ㄍㄨㄤ ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我好想吃","z":"ㄖㄤˋ ㄨㄛˇ ㄏㄠˇ ㄒㄧㄤˇ ㄔ","t":"heart"},{"w":"讓我覺得很健康","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄐㄧㄢˋ ㄎㄤ","t":"heart"}]},"chal":{2:[{"w":"叮咚叮咚","z":"ㄉㄧㄥ ㄉㄨㄥ ㄉㄧㄥ ㄉㄨㄥ","t":"onoma"},{"w":"大聲","z":"ㄉㄚˋ ㄕㄥ","t":"pred"}]},"suggestSentence":"圓圓的蘋果，聞起來甜甜的清香，嚐起來甜甜脆脆的，讓我好想吃！"},
{"name":"向日葵","cl":"朵","z":"ㄒㄧㄤˋ ㄖˋ ㄎㄨㄟˊ","cat":"植物","e":"🌻","senseRating":{1:3,2:1,3:2,4:0,5:1,6:3},"chalTip":{2:"向日葵本身沒有聲音，但風吹過花田可能有沙沙聲，這是環境描述喔！",4:"向日葵的葵花子可以吃，但花本身不能吃喔！",5:"向日葵的葉子有點粗粗的，可以試試看。"},"rec":{1:[{"w":"黃黃的","z":"ㄏㄨㄤˊ ˙ㄏㄨㄤ ˙ㄉㄜ","t":"adj"},{"w":"花瓣一片一片的","z":"ㄏㄨㄚ ㄅㄢˋ ㄧˋ ㄆㄧㄢˋ ㄧˋ ㄆㄧㄢˋ ˙ㄉㄜ","t":"adj"},{"w":"像太陽一樣","z":"ㄒㄧㄤˋ ㄊㄞˋ ㄧㄤˊ ㄧˋ ˙ㄧㄤ","t":"pred"}],2:[{"w":"風吹沙沙響","z":"ㄈㄥ ㄔㄨㄟ ㄕㄚ ˙ㄕㄚ ㄒㄧㄤˇ","t":"env"},{"w":"蜜蜂嗡嗡叫","z":"ㄇㄧˋ ㄈㄥ ㄨㄥ ˙ㄨㄥ ㄐㄧㄠˋ","t":"env"}],3:[{"w":"淡淡的花香","z":"ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄜ ㄏㄨㄚ ㄒㄧㄤ","t":"adj"},{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"}],5:[{"w":"葉子粗粗的","z":"ㄧㄝˋ ˙ㄗ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我想到太陽","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ˙ㄉㄠ ㄊㄞˋ ㄧㄤˊ","t":"heart"},{"w":"讓我覺得充滿活力","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄔㄨㄥ ㄇㄢˇ ㄏㄨㄛˊ ㄌㄧˋ","t":"heart"},{"w":"我好喜歡","z":"ㄨㄛˇ ㄏㄠˇ ㄒㄧˇ ㄏㄨㄢ","t":"heart"}]},"chal":{4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"苦苦的","z":"ㄎㄨˇ ˙ㄎㄨ ˙ㄉㄜ","t":"adj"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"黃黃的向日葵，聞起來淡淡的花香，讓我覺得充滿活力！"},
{"name":"西瓜","cl":"顆","z":"ㄒㄧ ㄍㄨㄚ","cat":"植物","e":"🍉","senseRating":{1:3,2:1,3:2,4:3,5:3,6:3},"chalTip":{2:"西瓜很安靜，沒有聲音喔！敲一敲可能有聲音，試試看。",3:"西瓜本身香味不明顯，但切開來有淡淡的清香喔！"},"rec":{1:[{"w":"綠綠的","z":"ㄌㄩˋ ˙ㄌㄩ ˙ㄉㄜ","t":"adj"},{"w":"有條紋","z":"ㄧㄡˇ ㄊㄧㄠˊ ㄨㄣˊ","t":"pred"},{"w":"圓圓大大的","z":"ㄩㄢˊ ˙ㄩㄢ ㄉㄚˋ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"},{"w":"裡面紅紅的","z":"ㄌㄧˇ ˙ㄇㄧㄢ ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"adj"}],2:[{"w":"敲起來咚咚咚","z":"ㄑㄧㄠ ˙ㄑㄧ ˙ㄌㄞ ㄉㄨㄥ ˙ㄉㄨㄥ ˙ㄉㄨㄥ","t":"env"}],3:[{"w":"淡淡的清香","z":"ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄜ ㄑㄧㄥ ㄒㄧㄤ","t":"adj"}],4:[{"w":"甜甜多汁","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ㄉㄨㄛ ㄓ","t":"adj"},{"w":"清清涼涼的","z":"ㄑㄧㄥ ˙ㄑㄧㄥ ㄌㄧㄤˊ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"}],5:[{"w":"外皮硬硬的","z":"ㄨㄞˋ ㄆㄧˊ ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"果肉軟軟的","z":"ㄍㄨㄛˇ ㄖㄡˋ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"涼涼的","z":"ㄌㄧㄤˊ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好消暑","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄒㄧㄠ ㄕㄨˇ","t":"heart"},{"w":"讓我覺得好清涼","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄑㄧㄥ ㄌㄧㄤˊ","t":"heart"},{"w":"讓我好想吃","z":"ㄖㄤˋ ㄨㄛˇ ㄏㄠˇ ㄒㄧㄤˇ ㄔ","t":"heart"}]},"chal":{2:[{"w":"大聲","z":"ㄉㄚˋ ㄕㄥ","t":"pred"},{"w":"轟隆轟隆","z":"ㄏㄨㄥ ˙ㄌㄨㄥ ㄏㄨㄥ ˙ㄌㄨㄥ","t":"onoma"}]},"suggestSentence":"圓圓大大的西瓜，外皮硬硬的，嚐起來甜甜多汁，讓我覺得好清涼！"},
{"name":"太陽","cl":"個","z":"ㄊㄞˋ ㄧㄤˊ","cat":"自然","e":"☀️","senseRating":{1:3,2:1,3:0,4:0,5:2,6:3},"chalTip":{2:"太陽本身沒有聲音，但曬太陽時可能聽到蟬聲、鳥叫聲，這是環境描述喔！",3:"太陽沒有氣味喔！",4:"太陽不能吃喔！",5:"太陽太遠了，我們摸不到，但可以感受到它的溫度喔！"},"rec":{1:[{"w":"金黃金黃的","z":"ㄐㄧㄣ ㄏㄨㄤˊ ㄐㄧㄣ ˙ㄏㄨㄤ ˙ㄉㄜ","t":"adj"},{"w":"亮亮的","z":"ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"光芒四射","z":"ㄍㄨㄤ ㄇㄤˊ ㄙˋ ㄕㄜˋ","t":"pred"}],2:[{"w":"鳥叫聲此起彼落","z":"ㄋㄧㄠˇ ㄐㄧㄠˋ ㄕㄥ ㄘˇ ㄑㄧˇ ㄅㄧˇ ㄌㄨㄛˋ","t":"env"},{"w":"蟬聲嘶嘶","z":"ㄔㄢˊ ㄕㄥ ㄙ ˙ㄙ","t":"env"}],5:[{"w":"照在身上暖暖的","z":"ㄓㄠˋ ˙ㄗㄞ ㄕㄣ ˙ㄕㄤ ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"曬久了熱熱的","z":"ㄕㄞˋ ㄐㄧㄡˇ ˙ㄌㄜ ㄖㄜˋ ˙ㄖㄜ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得很溫暖","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄨㄣ ㄋㄨㄢˇ","t":"heart"},{"w":"讓我覺得充滿活力","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄔㄨㄥ ㄇㄢˇ ㄏㄨㄛˊ ㄌㄧˋ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"亮亮的太陽，照在身上暖暖的，讓我覺得充滿活力！"},
{"name":"月亮","cl":"個","z":"ㄩㄝˋ ˙ㄌㄧㄤ","cat":"自然","e":"🌙","senseRating":{1:3,2:2,3:0,4:0,5:0,6:3},"chalTip":{2:"月亮本身沒有聲音，但月夜裡可能聽到蟲鳴，這是環境描述喔！",3:"月亮沒有氣味喔！",4:"月亮不能吃喔！",5:"月亮在很遠的天上，我們摸不到喔！"},"rec":{1:[{"w":"彎彎的","z":"ㄨㄢ ˙ㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"銀白色的","z":"ㄧㄣˊ ㄅㄞˊ ㄙㄜˋ ˙ㄉㄜ","t":"adj"},{"w":"亮亮的","z":"ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"}],2:[{"w":"蟋蟀唧唧叫","z":"ㄒㄧ ㄕㄨㄞˋ ㄐㄧ ˙ㄐㄧ ㄐㄧㄠˋ","t":"env"},{"w":"夜晚好安靜","z":"ㄧㄝˋ ㄨㄢˇ ㄏㄠˇ ㄢ ㄐㄧㄥˋ","t":"env"}],6:[{"w":"讓我覺得很平靜","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄆㄧㄥˊ ㄐㄧㄥˋ","t":"heart"},{"w":"讓我很想睡覺","z":"ㄖㄤˋ ㄨㄛˇ ㄏㄣˇ ㄒㄧㄤˇ ㄕㄨㄟˋ ㄐㄧㄠˋ","t":"heart"},{"w":"讓我想起媽媽","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ˙ㄑㄧ ㄇㄚ ˙ㄇㄚ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"苦苦的","z":"ㄎㄨˇ ˙ㄎㄨ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"冷冷的","z":"ㄌㄥˇ ˙ㄌㄥ ˙ㄉㄜ","t":"adj"},{"w":"暖暖的","z":"ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"夜晚好安靜，彎彎的月亮亮亮的，讓我覺得很平靜。"},
{"name":"星星","cl":"顆","z":"ㄒㄧㄥ ˙ㄒㄧㄥ","cat":"自然","e":"⭐","senseRating":{1:3,2:1,3:0,4:0,5:0,6:3},"chalTip":{2:"星星本身沒有聲音，但夜晚可能聽到蟲鳴，這是環境描述喔！",3:"星星沒有氣味喔！",4:"星星不能吃喔！",5:"星星在很遠的天上，我們摸不到喔！"},"rec":{1:[{"w":"亮亮的","z":"ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"一閃一閃的","z":"ㄧˋ ㄕㄢˇ ㄧˋ ˙ㄕㄢ ˙ㄉㄜ","t":"adj"},{"w":"很多很多顆","z":"ㄏㄣˇ ㄉㄨㄛ ㄏㄣˇ ㄉㄨㄛ ㄎㄜ","t":"pred"}],2:[{"w":"夜晚好安靜","z":"ㄧㄝˋ ㄨㄢˇ ㄏㄠˇ ㄢ ㄐㄧㄥˋ","t":"env"},{"w":"蟲鳴聲輕輕的","z":"ㄔㄨㄥˊ ㄇㄧㄥˊ ㄕㄥ ㄑㄧㄥ ˙ㄑㄧㄥ ˙ㄉㄜ","t":"env"}],6:[{"w":"讓我想許願","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄒㄩˇ ㄩㄢˋ","t":"heart"},{"w":"讓我覺得很神奇","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄕㄣˊ ㄑㄧˊ","t":"heart"},{"w":"讓我覺得好幸福","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄒㄧㄥˋ ㄈㄨˊ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"熱熱的","z":"ㄖㄜˋ ˙ㄖㄜ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"夜晚好安靜，天上一閃一閃的星星，讓我好想許願。"},
{"name":"小貓咪","cl":"隻","z":"ㄒㄧㄠˇ ㄇㄠ ˙ㄇㄧ","cat":"動物","e":"🐱","senseRating":{1:3,2:3,3:2,4:0,5:3,6:3},"chalTip":{3:"小貓咪通常沒有花香味，但可能有自己的味道喔！",4:"小貓咪不能吃喔！"},"rec":{1:[{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"眼睛圓圓的","z":"ㄧㄢˇ ˙ㄐㄧㄥ ㄩㄢˊ ˙ㄩㄢ ˙ㄉㄜ","t":"adj"},{"w":"尾巴長長的","z":"ㄨㄟˇ ˙ㄅㄚ ㄔㄤˊ ˙ㄔㄤ ˙ㄉㄜ","t":"adj"}],2:[{"w":"喵喵喵叫","z":"ㄇㄧㄠ ˙ㄇㄧㄠ ˙ㄇㄧㄠ ㄐㄧㄠˋ","t":"env"},{"w":"呼嚕呼嚕響","z":"ㄏㄨ ˙ㄌㄨ ㄏㄨ ˙ㄌㄨ ㄒㄧㄤˇ","t":"env"}],3:[{"w":"有淡淡的味道","z":"ㄧㄡˇ ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄜ ㄨㄟˋ ˙ㄉㄠ","t":"pred"}],5:[{"w":"毛軟軟的","z":"ㄇㄠˊ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"肚子暖暖的","z":"ㄉㄨˋ ˙ㄗ ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我想一直摸牠","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄧˋ ㄓˊ ㄇㄛˊ ˙ㄊㄚ","t":"heart"},{"w":"讓我覺得很溫柔","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄨㄣ ㄖㄡˊ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"粗粗的","z":"ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"毛茸茸的小貓咪，喵喵喵叫，摸起來毛軟軟的，讓我想一直摸牠！"},
{"name":"小兔子","cl":"隻","z":"ㄒㄧㄠˇ ㄊㄨˋ ˙ㄗ","cat":"動物","e":"🐰","senseRating":{1:3,2:2,3:1,4:0,5:3,6:3},"chalTip":{2:"小兔子很安靜，幾乎不叫，但牠吃東西時有細細的聲音喔！",3:"小兔子本身沒有花香，但如果牠在花園裡，周圍可能有花香，這是環境描述喔！",4:"小兔子不能吃喔！"},"rec":{1:[{"w":"白白的","z":"ㄅㄞˊ ˙ㄅㄞ ˙ㄉㄜ","t":"adj"},{"w":"耳朵長長的","z":"ㄦˇ ˙ㄉㄨㄛ ㄔㄤˊ ˙ㄔㄤ ˙ㄉㄜ","t":"adj"},{"w":"眼睛紅紅的","z":"ㄧㄢˇ ˙ㄐㄧㄥ ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"adj"}],2:[{"w":"安安靜靜的","z":"ㄢ ˙ㄢ ㄐㄧㄥˋ ˙ㄐㄧㄥ ˙ㄉㄜ","t":"env"},{"w":"細細咀嚼聲","z":"ㄒㄧˋ ˙ㄒㄧ ㄐㄩˇ ㄐㄩㄝˊ ㄕㄥ","t":"env"}],3:[{"w":"花園裡有花香","z":"ㄏㄨㄚ ㄩㄢˊ ˙ㄌㄧ ㄧㄡˇ ㄏㄨㄚ ㄒㄧㄤ","t":"env"}],5:[{"w":"毛軟軟的","z":"ㄇㄠˊ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"耳朵薄薄的","z":"ㄦˇ ˙ㄉㄨㄛ ㄅㄠˊ ˙ㄅㄠ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好可愛","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄎㄜˇ ㄞˋ","t":"heart"},{"w":"讓我想一直抱牠","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄧˋ ㄓˊ ㄅㄠˋ ˙ㄊㄚ","t":"heart"}]},"chal":{3:[{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"},{"w":"粗粗的","z":"ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"白白的小兔子，耳朵長長的、眼睛紅紅的，摸起來毛軟軟的，讓我覺得好可愛！"},
{"name":"小狗狗","cl":"隻","z":"ㄒㄧㄠˇ ㄍㄡˇ ˙ㄍㄡ","cat":"動物","e":"🐶","senseRating":{1:3,2:3,3:2,4:0,5:3,6:3},"chalTip":{3:"小狗狗有自己的氣味，不一定是香的，可以試試看喔！",4:"小狗狗不能吃喔！"},"rec":{1:[{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"眼睛大大的","z":"ㄧㄢˇ ˙ㄐㄧㄥ ㄉㄚˋ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"}],2:[{"w":"汪汪汪叫","z":"ㄨㄤ ˙ㄨㄤ ˙ㄨㄤ ㄐㄧㄠˋ","t":"env"},{"w":"叫聲很大聲","z":"ㄐㄧㄠˋ ㄕㄥ ㄏㄣˇ ㄉㄚˋ ㄕㄥ","t":"env"}],3:[{"w":"有狗狗的味道","z":"ㄧㄡˇ ㄍㄡˇ ˙ㄍㄡ ˙ㄉㄜ ㄨㄟˋ ˙ㄉㄠ","t":"pred"}],5:[{"w":"毛軟軟的","z":"ㄇㄠˊ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"鼻子濕濕的","z":"ㄅㄧˊ ˙ㄗ ㄕ ˙ㄕ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好開心","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄎㄞ ㄒㄧㄣ","t":"heart"},{"w":"讓我想跟牠玩","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄍㄣ ˙ㄊㄚ ㄨㄢˊ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"毛茸茸的小狗狗，汪汪汪叫，摸起來毛軟軟的，讓我覺得好開心！"},
{"name":"大象","cl":"隻","z":"ㄉㄚˋ ㄒㄧㄤˋ","cat":"動物","e":"🐘","senseRating":{1:3,2:3,3:1,4:0,5:3,6:3},"chalTip":{3:"大象有自己的氣味，但不是香的喔！可以描述牠身邊的環境氣味。",4:"大象不能吃喔！"},"rec":{1:[{"w":"鼻子長長的","z":"ㄅㄧˊ ˙ㄗ ㄔㄤˊ ˙ㄔㄤ ˙ㄉㄜ","t":"adj"},{"w":"耳朵大大的","z":"ㄦˇ ˙ㄉㄨㄛ ㄉㄚˋ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"},{"w":"皮膚灰灰的","z":"ㄆㄧˊ ㄈㄨ ㄏㄨㄟ ˙ㄏㄨㄟ ˙ㄉㄜ","t":"adj"},{"w":"身體很大","z":"ㄕㄣ ˙ㄊㄧ ㄏㄣˇ ㄉㄚˋ","t":"pred"}],2:[{"w":"叫聲很大聲","z":"ㄐㄧㄠˋ ㄕㄥ ㄏㄣˇ ㄉㄚˋ ㄕㄥ","t":"env"},{"w":"腳步聲很重","z":"ㄐㄧㄠˇ ㄅㄨˋ ㄕㄥ ㄏㄣˇ ㄓㄨㄥˋ","t":"env"}],3:[{"w":"草地的氣味","z":"ㄘㄠˇ ˙ㄉㄧ ˙ㄉㄜ ㄑㄧˋ ㄨㄟˋ","t":"env"}],5:[{"w":"皮膚粗粗的","z":"ㄆㄧˊ ㄈㄨ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"},{"w":"身體硬硬的","z":"ㄕㄣ ˙ㄊㄧ ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得很厲害","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄌㄧˋ ˙ㄏㄞ","t":"heart"},{"w":"讓我覺得好驚訝","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄐㄧㄥ ㄧㄚˋ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"大象鼻子長長的，叫聲很大聲，皮膚摸起來粗粗的，讓我覺得好驚訝！"},
{"name":"鯨魚","cl":"條","z":"ㄐㄧㄥ ㄩˊ","cat":"動物","e":"🐳","senseRating":{1:3,2:2,3:0,4:0,5:1,6:3},"chalTip":{2:"鯨魚的叫聲很特別，但我們在岸上聽不到，可以想像一下喔！",3:"鯨魚在海裡，沒有氣味可以聞喔！",4:"鯨魚不能吃喔！",5:"鯨魚在海裡，我們摸不到喔！"},"rec":{1:[{"w":"好大好大的","z":"ㄏㄠˇ ㄉㄚˋ ㄏㄠˇ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"},{"w":"身體藍藍的","z":"ㄕㄣ ˙ㄊㄧ ㄌㄢˊ ˙ㄌㄢ ˙ㄉㄜ","t":"adj"},{"w":"尾巴像扇子","z":"ㄨㄟˇ ˙ㄅㄚ ㄒㄧㄤˋ ㄕㄢˋ ˙ㄗ","t":"pred"}],2:[{"w":"發出嗚嗚聲","z":"ㄈㄚ ㄔㄨ ㄨ ˙ㄨ ㄕㄥ","t":"env"},{"w":"海浪嘩嘩嘩","z":"ㄏㄞˇ ㄌㄤˋ ㄏㄨㄚ ˙ㄏㄨㄚ ˙ㄏㄨㄚ","t":"env"}],5:[{"w":"皮膚光滑滑的","z":"ㄆㄧˊ ㄈㄨ ㄍㄨㄤ ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好神奇","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄕㄣˊ ㄑㄧˊ","t":"heart"},{"w":"讓我覺得好渺小","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄇㄧㄠˇ ㄒㄧㄠˇ","t":"heart"},{"w":"讓我驚訝極了","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄧㄥ ㄧㄚˋ ㄐㄧˊ ˙ㄌㄜ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"好大好大的鯨魚，身體藍藍的，牠發出嗚嗚聲，讓我覺得好神奇！"},
{"name":"公主","cl":"位","z":"ㄍㄨㄥ ㄓㄨˇ","cat":"人物","e":"👸","senseRating":{1:3,2:2,3:2,4:0,5:1,6:3},"chalTip":{4:"公主不能吃喔！",5:"公主的衣服可能很柔軟，但刺刺的、粗粗的就不太合適喔！"},"rec":{1:[{"w":"裙子亮亮的","z":"ㄑㄩㄣˊ ˙ㄗ ㄌㄧㄤˋ ˙ㄌㄧㄤ ˙ㄉㄜ","t":"part","prep":"穿著"},{"w":"皇冠閃閃發光","z":"ㄏㄨㄤˊ ㄍㄨㄢ ㄕㄢˇ ˙ㄕㄢ ㄈㄚ ㄍㄨㄤ","t":"part","prep":"戴著"},{"w":"笑容很美","z":"ㄒㄧㄠˋ ㄖㄨㄥˊ ㄏㄣˇ ㄇㄟˇ","t":"pred"}],2:[{"w":"聲音輕輕柔柔的","z":"ㄕㄥ ㄧㄣ ㄑㄧㄥ ˙ㄑㄧㄥ ㄖㄡˊ ˙ㄖㄡ ˙ㄉㄜ","t":"env"},{"w":"音樂叮咚叮咚","z":"ㄧㄣ ㄩㄝˋ ㄉㄧㄥ ˙ㄉㄨㄥ ㄉㄧㄥ ˙ㄉㄨㄥ","t":"env"}],3:[{"w":"香水味淡淡的","z":"ㄒㄧㄤ ㄕㄨㄟˇ ㄨㄟˋ ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄜ","t":"adj"},{"w":"花香味","z":"ㄏㄨㄚ ㄒㄧㄤ ㄨㄟˋ","t":"pred"}],5:[{"w":"裙子軟軟的","z":"ㄑㄩㄣˊ ˙ㄗ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好羨慕","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄒㄧㄢˋ ㄇㄨˋ","t":"heart"},{"w":"讓我覺得好美麗","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄇㄟˇ ㄌㄧˋ","t":"heart"}]},"chal":{4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"苦苦的","z":"ㄎㄨˇ ˙ㄎㄨ ˙ㄉㄜ","t":"adj"},{"w":"辣辣的","z":"ㄌㄚˋ ˙ㄌㄚ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"粗粗的","z":"ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"},{"w":"冷冷的","z":"ㄌㄥˇ ˙ㄌㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"公主穿著裙子亮亮的，聲音輕輕柔柔的，讓我覺得好美麗！"},
{"name":"聖誕老人","cl":"位","z":"ㄕㄥˋ ㄉㄢˋ ㄌㄠˇ ˙ㄖㄣ","cat":"人物","e":"🎅","senseRating":{1:3,2:3,3:2,4:0,5:2,6:3},"chalTip":{4:"聖誕老人不能吃喔！"},"rec":{1:[{"w":"衣服紅紅的","z":"ㄧ ˙ㄈㄨ ㄏㄨㄥˊ ˙ㄏㄨㄥ ˙ㄉㄜ","t":"part","prep":"穿著"},{"w":"白白的大鬍子","z":"ㄅㄞˊ ˙ㄅㄞ ˙ㄉㄜ ㄉㄚˋ ㄏㄨˊ ˙ㄗ","t":"adj"},{"w":"笑容很親切","z":"ㄒㄧㄠˋ ㄖㄨㄥˊ ㄏㄣˇ ㄑㄧㄣ ㄑㄧㄝˋ","t":"pred"},{"w":"肚子圓圓的","z":"ㄉㄨˋ ˙ㄗ ㄩㄢˊ ˙ㄩㄢ ˙ㄉㄜ","t":"adj"}],2:[{"w":"鈴鐺叮叮噹","z":"ㄌㄧㄥˊ ㄉㄤ ㄉㄧㄥ ˙ㄉㄧㄥ ㄉㄤ","t":"env"},{"w":"哈哈哈大笑","z":"ㄏㄚ ˙ㄏㄚ ˙ㄏㄚ ㄉㄚˋ ㄒㄧㄠˋ","t":"env"},{"w":"風聲呼呼呼","z":"ㄈㄥ ㄕㄥ ㄏㄨ ˙ㄏㄨ ˙ㄏㄨ","t":"env"}],3:[{"w":"薑餅的香味","z":"ㄐㄧㄤ ˙ㄅㄧㄥ ˙ㄉㄜ ㄒㄧㄤ ㄨㄟˋ","t":"env"},{"w":"松樹的清香","z":"ㄙㄨㄥ ㄕㄨˋ ˙ㄉㄜ ㄑㄧㄥ ㄒㄧㄤ","t":"env"}],5:[{"w":"大衣軟軟的","z":"ㄉㄚˋ ㄧ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"鬍子軟軟的","z":"ㄏㄨˊ ˙ㄗ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好開心","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄎㄞ ㄒㄧㄣ","t":"heart"},{"w":"讓我覺得很溫暖","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄨㄣ ㄋㄨㄢˇ","t":"heart"},{"w":"讓我想到聖誕節","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ˙ㄉㄠ ㄕㄥˋ ㄉㄢˋ ㄐㄧㄝˊ","t":"heart"}]},"chal":{4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"刺刺的","z":"ㄘˋ ˙ㄘ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"},{"w":"粗粗的","z":"ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"聖誕老人穿著衣服紅紅的，鈴鐺叮叮噹，讓我想到聖誕節！"},
{"name":"老巫婆","cl":"位","z":"ㄌㄠˇ ㄨ ˙ㄆㄛ","cat":"人物","e":"🧙‍♀️","senseRating":{1:3,2:3,3:2,4:0,5:1,6:3},"chalTip":{4:"老巫婆不能吃喔！",5:"老巫婆可以試試描述她的衣服或掃把喔！"},"rec":{1:[{"w":"帽子高高尖尖的","z":"ㄇㄠˋ ˙ㄗ ㄍㄠ ˙ㄍㄠ ㄐㄧㄢ ˙ㄐㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"衣服黑黑的","z":"ㄧ ˙ㄈㄨ ㄏㄟ ˙ㄏㄟ ˙ㄉㄜ","t":"part","prep":"穿著"},{"w":"臉上皺紋很多","z":"ㄌㄧㄢˇ ˙ㄕㄤ ㄓㄡˋ ㄨㄣˊ ㄏㄣˇ ㄉㄨㄛ","t":"pred"}],2:[{"w":"聲音又尖又細","z":"ㄕㄥ ㄧㄣ ㄧㄡˋ ㄐㄧㄢ ㄧㄡˋ ㄒㄧˋ","t":"env"},{"w":"掃把呼呼呼飛","z":"ㄙㄠˋ ˙ㄅㄚ ㄏㄨ ˙ㄏㄨ ˙ㄏㄨ ㄈㄟ","t":"env"},{"w":"咕嚕咕嚕煮藥水","z":"ㄍㄨ ˙ㄌㄨ ㄍㄨ ˙ㄌㄨ ㄓㄨˇ ㄧㄠˋ ㄕㄨㄟˇ","t":"env"}],3:[{"w":"有藥水的怪味道","z":"ㄧㄡˇ ㄧㄠˋ ㄕㄨㄟˇ ˙ㄉㄜ ㄍㄨㄞˋ ㄨㄟˋ ˙ㄉㄠ","t":"pred"},{"w":"煙霧瀰漫","z":"ㄧㄢ ㄨˋ ㄇㄧˊ ㄇㄢˋ","t":"env"}],5:[{"w":"掃把粗粗的","z":"ㄙㄠˋ ˙ㄅㄚ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得很害怕","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄏㄞˋ ˙ㄆㄚ","t":"heart"},{"w":"讓我覺得好神秘","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄕㄣˊ ㄇㄧˋ","t":"heart"},{"w":"讓我想躲起來","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄉㄨㄛˇ ˙ㄑㄧ ˙ㄌㄞ","t":"heart"}]},"chal":{4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"暖暖的","z":"ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"老巫婆穿著衣服黑黑的，聲音又尖又細，讓我覺得好神秘！"},
{"name":"幽靈","cl":"個","z":"ㄧㄡ ㄌㄧㄥˊ","cat":"人物","e":"👻","senseRating":{1:3,2:2,3:0,4:0,5:0,6:3},"chalTip":{2:"幽靈可能發出怪聲，試試看用聽覺描述喔！",3:"幽靈沒有氣味喔！",4:"幽靈不能吃喔！",5:"幽靈沒有實體，摸不到喔！但可以感受到牠帶來的涼意！"},"rec":{1:[{"w":"白白的","z":"ㄅㄞˊ ˙ㄅㄞ ˙ㄉㄜ","t":"adj"},{"w":"半透明的","z":"ㄅㄢˋ ㄊㄡˋ ㄇㄧㄥˊ ˙ㄉㄜ","t":"adj"},{"w":"飄來飄去","z":"ㄆㄧㄠ ˙ㄌㄞ ㄆㄧㄠ ˙ㄑㄩ","t":"pred"}],2:[{"w":"發出嗚嗚聲","z":"ㄈㄚ ㄔㄨ ㄨ ˙ㄨ ㄕㄥ","t":"env"},{"w":"哀號聲嗚嗚嗚","z":"ㄞ ㄏㄠˊ ㄕㄥ ㄨ ˙ㄨ ˙ㄨ","t":"env"},{"w":"四周好安靜","z":"ㄙˋ ㄓㄡ ㄏㄠˇ ㄢ ㄐㄧㄥˋ","t":"env"}],5:[{"w":"帶來冷颼颼的感覺","z":"ㄉㄞˋ ˙ㄌㄞ ㄌㄥˇ ㄙㄡ ˙ㄙㄡ ˙ㄉㄜ ㄍㄢˇ ㄐㄩㄝˊ","t":"adj"}],6:[{"w":"讓我覺得很害怕","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄏㄞˋ ˙ㄆㄚ","t":"heart"},{"w":"讓我全身起雞皮疙瘩","z":"ㄖㄤˋ ㄨㄛˇ ㄑㄩㄢˊ ㄕㄣ ㄑㄧˇ ㄐㄧ ㄆㄧˊ ˙ㄍㄜ ˙ㄉㄚ","t":"heart"},{"w":"讓我想趕快跑走","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄍㄢˇ ㄎㄨㄞˋ ㄆㄠˇ ˙ㄗㄡ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"},{"w":"暖暖的","z":"ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"白白的幽靈飄來飄去，發出嗚嗚聲，讓我全身起雞皮疙瘩！"},
{"name":"熱牛奶","cl":"杯","z":"ㄖㄜˋ ㄋㄧㄡˊ ˙ㄋㄞ","cat":"日常物品","e":"🥛","senseRating":{1:2,2:1,3:3,4:3,5:3,6:3},"chalTip":{2:"熱牛奶很安靜，但攪拌時有叮叮聲喔！"},"rec":{1:[{"w":"白白的","z":"ㄅㄞˊ ˙ㄅㄞ ˙ㄉㄜ","t":"adj"},{"w":"上面有泡泡","z":"˙ㄕㄤ ˙ㄇㄧㄢ ㄧㄡˇ ㄆㄠˋ ˙ㄆㄠ","t":"pred"}],2:[{"w":"攪拌聲叮叮叮","z":"ㄐㄧㄠˇ ㄅㄢˋ ㄕㄥ ㄉㄧㄥ ˙ㄉㄧㄥ ˙ㄉㄧㄥ","t":"env"}],3:[{"w":"牛奶香香的","z":"ㄋㄧㄡˊ ˙ㄋㄞ ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"甜甜的奶香","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ ㄋㄞˇ ㄒㄧㄤ","t":"adj"}],4:[{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"香濃順口","z":"ㄒㄧㄤ ㄋㄨㄥˊ ㄕㄨㄣˋ ㄎㄡˇ","t":"pred"}],5:[{"w":"杯子熱熱的","z":"ㄅㄟ ˙ㄗ ㄖㄜˋ ˙ㄖㄜ ˙ㄉㄜ","t":"adj"},{"w":"捧著暖暖的","z":"ㄆㄥˇ ˙ㄓㄜ ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得好溫暖","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄨㄣ ㄋㄨㄢˇ","t":"heart"},{"w":"讓我想一直喝","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄧˋ ㄓˊ ㄏㄜ","t":"heart"}]},"chal":{2:[{"w":"大聲","z":"ㄉㄚˋ ㄕㄥ","t":"pred"},{"w":"轟隆轟隆","z":"ㄏㄨㄥ ˙ㄌㄨㄥ ㄏㄨㄥ ˙ㄌㄨㄥ","t":"onoma"}]},"suggestSentence":"熱牛奶聞起來牛奶香香的，喝起來甜甜的，捧著杯子暖暖的，讓我覺得好溫暖！"},
{"name":"蠟筆","cl":"盒","z":"ㄌㄚˋ ㄅㄧˇ","cat":"日常物品","e":"🖍️","senseRating":{1:3,2:0,3:2,4:0,5:2,6:3},"chalTip":{2:"蠟筆沒有聲音喔！畫畫時有輕輕的沙沙聲，可以試試看。",4:"蠟筆不能吃喔！"},"rec":{1:[{"w":"顏色好鮮豔","z":"ㄧㄢˊ ㄙㄜˋ ㄏㄠˇ ㄒㄧㄢ ㄧㄢˋ","t":"pred"},{"w":"五顏六色的","z":"ㄨˇ ㄧㄢˊ ㄌㄧㄡˋ ㄙㄜˋ ˙ㄉㄜ","t":"adj"},{"w":"好多好多支","z":"ㄏㄠˇ ㄉㄨㄛ ㄏㄠˇ ㄉㄨㄛ ㄓ","t":"pred"}],2:[{"w":"畫畫沙沙聲","z":"ㄏㄨㄚˋ ˙ㄏㄨㄚ ㄕㄚ ˙ㄕㄚ ㄕㄥ","t":"env"}],3:[{"w":"有蠟的味道","z":"ㄧㄡˇ ㄌㄚˋ ˙ㄉㄜ ㄨㄟˋ ˙ㄉㄠ","t":"pred"}],5:[{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"硬硬的","z":"ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我想畫圖","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄏㄨㄚˋ ㄊㄨˊ","t":"heart"},{"w":"讓我覺得好有創意","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄧㄡˇ ㄔㄨㄤˋ ㄧˋ","t":"heart"}]},"chal":{2:[{"w":"大聲","z":"ㄉㄚˋ ㄕㄥ","t":"pred"},{"w":"轟隆轟隆","z":"ㄏㄨㄥ ˙ㄌㄨㄥ ㄏㄨㄥ ˙ㄌㄨㄥ","t":"onoma"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"酸酸的","z":"ㄙㄨㄢ ˙ㄙㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"暖暖的","z":"ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"冷冷的","z":"ㄌㄥˇ ˙ㄌㄥ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"五顏六色的蠟筆好多好多支，聞起來有蠟的味道，讓我想畫圖！"},
{"name":"大象溜滑梯","cl":"座","z":"ㄉㄚˋ ㄒㄧㄤˋ ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ","cat":"日常物品","e":"🛝","senseRating":{1:3,2:2,3:0,4:0,5:3,6:3},"chalTip":{2:"溜滑梯本身沒有聲音，但小朋友玩的時候有笑聲和滑下來的聲音喔！",3:"溜滑梯沒有氣味喔！",4:"溜滑梯不能吃喔！"},"rec":{1:[{"w":"好大好大的","z":"ㄏㄠˇ ㄉㄚˋ ㄏㄠˇ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"},{"w":"大象鼻子是溜滑梯","z":"ㄉㄚˋ ㄒㄧㄤˋ ㄅㄧˊ ˙ㄗ ˙ㄕ ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ","t":"pred"},{"w":"顏色好鮮豔","z":"ㄧㄢˊ ㄙㄜˋ ㄏㄠˇ ㄒㄧㄢ ㄧㄢˋ","t":"pred"}],2:[{"w":"小朋友笑聲哈哈哈","z":"ㄒㄧㄠˇ ㄆㄥˊ ˙ㄧㄡ ㄒㄧㄠˋ ㄕㄥ ㄏㄚ ˙ㄏㄚ ˙ㄏㄚ","t":"env"},{"w":"滑下來的聲音","z":"ㄏㄨㄚˊ ˙ㄒㄧㄚ ˙ㄌㄞ ˙ㄉㄜ ㄕㄥ ㄧㄣ","t":"env"}],5:[{"w":"表面光滑滑的","z":"ㄅㄧㄠˇ ㄇㄧㄢˋ ㄍㄨㄤ ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"摸起來硬硬的","z":"ㄇㄛˊ ˙ㄑㄧ ˙ㄌㄞ ㄧㄥˋ ˙ㄧㄥ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我好想玩","z":"ㄖㄤˋ ㄨㄛˇ ㄏㄠˇ ㄒㄧㄤˇ ㄨㄢˊ","t":"heart"},{"w":"讓我覺得好好玩","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄠˇ ㄏㄠˇ ㄨㄢˊ","t":"heart"},{"w":"讓我覺得好興奮","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄒㄧㄥˋ ㄈㄣˋ","t":"heart"}]},"chal":{3:[{"w":"香香的","z":"ㄒㄧㄤ ˙ㄒㄧㄤ ˙ㄉㄜ","t":"adj"},{"w":"花香","z":"ㄏㄨㄚ ㄒㄧㄤ","t":"pred"},{"w":"臭臭的","z":"ㄔㄡˋ ˙ㄔㄡ ˙ㄉㄜ","t":"adj"}],4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}]},"suggestSentence":"好大好大的大象溜滑梯，表面光滑滑的，小朋友笑聲哈哈哈，讓我好想玩！"},
{"name":"大樹","cl":"棵","z":"ㄉㄚˋ ㄕㄨˋ","cat":"自然","e":"🌳","senseRating":{1:3,2:2,3:2,4:0,5:3,6:3},"chalTip":{2:"大樹本身沒有聲音，但風吹葉子有沙沙聲，鳥兒在上面唱歌，這是環境描述喔！",3:"大樹有淡淡的木頭味，可以試試看喔！",4:"大樹不能吃喔！"},"rec":{1:[{"w":"好高好大的","z":"ㄏㄠˇ ㄍㄠ ㄏㄠˇ ˙ㄉㄚ ˙ㄉㄜ","t":"adj"},{"w":"葉子綠綠的","z":"ㄧㄝˋ ˙ㄗ ㄌㄩˋ ˙ㄌㄩ ˙ㄉㄜ","t":"adj"},{"w":"樹幹粗粗的","z":"ㄕㄨˋ ㄍㄢˋ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"}],2:[{"w":"風吹葉子沙沙響","z":"ㄈㄥ ㄔㄨㄟ ㄧㄝˋ ˙ㄗ ㄕㄚ ˙ㄕㄚ ㄒㄧㄤˇ","t":"env"},{"w":"小鳥在唱歌","z":"ㄒㄧㄠˇ ㄋㄧㄠˇ ˙ㄗㄞ ㄔㄤˋ ˙ㄍㄜ","t":"env"}],3:[{"w":"有淡淡的木頭香","z":"ㄧㄡˇ ㄉㄢˋ ˙ㄉㄢ ˙ㄉㄜ ㄇㄨˋ ㄊㄡˊ ㄒㄧㄤ","t":"pred"},{"w":"草地的清香","z":"ㄘㄠˇ ˙ㄉㄧ ˙ㄉㄜ ㄑㄧㄥ ㄒㄧㄤ","t":"env"}],5:[{"w":"樹幹粗粗的","z":"ㄕㄨˋ ㄍㄢˋ ㄘㄨ ˙ㄘㄨ ˙ㄉㄜ","t":"adj"},{"w":"葉子軟軟的","z":"ㄧㄝˋ ˙ㄗ ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"樹皮粗糙的","z":"ㄕㄨˋ ㄆㄧˊ ㄘㄨ ㄘㄠ ˙ㄉㄜ","t":"adj"}],6:[{"w":"讓我覺得很涼快","z":"ㄖㄤˋ ㄨㄛˇ ㄐㄩㄝˊ ˙ㄉㄜ ㄏㄣˇ ㄌㄧㄤˊ ㄎㄨㄞˋ","t":"heart"},{"w":"讓我想爬上去","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ㄆㄚˊ ˙ㄕㄤ ˙ㄑㄩ","t":"heart"},{"w":"讓我想在樹下玩","z":"ㄖㄤˋ ㄨㄛˇ ㄒㄧㄤˇ ˙ㄗㄞ ㄕㄨˋ ˙ㄒㄧㄚ ㄨㄢˊ","t":"heart"}]},"chal":{4:[{"w":"好吃","z":"ㄏㄠˇ ㄔ","t":"pred"},{"w":"甜甜的","z":"ㄊㄧㄢˊ ˙ㄊㄧㄢ ˙ㄉㄜ","t":"adj"},{"w":"多汁","z":"ㄉㄨㄛ ㄓ","t":"pred"},{"w":"難吃","z":"ㄋㄢˊ ㄔ","t":"pred"}],5:[{"w":"軟軟的","z":"ㄖㄨㄢˇ ˙ㄖㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"滑滑的","z":"ㄏㄨㄚˊ ˙ㄏㄨㄚ ˙ㄉㄜ","t":"adj"},{"w":"暖暖的","z":"ㄋㄨㄢˇ ˙ㄋㄨㄢ ˙ㄉㄜ","t":"adj"},{"w":"毛茸茸的","z":"ㄇㄠˊ ㄖㄨㄥˊ ˙ㄖㄨㄥ ˙ㄉㄜ","t":"adj"}]},"suggestSentence":"好高好大的大樹，風吹葉子沙沙響，樹幹摸起來粗粗的，讓我想在樹下玩！"}
];

// ── SENTENCE BUILDER ─────────────────────────────────────────
// Each word has a type that tells us how to fit it in a sentence:
//   adj   → looks/smells/feels + word (前置修飾或謂語)
//   pred  → conn + word  (看起來漂亮、聞起來花香)
//   onoma → 發出___的聲音
//   env   → 句首環境描述，不接在主題後 (夜晚好安靜、汪汪汪叫)
//   part  → prep + word (穿著制服紅紅的、戴著皇冠閃閃發光)
//   heart → standalone at sentence end

function makePhrase(sid, w, t, prep) {
  if (sid===6||!w) return w||null;
  const conn=SM[sid].conn;
  // 若詞語本身已含連接詞，避免重複（如「摸起來光滑的」）
  const allConns=['看起來','聽起來','聞起來','嚐起來','摸起來'];
  if(allConns.some(c=>w.startsWith(c))) return w;
  if(t==='adj') return conn+w;
  if(t==='pred'){
    const skipHen=['香','味','聲','多','口','吃','聞','聽','玩'];
    const noHen=skipHen.includes(w.slice(-1))||w.length>=4;
    return noHen?conn+w:conn+'很'+w;
  }
  if(t==='onoma') return '發出'+w+'的聲音';
  if(t==='env') return w;  // 環境詞直接用
  if(t==='part') return (prep||'')+w; // 穿著制服紅紅的
  return conn+w;
}

function buildFrames(subj, ids, slots, types, preps) {
  const n=subj.name, cl=subj.cl||'個';
  const [id1,id2]=[ids[0],ids[1]];
  // slots是陣列，把多個詞組合成一個片語
  function combineWords(sid){
    const ws=slots[sid]||[], ts=types[sid]||[], ps=preps&&preps[sid]||[];
    if(!ws.length) return null;
    // 每個詞各自造片語，再用「、」串起，但同感覺的connector只用一次
    if(ws.length===1) return makePhrase(sid,ws[0],ts[0]||'adj',ps[0]||null);
    // 多詞：第一個詞帶connector，其餘直接接詞
    const first=makePhrase(sid,ws[0],ts[0]||'adj',ps[0]||null);
    const rest=ws.slice(1).map((w,i)=>w).join('、');
    return first+'、'+rest;
  }
  // 前置修飾：多詞用「、」串接形容詞
  function combineFront(sid){
    const ws=slots[sid]||[], ts=types[sid]||[], ps=preps&&preps[sid]||[];
    if(!ws.length) return null;
    const mods=ws.map((w,i)=>{
      const t=ts[i]||'adj', p=ps[i]||null;
      if(t==='adj') return (w.endsWith('的')?w.slice(0,-1):w);
      if(t==='pred') return (w.length>=4?w:'很'+w);
      if(t==='part') return (p||'')+w;
      if(t==='env') return null;
      if(t==='onoma') return '發出'+w+'聲';
      return w;
    }).filter(Boolean);
    return mods.length?mods.join('、')+'的':null;
  }
  const wH=slots[6]&&slots[6][0];
  const t1=(types[id1]||[])[0]||'adj', t2=(types[id2]||[])[0]||'adj';
  const ph1=combineWords(id1);
  const ph2=combineWords(id2);

  const FM1=combineFront(id1);
  const FM2=combineFront(id2);

  const P1=ph1||'〔'+SM[id1].lbl+'〕';
  const P2=ph2||'〔'+SM[id2].lbl+'〕';
  const PH=wH||'〔心覺詞〕';

  // 環境詞（env）要放句首，不接在主題後
  const isEnv1=(t1==='env'), isEnv2=(t2==='env');

  // 句型A：若1是env→環境在前，主題+感覺2；否則感覺1修飾主題
  let fA;
  if(isEnv1 && FM2)     fA=`${P1}，${FM2}${n}，${PH}。`;
  else if(isEnv1)       fA=`${P1}，這${cl}${n}${P2}，${PH}。`;
  else if(FM1)          fA=`${FM1}${n}，${P2}，${PH}。`;
  else                  fA=`${n}${P1}，${P2}，${PH}。`;

  // 句型B：主題先，兩個感覺並列
  let fB;
  if(isEnv1)  fB=`${P1}，這${cl}${n}${P2}，${PH}。`;
  else if(isEnv2) fB=`${P2}，這${cl}${n}${P1}，${PH}。`;
  else        fB=`這${cl}${n}${P1}、${P2}，${PH}。`;

  // 句型C：雙修飾語 or 環境+主題描述
  let fC;
  if(isEnv1 && isEnv2)    fC=`${P1}，也${P2}，這${cl}${n}，${PH}。`;
  else if(isEnv1 && FM2)  fC=`${P1}，${FM2}${n}，${PH}。`;
  else if(FM1 && FM2)     fC=`${FM1}、${FM2}${n}，${PH}。`;
  else if(FM1)            fC=`${FM1}${n}，${P2}，${PH}。`;
  else                    fC=`這${cl}${n}${P1}，也${P2}，${PH}。`;

  // 句型D：心覺前置
  let fD;
  if(isEnv1)     fD=`${PH}！${P1}，${P2}的${n}。`;
  else if(FM1)   fD=`${PH}這${cl}${FM1}${n}，${P2}！`;
  else           fD=`${PH}！這${cl}${n}${P1}、${P2}。`;

  return [fA,fB,fC,fD];
}

// ── STATE ──────────────────────────────────────────────────────
let CS=null,sel5=[],heartOn=false,activeTab=null;
let slots={},slotTypes={},slotPreps={},ellipsisSuffix='';
let frameIdx=0,score=0;
let recog=null,recoding=false,customRecog=null,customRecoding=false;
const hasSpeech='webkitSpeechRecognition' in window||'SpeechRecognition' in window;
// Per-sense custom words added by child: {senseId: [{w,z,t}]}
let customWords={};

// ── HINTS ──────────────────────────────────────────────────────
function getHints(sid){
  const sRec=(CS&&CS.rec&&CS.rec[sid])||[];
  const sChal=(CS&&CS.chal&&CS.chal[sid])||[];
  const common=CH[sid]||[];
  const chalWords=new Set(sChal.map(h=>h.w));
  const recWords=new Set(sRec.map(h=>h.w));
  const r=[];
  sRec.forEach(h=>r.push({...h,isRec:true}));
  common.forEach(h=>{if(!recWords.has(h.w)&&!chalWords.has(h.w))r.push({...h,isRec:true});});
  sChal.forEach(h=>r.push({...h,isRec:false}));
  (customWords[sid]||[]).forEach(h=>r.push({...h,isRec:true,isCustom:true}));
  return r;
}

// ── RENDER ─────────────────────────────────────────────────────
function getRatingLabel(r){
  if(r===3) return {txt:'⭐⭐⭐ 很適合',color:'#2E7D32'};
  if(r===2) return {txt:'⭐⭐ 可以用',color:'#F57F17'};
  if(r===1) return {txt:'⭐ 環境描述',color:'#1565C0'};
  return {txt:'✗ 不適合',color:'#B71C1C'};
}
function renderSenses(){
  const g=document.getElementById('sense-grid');g.innerHTML='';
  for(let id=1;id<=5;id++){
    const s=SM[id],isSel=sel5.includes(id),maxed=sel5.length>=2&&!isSel;
    const rating=CS&&CS.senseRating?CS.senseRating[id]:2;
    const rl=getRatingLabel(rating);
    const b=document.createElement('button');
    b.className='sense-btn'+(isSel?' sel':'')+(maxed?' maxed':'');
    b.style.background=s.color;
    b.style.opacity=(maxed&&rating===0)?'0.25':(maxed?'0.38':'1');
    b.innerHTML=`<span class="scheck" style="color:${s.tc}">✓</span>
      <span class="sicon">${s.icon}</span>
      <span class="sname" style="color:${s.tc}">${id} ${s.name}</span>
      <span class="ssub" style="color:${s.tc}">${s.sub}</span>
      <span class="s-rating" style="color:${rl.color}">${rl.txt}</span>`;
    b.onclick=()=>toggleSense(id);
    g.appendChild(b);
  }
}

function renderHeart(){
  const row=document.getElementById('heart-row');row.innerHTML='';
  const locked=sel5.length<2,s=SM[6];
  const b=document.createElement('button');
  b.className='hbtn'+(heartOn?' sel':'')+(locked?' hlocked':'');b.style.background=s.color;
  b.innerHTML=`<span style="font-size:19px">${s.icon}</span><span style="font-size:14px;font-weight:700;color:${s.tc}">6 ${s.name}</span><span style="font-size:11px;color:${s.tc};opacity:.8">${s.sub}</span>${locked?`<span style="font-size:11px;color:var(--text-soft);margin-left:auto">先選兩種感覺</span>`:''}${heartOn?`<span style="color:${s.tc};margin-left:auto;font-weight:700">✓</span>`:''}`;
  b.onclick=()=>{if(!locked)toggleHeart();};row.appendChild(b);
}

function renderSlots(){
  const panel=document.getElementById('slots-panel'),rows=document.getElementById('slot-rows');
  const allIds=[...sel5,...(heartOn?[6]:[])];
  if(!allIds.length){panel.style.display='none';return;}
  panel.style.display='block';rows.innerHTML='';
  allIds.forEach(id=>{
    const s=SM[id],row=document.createElement('div');row.className='slot-row';
    const lbl=document.createElement('span');lbl.className='slot-lbl';lbl.style.color=s.tc;
    // 心覺只能1個，其他最多3個
    const maxW=id===6?1:3;
    const cur=(slots[id]||[]).length;
    lbl.textContent=s.lbl+(id!==6?`（${cur}/3）`:'')+'：';
    row.appendChild(lbl);
    const box=document.createElement('div');box.style.cssText='display:flex;flex-wrap:wrap;gap:5px;flex:1';
    if(slots[id]&&slots[id].length){
      slots[id].forEach((w,i)=>{
        const c=document.createElement('div');c.className='slot-filled';
        c.style.cssText=`background:${s.color};color:${s.tc};border-color:${s.tc}44`;
        c.innerHTML=`${w} <span class="slot-x" onclick="removeSlotWord(${id},${i})">✕</span>`;
        box.appendChild(c);
      });
    } else {
      const ph=document.createElement('div');ph.className='slot-ph';
      ph.textContent=id===6?`點下方「心覺詞」填入`:`點下方語詞填入（最多${maxW}個）`;
      box.appendChild(ph);
    }
    row.appendChild(box);rows.appendChild(row);
  });
  // 省略號輸入：當心覺是「讓我想到……」時顯示
  const elRow=document.getElementById('ellipsis-row');
  const hw=slots[6]&&slots[6][0];
  elRow.style.display=(hw&&hw.endsWith('……'))?'flex':'none';
}

function renderHints(){
  const tabs=document.getElementById('htabs'),legend=document.getElementById('hint-legend');
  const lbl=document.getElementById('hlabel'),chips=document.getElementById('hchips');
  const cwRow=document.getElementById('custom-word-row');
  const allIds=[...sel5,...(heartOn?[6]:[])];
  if(!allIds.length){tabs.innerHTML='';legend.innerHTML='';lbl.textContent='💡 請先點上方的感覺按鈕，語詞就會出現在這裡';chips.innerHTML='';cwRow.style.display='none';return;}
  if(!allIds.includes(activeTab))activeTab=allIds[0];
  tabs.innerHTML='';
  allIds.forEach(id=>{
    const s=SM[id],isA=id===activeTab,t=document.createElement('button');
    t.className='htab';t.style.cssText=`border-color:${isA?s.tc:'#ddd'};background:${isA?s.color:'#fff'};color:${s.tc};font-weight:${isA?700:400}`;
    t.textContent=`${s.icon} ${s.name}`;t.onclick=()=>{activeTab=id;renderHints();};tabs.appendChild(t);
  });
  legend.innerHTML=`<span><span class="ldot" style="background:#FFF3C4;border:1px solid #c8a000"></span>推薦語詞</span><span><span class="ldot" style="background:#F0F0F0;border:1px solid #ccc"></span>挑戰語詞</span>`;
  const s=SM[activeTab];const maxW2=activeTab===6?1:3;const curW=(slots[activeTab]||[]).length;lbl.textContent=`👇 選「${s.name}」語詞（已選${curW}/${maxW2}個，點已選的可取消）：`;
  chips.innerHTML='';
  const hints=getHints(activeTab);
  const fwArr=slots[activeTab]||[];
  const maxW=activeTab===6?1:3;
  const atMax=fwArr.length>=maxW;
  hints.forEach(h=>{
    const c=document.createElement('span'),used=fwArr.includes(h.w);
    const isEnv=(h.t==='env');
    const isChal=!h.isRec&&!isEnv;
    // class
    let cls='chip ';
    if(used) cls+='used';
    else if(isEnv) cls+='rec env-type';
    else if(h.isRec) cls+='rec';
    else cls+='chal';
    c.className=cls;
    if(h.isCustom) c.style.border='1.5px solid #4CAF50';
    if(!used&&atMax) c.style.opacity='0.4';
    // 提示文字
    let tipText='';
    if(isEnv) tipText=`💡 環境描述詞：用來描述${CS.name}周遭的環境，放在句首`;
    else if(isChal) tipText=`⚠️ 挑戰詞：這個感覺不太適合描述${CS.name}，試試看！`;
    c.innerHTML=`${h.w}${h.z?`<span class="chip-z">${h.z}</span>`:''}`
      +(tipText?`<span class="chip-tip">${tipText}</span>`:'');
    if(!used&&!atMax) c.onclick=()=>fillSlot(activeTab,h.w,h.t||'adj',h.prep||null);
    else if(used) c.onclick=()=>fillSlot(activeTab,h.w,h.t||'adj',h.prep||null);
    chips.appendChild(c);
  });
  // 自訂詞輸入列
  cwRow.style.display='flex';
  document.getElementById('custom-word-input').value='';
}

function renderPreview(){
  const preview=document.getElementById('sent-preview'),fs=document.getElementById('frame-switch');
  if(sel5.length<2||!heartOn){
    preview.innerHTML='<span class="blank">選好感覺並填入語詞後，句子會出現在這裡…</span>';
    fs.style.display='none';
    document.getElementById('sub-btn').disabled=true;
    document.getElementById('mic-btn').disabled=true;
    document.getElementById('mic-btn').style.opacity='.4';
    return;
  }
  const frames=buildFrames(CS,sel5,slots,slotTypes,slotPreps);
  fs.style.display='flex';fs.innerHTML='<span>換句型：</span>';
  frames.forEach((_,i)=>{const b=document.createElement('button');b.className='fbtn'+(i===frameIdx?' act':'');b.textContent=`句型${i+1}`;b.onclick=()=>{frameIdx=i;renderPreview();};fs.appendChild(b);});
  let html=frames[frameIdx];
  // highlight filled words
  Object.values(slots).forEach(arr=>{(arr||[]).forEach(w=>{if(w)html=html.replaceAll(w,`<span class="fw">${w}</span>`);});});
  if(ellipsisSuffix) html=html.replace('……',`<span class="fw">……${ellipsisSuffix}</span>`);
  html=html.replace(/〔[^〕]+〕/g,m=>`<span class="blank">${m}</span>`);
  preview.innerHTML=html;
  const ok=[...sel5,6].every(id=>slots[id]&&slots[id].length>0);
  document.getElementById('sub-btn').disabled=!ok;
  document.getElementById('mic-btn').disabled=!ok;
  document.getElementById('mic-btn').style.opacity=ok?'1':'.4';
}

// ── ELLIPSIS ───────────────────────────────────────────────────
function updateEllipsis(){
  ellipsisSuffix=document.getElementById('ellipsis-input').value.trim();
  renderPreview();
}

function getFinalSentence(){
  const frames=buildFrames(CS,sel5,slots,slotTypes,slotPreps);
  let s=frames[frameIdx]||'';
  const hw=slots[6]&&slots[6][0];
  if(ellipsisSuffix&&hw&&hw.endsWith('……')){
    s=s.replace('……',ellipsisSuffix);
  }
  return s;
}

// ── CUSTOM WORD INPUT ──────────────────────────────────────────
function addCustomWord(){
  const inp=document.getElementById('custom-word-input');
  const w=inp.value.trim();
  if(!w||!activeTab)return;
  if(!customWords[activeTab])customWords[activeTab]=[];
  if(customWords[activeTab].find(h=>h.w===w))return;
  customWords[activeTab].push({w,z:'',t:'adj'});
  inp.value='';
  renderHints();
}

let cwRecog=null,cwRecoding=false;
function toggleCustomMic(){
  const btn=document.getElementById('custom-mic-btn');
  const inp=document.getElementById('custom-word-input');
  if(!hasSpeech){alert('請用Chrome瀏覽器開啟語音功能');return;}
  if(cwRecoding){
    cwRecoding=false;if(cwRecog)try{cwRecog.stop();}catch(e){}
    btn.className='custom-mic-btn';btn.textContent='🎤';return;
  }
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  cwRecog=new SR();cwRecog.lang='zh-TW';cwRecog.continuous=false;cwRecog.interimResults=false;
  cwRecoding=true;btn.className='custom-mic-btn rec';btn.textContent='🔴';
  cwRecog.onresult=e=>{
    const w=e.results[0][0].transcript.trim();
    inp.value=w;
  };
  cwRecog.onend=()=>{cwRecoding=false;btn.className='custom-mic-btn';btn.textContent='🎤';};
  cwRecog.onerror=()=>{cwRecoding=false;btn.className='custom-mic-btn';btn.textContent='🎤';};
  cwRecog.start();
}

// Enter key to add custom word
document.addEventListener('DOMContentLoaded',()=>{
  const inp=document.getElementById('custom-word-input');
  if(inp) inp.addEventListener('keydown',e=>{if(e.key==='Enter')addCustomWord();});
});

// ── LOGIC ──────────────────────────────────────────────────────
function toggleSense(id){
  if(sel5.includes(id)){sel5=sel5.filter(x=>x!==id);delete slots[id];delete slotTypes[id];delete slotPreps[id];if(activeTab===id)activeTab=sel5[0]||(heartOn?6:null);}
  else{if(sel5.length>=2)return;sel5.push(id);activeTab=id;}
  updateDots();renderSenses();renderHeart();renderSlots();renderHints();renderPreview();
}

function toggleHeart(){
  if(sel5.length<2)return;heartOn=!heartOn;
  if(!heartOn){delete slots[6];delete slotTypes[6];if(activeTab===6)activeTab=sel5[sel5.length-1]||null;ellipsisSuffix='';}
  else activeTab=6;
  updateDots();renderHeart();renderSlots();renderHints();renderPreview();
}

function fillSlot(sid,w,t,prep){
  if(!slots[sid]) slots[sid]=[];
  if(!slotTypes[sid]) slotTypes[sid]=[];
  if(!slotPreps[sid]) slotPreps[sid]=[];
  // 若已選過就移除（切換），否則加入（最多3個）
  const idx=slots[sid].indexOf(w);
  if(idx>=0){
    slots[sid].splice(idx,1);
    slotTypes[sid].splice(idx,1);
    slotPreps[sid].splice(idx,1);
  } else {
    if(slots[sid].length>=3) return; // 最多3個
    slots[sid].push(w);
    slotTypes[sid].push(t||'adj');
    slotPreps[sid].push(prep||null);
  }
  if(slots[sid].length===0){ delete slots[sid];delete slotTypes[sid];delete slotPreps[sid]; }
  if(sid===6){
    // 心覺只能選1個：若已有舊值先清掉再加新的
    if(slots[6]&&slots[6].length>0&&!slots[6].includes(w)){
      slots[6]=[]; slotTypes[6]=[]; slotPreps[6]=[];
      slots[6].push(w); slotTypes[6].push(t||'heart'); slotPreps[6].push(prep||null);
    }
    const hw=slots[6]&&slots[6][0];
    if(hw&&hw.endsWith('……')){
      document.getElementById('ellipsis-input').value='';
      ellipsisSuffix='';
    }
  }
  renderSlots();renderHints();renderPreview();
}

function removeSlotWord(sid,idx){
  if(!slots[sid]) return;
  slots[sid].splice(idx,1);
  slotTypes[sid].splice(idx,1);
  slotPreps[sid].splice(idx,1);
  if(slots[sid].length===0){ delete slots[sid];delete slotTypes[sid];delete slotPreps[sid]; }
  if(sid===6){ellipsisSuffix='';document.getElementById('ellipsis-row').style.display='none';}
  activeTab=sid;renderSlots();renderHints();renderPreview();
}
function removeSlot(sid){
  delete slots[sid];delete slotTypes[sid];delete slotPreps[sid];
  if(sid===6){ellipsisSuffix='';document.getElementById('ellipsis-row').style.display='none';}
  activeTab=sid;renderSlots();renderHints();renderPreview();
}

function updateDots(){
  const s1=sel5.length>=2,s2=s1&&heartOn;
  setDot('dot1',s1?'done':'cur');setDot('dot2',s2?'done':s1?'cur':'');setDot('dot3',s2?'cur':'');
}

function setDot(id,st){
  const d=document.getElementById(id);d.className='sdot'+(st?' '+st:'');d.textContent=st==='done'?'✓':id==='dot1'?'1':id==='dot2'?'2':'3';
}

// ── 語詞適切性評估 ────────────────────────────────────────────
// 針對挑戰詞產生改寫建議
// 改寫策略：把不適合的感覺詞，轉換成以場景補充的形式重組句子

function evaluateSentence(sentence) {
  const chalWords = [];
  const envWords = [];
  const badSenses = []; // 選了 rating=0 的感覺

  sel5.forEach(sid => {
    const ws = slots[sid] || [];
    const ts = slotTypes[sid] || [];
    const chalSet = new Set(((CS.chal||{})[sid]||[]).map(h=>h.w));
    const rating = CS&&CS.senseRating ? CS.senseRating[sid] : 2;
    // 若整個感覺的 rating=0，這個感覺本身就不適合
    if(rating===0 && ws.length>0) badSenses.push({sid, sname:SM[sid].name});
    ws.forEach((w,i) => {
      const t = ts[i]||'adj';
      if(chalSet.has(w)) chalWords.push({sid, w, sname:SM[sid].name});
      else if(t==='env') envWords.push({sid, w, sname:SM[sid].name});
    });
  });

  if(!chalWords.length && !envWords.length && !badSenses.length) return null;

  // 只有環境詞 → 正面說明
  if(!chalWords.length && !badSenses.length && envWords.length) {
    const names = [...new Set(envWords.map(c=>c.sname))];
    return {
      type:'env',
      hint:`👍 你用「${names.join('、')}」來描述「${CS.name}」周遭的環境，這是很棒的寫法！環境描述可以讓句子更有畫面感。`,
      suggestion:null, chalWords:[]
    };
  }

  // 選了完全不適合的感覺 (rating=0)
  if(badSenses.length) {
    const names = [...new Set(badSenses.map(c=>c.sname))];
    const tips = names.map(n=>{
      const sid = badSenses.find(b=>b.sname===n).sid;
      return (CS.chalTip&&CS.chalTip[sid]) || `${CS.name}不太適合用${n}來描述喔！`;
    });
    const recIds = Object.entries(CS.senseRating||{}).filter(([k,v])=>v>=2&&k!='6').map(([k])=>Number(k));
    const recNames = recIds.map(id=>SM[id].name).join('、');
    const hint = tips.join(' ') + (recNames?`
💡 試試看改用：${recNames}！`:'');
    const suggestion = CS.suggestSentence || null;
    return {type:'chal', hint, suggestion, chalWords:badSenses};
  }

  // 有挑戰詞
  const names = [...new Set(chalWords.map(c=>c.sname))];
  const tips = [...new Set(chalWords.map(c=>{
    const tip = CS.chalTip&&CS.chalTip[c.sid];
    return tip || `「${c.w}」用來描述「${CS.name}」有點不太自然喔！`;
  }))];
  const recIds = Object.entries(CS.senseRating||{}).filter(([k,v])=>v>=2&&k!='6').map(([k])=>Number(k));
  const recNames = recIds.map(id=>SM[id].name).join('、');
  const hint = tips.join('
') + (recNames?`
💡 這題最適合用：${recNames}！`:'');
  const suggestion = buildSuggestion(chalWords, sentence);
  return {type:'chal', hint, suggestion, chalWords};
}

function buildSuggestion(chalWords, originalSentence) {
  // 把挑戰感覺的詞，改成「場景中有這個感覺」的補充子句
  // 例：月亮 + 聽覺「沙沙作響」→「微風吹過草地，發出沙沙作響的聲音」
  const sceneTemplates = {
    // 聽覺挑戰詞的場景補充
    2: {
      '沙沙作響':   '微風吹過草地，發出沙沙作響的聲音，',
      '叮咚叮咚':   '遠處傳來叮咚叮咚的聲音，',
      '轟隆轟隆':   '遠方雷聲轟隆轟隆，',
      '咕嚕咕嚕':   '肚子咕嚕咕嚕叫，',
      '大聲':       '周圍很大聲，',
      '小聲':       '周圍靜悄悄，只有小小聲，',
      '好聽':       '耳邊傳來好聽的聲音，',
      '安靜':       '四周一片安靜，',
    },
    // 味覺挑戰詞的場景補充（用於非食物）
    4: {
      '甜甜的':     '想像嘴裡有甜甜的滋味，',
      '好吃':       '好像很好吃的感覺，',
      '酸酸的':     '想起了酸酸的味道，',
      '苦苦的':     '有一點苦苦的感覺，',
    },
    // 嗅覺挑戰詞（用於無香味的物體）
    3: {
      '香香的':     '空氣中飄來香香的味道，',
      '臭臭的':     '好像有臭臭的氣味，',
    },
  };

  let prefix = '';
  chalWords.forEach(({sid, w}) => {
    const template = (sceneTemplates[sid]||{})[w];
    if(template) prefix += template;
  });

  if(!prefix) return null;

  // 把原句裡包含挑戰詞的片語移除，保留適合的部分
  // 取得所有適合的感覺詞重新組句
  const goodIds = sel5.filter(sid => {
    const chalSet = new Set(((CS.chal||{})[sid]||[]).map(h=>h.w));
    const ws = slots[sid]||[];
    return ws.some(w=>!chalSet.has(w)); // 至少有一個適合的詞
  });

  // 用適合的詞重新組一個簡單句子
  const name = CS.name, cl = CS.cl||'個';
  const wH = (slots[6]||[])[0] || '';

  let coreParts = [];
  goodIds.forEach(sid => {
    const chalSet = new Set(((CS.chal||{})[sid]||[]).map(h=>h.w));
    const ws = (slots[sid]||[]).filter(w=>!chalSet.has(w));
    if(!ws.length) return;
    const ts = slotTypes[sid]||[];
    const ps = slotPreps[sid]||[];
    ws.forEach((w,i)=>{
      const t=ts[i]||'adj', p=ps[i]||null;
      coreParts.push(makePhrase(sid,w,t,p));
    });
  });

  let core;
  if(coreParts.length>=2) {
    // 第一個詞前置修飾，其餘做謂語
    const firstWord = (slots[goodIds[0]]||[])[0];
    const firstType = (slotTypes[goodIds[0]]||[])[0]||'adj';
    const fm = firstType==='adj'
      ? (firstWord.endsWith('的')?firstWord.slice(0,-1):firstWord)+'的'
      : firstWord+'的';
    core = `${fm}${name}，${coreParts.slice(1).join('、')}，${wH}。`;
  } else if(coreParts.length===1) {
    core = `這${cl}${name}${coreParts[0]}，${wH}。`;
  } else {
    core = `這${cl}${name}，${wH}。`;
  }

  if(!prefix && !core) return CS.suggestSentence || null;
  return (prefix + core) || CS.suggestSentence || null;
}

let suggestedSentence = '';

function useSuggestion() {
  if(!suggestedSentence) return;
  document.getElementById('msent').textContent = suggestedSentence;
  document.getElementById('mfeedback').style.display = 'none';
  document.getElementById('msuggest').style.display = 'none';
  document.getElementById('mbtn-use').style.display = 'none';
  document.getElementById('modal-title').textContent = '很棒！改得很好！';
  document.getElementById('mpraise').textContent = '你知道怎麼讓句子更自然，真厲害！';
  currentTTSSentence = suggestedSentence;
  const ttsBtn = document.getElementById('tts-btn');
  ttsBtn.textContent = '🔊 聽聽看這句話';
  ttsBtn.className = 'tts-btn';
}

function submitSentence(){
  const s=getFinalSentence();
  if(!s||s.includes('〔'))return;
  stopMic();score++;
  document.getElementById('score-display').textContent=score+' 句 ⭐';
  const stars=score>=8?'⭐⭐⭐':score>=4?'⭐⭐':'⭐';
  const pp=['你說得超棒！真是小作家！','哇，這句話說得好美！','太棒了！繼續加油！','你是最棒的小作家！'];

  // 評估語詞適切性
  const evalResult = evaluateSentence(s);
  const feedback = document.getElementById('mfeedback');
  const suggest = document.getElementById('msuggest');
  const suggestText = document.getElementById('msuggest-text');
  const mbtnUse = document.getElementById('mbtn-use');
  const modalTitle = document.getElementById('modal-title');

  if(!evalResult) {
    // 全部適合
    modalTitle.textContent = '太棒了！';
    feedback.className = 'mfeedback good';
    feedback.textContent = '✓ 你選的語詞跟圖片非常搭配，句子很自然！';
    suggest.style.display = 'none';
    mbtnUse.style.display = 'none';
    suggestedSentence = '';
    document.getElementById('mstars').textContent = stars;
    document.getElementById('mpraise').textContent = pp[Math.floor(Math.random()*pp.length)];
  } else if(evalResult.type==='env') {
    // 環境描述詞，正面說明
    modalTitle.textContent = '太棒了！';
    feedback.className = 'mfeedback good';
    feedback.textContent = evalResult.hint;
    suggest.style.display = 'none';
    mbtnUse.style.display = 'none';
    suggestedSentence = '';
    document.getElementById('mstars').textContent = stars;
    document.getElementById('mpraise').textContent = pp[Math.floor(Math.random()*pp.length)];
  } else {
    // 有挑戰詞
    modalTitle.textContent = '句子完成了！不過……';
    feedback.className = 'mfeedback warn';
    feedback.textContent = evalResult.hint;
    suggestedSentence = evalResult.suggestion || '';
    if(suggestedSentence) {
      suggest.style.display = 'block';
      suggestText.textContent = suggestedSentence;
      mbtnUse.style.display = 'inline-block';
    } else {
      suggest.style.display = 'none';
      mbtnUse.style.display = 'none';
    }
    document.getElementById('mpraise').textContent = '試試看改一改，句子會更棒喔！';
    document.getElementById('mstars').textContent = '🤔';
  }

  document.getElementById('msent').textContent = s;
  // 啟用語音按鈕
  const ttsBtn = document.getElementById('tts-btn');
  ttsBtn.disabled = !('speechSynthesis' in window);
  ttsBtn.textContent = '🔊 聽聽看這句話';
  ttsBtn.className = 'tts-btn';
  currentTTSSentence = s;
  document.getElementById('modal').classList.add('show');
}

function toggleMic(){
  if(!hasSpeech){document.getElementById('nospeech').style.display='block';return;}
  if(recoding){stopMic();return;}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  recog=new SR();recog.lang='zh-TW';recog.continuous=false;recog.interimResults=true;recoding=true;
  const btn=document.getElementById('mic-btn');btn.className='mic-btn rec';btn.textContent='🔴 說話中… 點停止';
  const mo=document.getElementById('mic-out');mo.style.display='block';mo.innerHTML='';let ft='';
  recog.onresult=e=>{let interim='';for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)ft+=e.results[i][0].transcript;else interim=e.results[i][0].transcript;}mo.innerHTML=ft+`<span class="partial">${interim}</span>`;};
  recog.onend=()=>stopMic();recog.onerror=()=>stopMic();recog.start();
}

function stopMic(){recoding=false;if(recog)try{recog.stop();}catch(e){}const btn=document.getElementById('mic-btn');btn.className='mic-btn idle';btn.textContent='🎤 朗讀句子';}

function clearAll(){
  sel5=[];heartOn=false;activeTab=null;slots={};slotTypes={};slotPreps={};frameIdx=0;ellipsisSuffix='';
  document.getElementById('mic-out').style.display='none';
  document.getElementById('nospeech').style.display='none';
  document.getElementById('ellipsis-row').style.display='none';
  document.getElementById('ellipsis-input').value='';
  document.getElementById('custom-word-row').style.display='none';
  setDot('dot1','cur');setDot('dot2','');setDot('dot3','');
  renderSenses();renderHeart();renderSlots();renderHints();renderPreview();
  document.getElementById('sub-btn').disabled=true;
  document.getElementById('mic-btn').disabled=true;
  document.getElementById('mic-btn').style.opacity='.4';
}

function closeModal(){
  stopTTS();
  document.getElementById('modal').classList.remove('show');
  nextSubject();
}

// ── TTS 語音朗讀 ────────────────────────────────────────────
let currentTTSSentence = '';
let ttsUtterance = null;

function toggleTTS(){
  const btn = document.getElementById('tts-btn');
  if(!('speechSynthesis' in window)) return;
  if(window.speechSynthesis.speaking){
    stopTTS();
    return;
  }
  speakSentence(currentTTSSentence);
}

function speakSentence(text){
  if(!text||!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const btn = document.getElementById('tts-btn');
  ttsUtterance = new SpeechSynthesisUtterance(text);
  ttsUtterance.lang = 'zh-TW';
  ttsUtterance.rate = 0.85;  // 稍慢，適合孩子聆聽
  ttsUtterance.pitch = 1.1;
  // 優先選台灣中文語音
  const voices = window.speechSynthesis.getVoices();
  const twVoice = voices.find(v=>v.lang==='zh-TW')||voices.find(v=>v.lang.startsWith('zh'))||null;
  if(twVoice) ttsUtterance.voice = twVoice;
  ttsUtterance.onstart = ()=>{
    btn.className='tts-btn playing';
    btn.textContent='⏹ 停止朗讀';
  };
  ttsUtterance.onend = ttsUtterance.onerror = ()=>{
    btn.className='tts-btn';
    btn.textContent='🔊 再聽一次';
  };
  window.speechSynthesis.speak(ttsUtterance);
}

function stopTTS(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  const btn = document.getElementById('tts-btn');
  if(btn){ btn.className='tts-btn'; btn.textContent='🔊 聽聽看這句話'; }
}

function nextSubject(){
  let s;do{s=SUBJECTS[Math.floor(Math.random()*SUBJECTS.length)];}while(s===CS&&SUBJECTS.length>1);
  CS=s;customWords={};
  document.getElementById('cat-tag').textContent=s.cat;
  document.getElementById('subj-emoji').textContent=s.e;
  document.getElementById('subj-name').textContent=s.name;
  document.getElementById('subj-zhuyin').textContent=s.z;
  const recIds=Object.keys(s.rec||{}).filter(k=>k!='6').map(Number);
  const recNames=recIds.map(id=>SM[id].name).join('＋');
  document.getElementById('tip-text').textContent=recNames?`💬 提示：「${s.name}」很適合用 ${recNames} 來描述喔！`:`💬 試試看選三種感覺，說出「${s.name}」的美麗句子！`;
  clearAll();
}

if(!hasSpeech)document.getElementById('nospeech').style.display='block';
nextSubject();