const AllWidget = ({ count }: { count: number }) => {
  const arr = [];
  for (let i = 1; i <= count; i++){
    arr.push(`widget ${i}`);
  }
  return (
    <div className="widgetes">
      {arr.map(item => <div className="widget">{item}</div>)}
    </div>
  )
}

export default AllWidget

// Секция виджетов. По хорошему, как мне кажется, каждый виджет должет быть отдельным компонентом.