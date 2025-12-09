const menu = [
  { name: "煮込みバラ肉ラーメン（小）", price: 900 },
  { name: "味玉ラーメン（小）", price: 750 },
  { name: "ラーメン（小）", price: 620 },
  { name: "野菜ラーメン（小）", price: 780 },
  { name: "彩ラーメン（並）", price: 910 },
  { name: "チャーシューメン（並）", price: 880 },
  { name: "トッピング単品", price: 130 },
  { name: "唐揚げ2個", price: 240 },

  { name: "唐揚げ5個", price: 420 },
  { name: "鉄板焼豚つまみ", price: 360 },
  { name: "野菜盛り", price: 250 },
  { name: "焼豚もやし", price: 260 },
  { name: "焼豚", price: 180 },
  { name: "フライドポテト", price: 200 },
  { name: "温玉丼", price: 250 },
  { name: "温玉丼（大）", price: 310 },

  { name: "厚切り豚丼", price: 450 },
  { name: "厚切り豚丼（大）", price: 510 },
  { name: "ごはん（小）", price: 110 },
  { name: "ごはん（中）", price: 160 },
  { name: "ごはん（大）", price: 210 },
  { name: "単品餃子", price: 250 },
  { name: "単品バラ肉", price: 380 },
  { name: "日替わり丼", price: 260 },

  { name: "Bセット（餃子ごはん）", price: 320 },
  { name: "日替わり丼（大）", price: 320 },
  { name: "Cセット（唐揚げごはん）", price: 320 },
  { name: "鉄板チャーハン", price: 290 },
  { name: "鉄板チャーハン（大）", price: 350 },
  { name: "明太マヨチャーハン", price: 360 },
  { name: "明太マヨチャーハン（大）", price: 420 },
  { name: "高菜チャーハン", price: 360 },

  { name: "高菜チャーハン", price: 420 },
  { name: "餃子2枚セット", price: 440 },
  { name: "餃子唐揚げセット", price: 640 },
  { name: "唐揚げ8個セット", price: 640 },
  { name: "にんにく唐辛子（持ち帰り）", price: 150 },
  { name: "キムチ（持ち帰り）", price: 320 },
  { name: "横綱のカンタン麺（持ち帰り）", price: 410 },
  { name: "単品餃子（持ち帰り）", price: 250 },
];

function gacha() {
  let budget = 1050;
  let list = [];

  while (true) {

    // 残金に応じた候補を作成
    let candidates;

    
    // 「残金以内のすべての商品」
    candidates = menu.filter(item => item.price <= budget);
    

    // 候補が1つもなければ終了
    if (candidates.length === 0) break;

    // ランダムに1つ選ぶ
    const item = candidates[Math.floor(Math.random() * candidates.length)];

    budget -= item.price;
    list.push(item);
  }

  // 表示処理
  let text = "--- 選ばれたメニュー ---\n";
  let total = 0;
  list.forEach(i => {
    text += `${i.name} : ${i.price}円\n`;
    total += i.price;
  });
  text += `\n合計: ${total}円`;

  document.getElementById("result").innerText = text;
}
