type DataType = {
  a: number;
  helloworld: () => void;
};

// builtin 类型 number string boolean ... any voild unknow

function fn(data: DataType, e?): boolean {
  return !!data.a;
}

type DataType2 = {
  a: number,
  helloworld: () => void
}

// 生产数据
const d: DataType2 = {
  a: 2,
  helloworld: () => {}
}

// 消费
fn(d)
