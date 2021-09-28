document.querySelector('mutation-test-report-app').report = {"files":{"/home/eli/trybe/trybe_exercises/Front-end/Bloco_15_React-Testing-Library/15.2/exercise-digimon-finders/src/App.js":{"language":"javascript","mutants":[{"id":"1","location":{"end":{"column":76,"line":8},"start":{"column":18,"line":8}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"7","location":{"end":{"column":6,"line":18},"start":{"column":31,"line":15}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"16","location":{"end":{"column":10,"line":31},"start":{"column":54,"line":26}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"0","location":{"end":{"column":4,"line":12},"start":{"column":17,"line":6}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"12","location":{"end":{"column":79,"line":24},"start":{"column":13,"line":24}},"mutatorName":"StringLiteral","replacement":"``","status":"Survived"},{"id":"14","location":{"end":{"column":12,"line":31},"start":{"column":15,"line":26}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"9","location":{"end":{"column":22,"line":23},"start":{"column":9,"line":23}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"6","location":{"end":{"column":7,"line":18},"start":{"column":19,"line":15}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"3","location":{"end":{"column":56,"line":8},"start":{"column":51,"line":8}},"mutatorName":"BooleanLiteral","replacement":"true","status":"Survived"},{"id":"11","location":{"end":{"column":6,"line":32},"start":{"column":24,"line":23}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"4","location":{"end":{"column":74,"line":8},"start":{"column":72,"line":8}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Survived"},{"id":"15","location":{"end":{"column":11,"line":31},"start":{"column":42,"line":26}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"10","location":{"end":{"column":22,"line":23},"start":{"column":9,"line":23}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"5","location":{"end":{"column":4,"line":19},"start":{"column":21,"line":14}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"2","location":{"end":{"column":37,"line":8},"start":{"column":35,"line":8}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Survived"},{"id":"8","location":{"end":{"column":4,"line":33},"start":{"column":26,"line":21}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"22","location":{"end":{"column":38,"line":56},"start":{"column":11,"line":56}},"mutatorName":"LogicalOperator","replacement":"isFetching || !errorMessage","status":"Survived"},{"id":"23","location":{"end":{"column":38,"line":56},"start":{"column":25,"line":56}},"mutatorName":"BooleanLiteral","replacement":"errorMessage","status":"Survived"},{"id":"18","location":{"end":{"column":4,"line":62},"start":{"column":12,"line":35}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"19","location":{"end":{"column":69,"line":44},"start":{"column":24,"line":44}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"17","location":{"end":{"column":27,"line":30},"start":{"column":23,"line":30}},"mutatorName":"BooleanLiteral","replacement":"false","status":"Survived"},{"id":"20","location":{"end":{"column":38,"line":56},"start":{"column":11,"line":56}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"13","location":{"end":{"column":34,"line":25},"start":{"column":15,"line":25}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"21","location":{"end":{"column":38,"line":56},"start":{"column":11,"line":56}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"25","location":{"end":{"column":55,"line":58},"start":{"column":20,"line":58}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"24","location":{"end":{"column":55,"line":58},"start":{"column":20,"line":58}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"26","location":{"end":{"column":55,"line":58},"start":{"column":20,"line":58}},"mutatorName":"LogicalOperator","replacement":"errorMessage && 'Faça uma pesquisa'","status":"Survived"},{"id":"27","location":{"end":{"column":55,"line":58},"start":{"column":36,"line":58}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"}],"source":"import React from 'react';\nimport './App.css';\nimport Digimon from './Digimon';\n\nclass App extends React.Component {\n  constructor() {\n    super();\n    this.state = { searchDigimon: '', isFetching: false, errorMessage: '' };\n\n    this.inputValue = this.inputValue.bind(this);\n    this.requestDigimon = this.requestDigimon.bind(this);\n  }\n\n  inputValue(value) {\n    this.setState((state) => ({\n      ...state,\n      searchDigimon: value,\n    }));\n  }\n\n  async requestDigimon() {\n    const { searchDigimon } = this.state;\n    if (searchDigimon) {\n      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)\n        .then((res) => res.json())\n        .then((results) => this.setState((state) => ({\n          ...state,\n          digimon: results[0],\n          errorMessage: results.ErrorMsg,\n          isFetching: true,\n        })));\n    }\n  }\n\n  render() {\n    const { digimon, searchDigimon, isFetching, errorMessage } = this.state;\n    return (\n      <div className=\"App\">\n        <label htmlFor=\"search-input\">\n          Digimon\n          <input\n            id=\"search-input\"\n            value={ searchDigimon }\n            onChange={ ({ target }) => this.inputValue(target.value) }\n            data-testid=\"search-input\"\n          />\n        </label>\n        <button\n          data-testid=\"search-button\"\n          onClick={ this.requestDigimon }\n          type=\"button\"\n        >\n          Search Digimon\n        </button>\n        {\n          isFetching && !errorMessage\n            ? <Digimon digimon={ digimon } />\n            : <h1>{errorMessage || 'Faça uma pesquisa'}</h1>\n        }\n      </div>\n    );\n  }\n}\n\nexport default App;\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};