
const Style = () => {

    let bg = {
        backgroundColor: 'blue',
        color: '#fff',
    }

  return (
    <div>
        <h2 style={{color: 'red'}}>Inline</h2>
        <h2 style={bg}>Internal</h2>
        <h3 className="external">External</h3>
    </div>
  )
}

export default Style