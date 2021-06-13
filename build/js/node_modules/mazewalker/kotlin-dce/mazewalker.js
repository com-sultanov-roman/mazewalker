(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'mazewalker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'mazewalker'.");
    }root.mazewalker = factory(typeof mazewalker === 'undefined' ? {} : mazewalker, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Throwable = Error;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Random = Kotlin.kotlin.random.Random;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var throwCCE = Kotlin.throwCCE;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var numberToInt = Kotlin.numberToInt;
  var throwUPAE = Kotlin.throwUPAE;
  var removeLast = Kotlin.kotlin.collections.removeLast_vvxzk3$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var JsMath = Math;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var toChar = Kotlin.toChar;
  var toBoxedChar = Kotlin.toBoxedChar;
  var ArithmeticException = Kotlin.kotlin.ArithmeticException;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toMutableList_0 = Kotlin.kotlin.text.toMutableList_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var maxOrNull = Kotlin.kotlin.collections.maxOrNull_exjks8$;
  var minOrNull = Kotlin.kotlin.collections.minOrNull_exjks8$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var println_0 = Kotlin.kotlin.io.println_s8jyv4$;
  var Array_0 = Array;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var matches = Kotlin.kotlin.text.matches_rjktp$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var printStackTrace = Kotlin.kotlin.printStackTrace_dbl4o4$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var getCallableRef = Kotlin.getCallableRef;
  function Automaton() {
  }
  Automaton.prototype.getName = function () {
    return 'dfa';
  };
  Automaton.prototype.getColor = function () {
    return '#ff0000';
  };
  Automaton.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Automaton', interfaces: []};
  function AutomatonBuilder() {
  }
  AutomatonBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'AutomatonBuilder', interfaces: []};
  function AutomatonContext(automaton) {
    this.automaton_0 = automaton;
    this.x_0 = 16;
    this.y_0 = 33;
    this.movable = true;
    this.visible = true;
    this.color = '#ff0000';
    this.visited = LinkedHashSet_init();
  }
  AutomatonContext.prototype.next_61zpoe$ = function (input) {
    var output = this.automaton_0.next_61zpoe$(input);
    switch (output) {
      case 'E':
        this.x_0 = this.x_0 + 1 | 0;
        break;
      case 'W':
        this.x_0 = this.x_0 - 1 | 0;
        break;
      case 'S':
        this.y_0 = this.y_0 - 1 | 0;
        break;
      case 'N':
        this.y_0 = this.y_0 + 1 | 0;
        break;
    }
    if (!equals(output, 'L'))
      this.visited.add_11rb$(to(this.x_0, this.y_0));
    return output;
  };
  AutomatonContext.prototype.getState = function () {
    return this.automaton_0.getState();
  };
  AutomatonContext.prototype.getLastOutput = function () {
    return this.automaton_0.getLastOutput();
  };
  AutomatonContext.prototype.prototype = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  AutomatonContext.prototype.getColor = function () {
    return this.color;
  };
  AutomatonContext.prototype.getX = function () {
    return this.x_0;
  };
  AutomatonContext.prototype.getY = function () {
    return this.y_0;
  };
  AutomatonContext.prototype.setXY_1fzo63$ = function (xy) {
    this.x_0 = xy.first;
    this.y_0 = xy.second;
    this.visited.add_11rb$(to(this.x_0, this.y_0));
    return this;
  };
  AutomatonContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'AutomatonContext', interfaces: [Automaton]};
  function AutomatonContextManager() {
    this.contextMap_0 = LinkedHashMap_init();
  }
  AutomatonContextManager.prototype.addContext_5yeq41$ = function (automatonContext, contextName) {
    if (this.contextMap_0.get_11rb$(contextName) == null) {
      this.contextMap_0.put_xwzc9p$(contextName, automatonContext);
    }};
  AutomatonContextManager.prototype.getContexts_61zpoe$ = function (contextName) {
    var tmp$;
    tmp$ = this.contextMap_0.get_11rb$(contextName);
    if (tmp$ == null) {
      throw new NullPointerException('No such context with name ' + '"' + contextName + '"');
    }return tmp$;
  };
  AutomatonContextManager.prototype.move = function () {
  };
  AutomatonContextManager.prototype.getContextMap = function () {
    return this.contextMap_0;
  };
  AutomatonContextManager.$metadata$ = {kind: Kind_CLASS, simpleName: 'AutomatonContextManager', interfaces: []};
  function AutomatonRepository() {
    AutomatonRepository$Companion_getInstance();
    this.rmbClickPosition = to(0, 0);
    this.automatonMap = LinkedHashMap_init();
    this.listener = AutomatonRepository$listener$lambda;
  }
  function AutomatonRepository$Companion() {
    AutomatonRepository$Companion_instance = this;
    this.automatonRepository_0 = new AutomatonRepository();
  }
  AutomatonRepository$Companion.prototype.getInstance = function () {
    return this.automatonRepository_0;
  };
  AutomatonRepository$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var AutomatonRepository$Companion_instance = null;
  function AutomatonRepository$Companion_getInstance() {
    if (AutomatonRepository$Companion_instance === null) {
      new AutomatonRepository$Companion();
    }return AutomatonRepository$Companion_instance;
  }
  function AutomatonRepository$addEventListeners$lambda(this$AutomatonRepository, closure$v) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = this$AutomatonRepository.automatonMap.get_11rb$(closure$v.getName())) != null ? tmp$.prototype() : null;
      if (tmp$_0 == null) {
        throw new NullPointerException('no automaton with name ' + closure$v.getName());
      }var automatonContext = new AutomatonContext(tmp$_0);
      automatonContext.color = closure$v.getColor();
      if (SceneController$Companion_getInstance().getInstance().scene.getMaze().getCellColor_vux9f0$(this$AutomatonRepository.rmbClickPosition.first, this$AutomatonRepository.rmbClickPosition.second) === 4) {
        throw IllegalArgumentException_init('Automaton can not be placed on border');
      }automatonContext.setXY_1fzo63$(this$AutomatonRepository.rmbClickPosition);
      var name = Random.Default.nextInt_vux9f0$(42, 4242);
      SceneController$Companion_getInstance().getInstance().scene.getAutomatonContextManager().addContext_5yeq41$(automatonContext, closure$v.getName() + '#' + toString(name));
      SceneController$Companion_getInstance().getInstance().draw();
      return Unit;
    };
  }
  AutomatonRepository.prototype.addEventListeners = function () {
    var tmp$;
    tmp$ = this.automatonMap.values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      document.getElementById(v.getName()).addEventListener('click', AutomatonRepository$addEventListeners$lambda(this, v));
    }
  };
  AutomatonRepository.prototype.toString = function () {
    var tmp$;
    var stringBuilder = StringBuilder_init();
    tmp$ = this.automatonMap.values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      stringBuilder.append_pdl1vj$('<div class=' + '"' + 'item' + '"' + ' id=' + '"' + v.getName() + '"' + '>' + v.getName() + '<\/div>').append_pdl1vj$('\n');
    }
    return stringBuilder.toString();
  };
  function AutomatonRepository$listener$lambda(id) {
    console.log(id);
    return Unit;
  }
  AutomatonRepository.$metadata$ = {kind: Kind_CLASS, simpleName: 'AutomatonRepository', interfaces: []};
  function DFA() {
    this.stateMap_smode$_0 = LinkedHashMap_init();
    this.currentState = STATE_DEFAULT_NAME;
    this.output = 'L';
    this.name = 'dfa';
    this.color = '#ff0000';
  }
  Object.defineProperty(DFA.prototype, 'stateMap', {configurable: true, get: function () {
    return this.stateMap_smode$_0;
  }, set: function (value) {
    this.stateMap_smode$_0 = value;
  }});
  DFA.prototype.next_61zpoe$ = function (input) {
    var input_ = this.prepareInput_61zpoe$(input);
    var key = this.currentState + '%' + input_;
    var tmp$;
    var stateOutput = split((tmp$ = this.stateMap.get_11rb$(key)) != null ? tmp$ : this.currentState + '%L', ['%']);
    var state = stateOutput.get_za3lpa$(0);
    var output = stateOutput.get_za3lpa$(1);
    this.currentState = state;
    return output;
  };
  DFA.prototype.getState = function () {
    return this.currentState;
  };
  DFA.prototype.getLastOutput = function () {
    return this.output;
  };
  DFA.prototype.prototype = function () {
    var tmp$;
    var dfa = new DFA();
    dfa.color = this.color;
    dfa.name = this.name;
    dfa.currentState = this.currentState;
    dfa.stateMap = toMutableMap(this.stateMap);
    return Kotlin.isType(tmp$ = dfa, Automaton) ? tmp$ : throwCCE();
  };
  DFA.prototype.getName = function () {
    return this.name;
  };
  DFA.prototype.getColor = function () {
    return this.color;
  };
  DFA.$metadata$ = {kind: Kind_CLASS, simpleName: 'DFA', interfaces: [Prepare, Automaton]};
  function DFABuilder() {
    this.stateMap_0 = HashMap_init();
    this.name__0 = 'dfa';
    this.color__0 = '#ff0000';
  }
  DFABuilder.prototype.row_w74nik$ = function (curState, input, nextState, output) {
    var input_ = this.prepareInput_61zpoe$(input);
    var key = curState + '%' + input_;
    if (this.stateMap_0.containsKey_11rb$(key)) {
      throw Exception_init('Error: row with input: ' + (input + ' and state: ') + (curState + ' is already specified'));
    } else {
      var $receiver = this.stateMap_0;
      var value = nextState + '%' + output;
      $receiver.put_xwzc9p$(key, value);
    }
    return this;
  };
  DFABuilder.prototype.name_61zpoe$ = function (name) {
    this.name__0 = name;
    return this;
  };
  DFABuilder.prototype.color_61zpoe$ = function (color) {
    this.color__0 = color;
    return this;
  };
  DFABuilder.prototype.build = function () {
    var tmp$;
    var dfa = new DFA();
    dfa.color = this.color__0;
    dfa.name = this.name__0;
    dfa.stateMap = this.stateMap_0;
    return Kotlin.isType(tmp$ = dfa, Automaton) ? tmp$ : throwCCE();
  };
  DFABuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'DFABuilder', interfaces: [Prepare, AutomatonBuilder]};
  function Prepare() {
  }
  Prepare.prototype.prepareInput_61zpoe$ = function (input) {
    var inputCharacters = listOf(['N', 'E', 'S', 'W', 'ES', 'ESW', 'EW', 'NE', 'NES', 'NESW', 'NEW', 'NS', 'NSW', 'NW', 'WS']);
    var res = {v: ''};
    var tmp$;
    tmp$ = inputCharacters.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.equals_puj7f4$(input, element)) {
        res.v = element;
      }}
    if (equals(res.v, '')) {
      throw new NotImplementedError_init();
    }return res.v;
  };
  Prepare.prototype.equals_puj7f4$ = function (cpr1, cpr2) {
    var tmp$, tmp$_0;
    if (cpr1.length !== cpr2.length)
      return false;
    var charList1 = split(cpr1, ['']);
    var charList2 = split(cpr2, ['']);
    tmp$ = charList1.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      var tmp$_1;
      if (!contains(cpr2, trim(Kotlin.isCharSequence(tmp$_1 = s) ? tmp$_1 : throwCCE()).toString()))
        return false;
    }
    tmp$_0 = charList2.iterator();
    while (tmp$_0.hasNext()) {
      var s_0 = tmp$_0.next();
      var tmp$_2;
      if (!contains(cpr1, trim(Kotlin.isCharSequence(tmp$_2 = s_0) ? tmp$_2 : throwCCE()).toString()))
        return false;
    }
    return true;
  };
  Prepare.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Prepare', interfaces: []};
  var canvas;
  var code;
  var lines;
  var automatonRepository;
  var sceneController;
  var codeEditor;
  function main() {
    var maze = ChessMazeGenerator$Companion_getInstance().generateRectangle_sier17$(100, 100, to(-50, -50));
    var scene = new Scene(maze);
    sceneController.setScene_mhdj7a$(scene);
    sceneController.draw();
  }
  function Compiler(source) {
    this.source_0 = source;
    this.outputCharacters_0 = listOf(['L', 'N', 'W', 'S', 'E']);
    this.lineMap_0 = HashMap_init();
    this.log = '';
    this.errorNumber = 0;
    this.inputCharacters_0 = listOf(['N', 'E', 'S', 'W', 'ES', 'ESW', 'EW', 'NE', 'NES', 'NESW', 'NEW', 'NS', 'NSW', 'NW', 'WS']);
    this.lineNumber_0 = 1;
    this.builder_0 = new DFABuilder();
  }
  Compiler.prototype.compile = function () {
    var lines = split(this.source_0, ['\n']);
    for (var i = 0; i !== lines.size; ++i) {
      var tmp$, tmp$_0;
      this.lineNumber_0 = i + 1 | 0;
      var it = lines.get_za3lpa$(i);
      if (contains(it, 'name')) {
        var tmp$_1 = this.builder_0;
        var $receiver = split(it, [':']).get_za3lpa$(1);
        var tmp$_2;
        tmp$_1.name_61zpoe$(trim(Kotlin.isCharSequence(tmp$_2 = $receiver) ? tmp$_2 : throwCCE()).toString());
        continue;
      }if (contains(it, 'color')) {
        var tmp$_3 = this.builder_0;
        var $receiver_0 = split(it, [':']).get_za3lpa$(1);
        var tmp$_4;
        tmp$_3.color_61zpoe$(trim(Kotlin.isCharSequence(tmp$_4 = $receiver_0) ? tmp$_4 : throwCCE()).toString());
        continue;
      }var splitLine = split(it, ['->']);
      var tmp$_5 = Regex_init('\\s*').matches_6bul2c$(it);
      if (!tmp$_5) {
        tmp$_5 = it.length === 0;
      }if (tmp$_5)
        continue;
      if (splitLine.size !== 2) {
        this.errorNumber = this.errorNumber + 1 | 0;
        this.log += 'line ' + this.lineNumber_0 + ': Error: wrong line format';
        continue;
      }var firstPartOfLine = this.eraseBrackets_0(splitLine.get_za3lpa$(0));
      var firstPartList = split(firstPartOfLine, [',']);
      var forStates = slice(firstPartList, new IntRange(0, firstPartList.size - 2 | 0));
      var $receiver_1 = last(firstPartList);
      var tmp$_6;
      var input = trim(Kotlin.isCharSequence(tmp$_6 = $receiver_1) ? tmp$_6 : throwCCE()).toString();
      var secondPartOfLine = split(splitLine.get_za3lpa$(1), [',']);
      var $receiver_2 = secondPartOfLine.get_za3lpa$(0);
      var tmp$_7;
      var nextState = trim(Kotlin.isCharSequence(tmp$_7 = $receiver_2) ? tmp$_7 : throwCCE()).toString();
      var $receiver_3 = secondPartOfLine.get_za3lpa$(1);
      var tmp$_8;
      var output = trim(Kotlin.isCharSequence(tmp$_8 = $receiver_3) ? tmp$_8 : throwCCE()).toString();
      this.validateInput_0(input);
      this.validateOutput_0(output);
      this.validateInputOutputContract_0(input, output);
      input = this.prepareInput_0(input);
      tmp$ = forStates.iterator();
      while (tmp$.hasNext()) {
        var s = tmp$.next();
        if (this.lineMap_0.containsKey_11rb$(s + '%' + input)) {
          this.errorNumber = this.errorNumber + 1 | 0;
          this.log += 'line: ' + this.lineNumber_0 + '. Error: such line already specified (' + toString((tmp$_0 = this.lineMap_0.get_11rb$(s + '%' + input)) != null ? tmp$_0 + 1 | 0 : null) + ')';
        } else {
          var $receiver_4 = this.lineMap_0;
          var key = s + '%' + input;
          $receiver_4.put_xwzc9p$(key, i);
        }
        if (this.errorNumber === 0) {
          var tmp$_9;
          this.builder_0.row_w74nik$(trim(Kotlin.isCharSequence(tmp$_9 = s) ? tmp$_9 : throwCCE()).toString(), input, nextState, output);
        }}
    }
    if (this.errorNumber === 0)
      return this.builder_0.build();
    else
      return null;
  };
  Compiler.prototype.validateInput_0 = function (input) {
    var tmp$;
    if (trim(Kotlin.isCharSequence(tmp$ = input) ? tmp$ : throwCCE()).toString().length === 0)
      this.log += 'line: ' + this.lineNumber_0 + '. Error: input is empty' + '\n';
  };
  Compiler.prototype.validateOutput_0 = function (output) {
    var tmp$;
    if (trim(Kotlin.isCharSequence(tmp$ = output) ? tmp$ : throwCCE()).toString().length !== 1) {
      this.log += 'line: ' + this.lineNumber_0 + ". Error: output's length is not 1" + '\n';
      this.errorNumber = this.errorNumber + 1 | 0;
    }var tmp$_0;
    if (!this.outputCharacters_0.contains_11rb$(trim(Kotlin.isCharSequence(tmp$_0 = output) ? tmp$_0 : throwCCE()).toString())) {
      this.log += 'line: ' + this.lineNumber_0 + '. Error: wrong output symbol' + '\n';
      this.errorNumber = this.errorNumber + 1 | 0;
    }};
  Compiler.prototype.validateInputOutputContract_0 = function (input, output) {
    var tmp$;
    var tmp$_0 = !equals(trim(Kotlin.isCharSequence(tmp$ = output) ? tmp$ : throwCCE()).toString(), 'L');
    if (tmp$_0) {
      var tmp$_1;
      var tmp$_2;
      tmp$_0 = !contains(trim(Kotlin.isCharSequence(tmp$_1 = input) ? tmp$_1 : throwCCE()).toString(), trim(Kotlin.isCharSequence(tmp$_2 = output) ? tmp$_2 : throwCCE()).toString());
    }if (tmp$_0)
      this.log += 'line: ' + this.lineNumber_0 + '. Error: input(' + input + ') is not a part of output(' + output + ')' + '\n';
  };
  Compiler.prototype.equals_0 = function (cpr1, cpr2) {
    var tmp$, tmp$_0;
    if (cpr1.length !== cpr2.length)
      return false;
    var charList1 = split(cpr1, ['']);
    var charList2 = split(cpr2, ['']);
    tmp$ = charList1.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      var tmp$_1;
      if (!contains(cpr2, trim(Kotlin.isCharSequence(tmp$_1 = s) ? tmp$_1 : throwCCE()).toString()))
        return false;
    }
    tmp$_0 = charList2.iterator();
    while (tmp$_0.hasNext()) {
      var s_0 = tmp$_0.next();
      var tmp$_2;
      if (!contains(cpr1, trim(Kotlin.isCharSequence(tmp$_2 = s_0) ? tmp$_2 : throwCCE()).toString()))
        return false;
    }
    return true;
  };
  Compiler.prototype.prepareInput_0 = function (input) {
    var res = {v: ''};
    var tmp$;
    tmp$ = this.inputCharacters_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (this.equals_0(input, element)) {
        res.v = element;
      }}
    if (equals(res.v, '')) {
      this.errorNumber = this.errorNumber + 1 | 0;
      this.log += 'line: ' + this.lineNumber_0 + '. Error: wrong input' + '\n';
    }return res.v;
  };
  Compiler.prototype.cleanSource_0 = function (source) {
    var result = Regex_init('<[^<>]*>').replace_x2uqeu$(source, '');
    result = replace(result, '\u2192', '->');
    return result;
  };
  Compiler.prototype.getCompiled = function () {
    return this.builder_0.build();
  };
  Compiler.prototype.eraseBrackets_0 = function (line) {
    return replace(replace(line, '{', ''), '}', '');
  };
  Compiler.$metadata$ = {kind: Kind_CLASS, simpleName: 'Compiler', interfaces: []};
  var MAX_COLOR_ID;
  var WALL_COLOR_ID;
  var NO_COLOR_ID;
  var LAMBDA_SYMBOL;
  var CHESS_MAZE_MAX_Y;
  var CHESS_MAZE_MAX_X;
  var STATE_DEFAULT_NAME;
  var DEFAULT_INIT_VERTEX_X;
  var DEFAULT_INIT_VERTEX_Y;
  var DEFAULT_INITIAL_VERTEX;
  function Editor(code, lines) {
    this.code_0 = code;
    this.lines_0 = lines;
    this.buildBtn_0 = null;
    this.saveCodeBtn_0 = null;
    this.loadCodeBtn_0 = null;
    this.plusBtn_0 = null;
    this.text = '';
    this.automatonRepository_0 = AutomatonRepository$Companion_getInstance().getInstance();
    this.keyDownHandler_0 = Editor$keyDownHandler$lambda(this);
    this.build_0 = Editor$build$lambda(this);
    this.addCode_0 = Editor$addCode$lambda(this);
    this.saveCode_0 = Editor$saveCode$lambda(this);
    this.buildBtn_0 = document.getElementById('build');
    this.saveCodeBtn_0 = document.getElementById('save_code');
    this.loadCodeBtn_0 = document.getElementById('input__dfa');
    this.plusBtn_0 = document.getElementById('add_automaton');
    this.buildBtn_0.addEventListener('click', this.build_0);
    this.saveCodeBtn_0.addEventListener('click', this.saveCode_0);
    this.loadCodeBtn_0.addEventListener('change', Editor_init$lambda(this));
    this.plusBtn_0.addEventListener('click', this.addCode_0);
    this.fillNumbers_0();
  }
  Editor.prototype.loadDFA_0 = function (txt) {
    this.code_0.value = txt;
    OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('DFA program loaded successfully.');
  };
  function Editor$getDFAFile$lambda(closure$fileReader, this$Editor) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = typeof (tmp$ = closure$fileReader.result) === 'string' ? tmp$ : throwCCE();
      this$Editor.loadDFA_0(tmp$_0);
      return Unit;
    };
  }
  Editor.prototype.getDFAFile_0 = function () {
    var file = this.loadCodeBtn_0.files[0];
    var fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = Editor$getDFAFile$lambda(fileReader, this);
  };
  Editor.prototype.fillNumbers_0 = function () {
    var length = 24;
    var str = StringBuilder_init();
    for (var i = 1; i <= length; i++)
      str.append_s8jyv4$(i).append_pdl1vj$('\n');
    this.lines_0.innerHTML = str.toString();
  };
  Editor.prototype.obtainSource_0 = function () {
    return this.code_0.value.toString();
  };
  Editor.prototype.cleanSource_0 = function (source) {
    var result = Regex_init('<[^<>]*>').replace_x2uqeu$(source, '');
    result = replace(result, '\u2192', '->');
    return result;
  };
  function Editor$keyDownHandler$lambda(this$Editor) {
    return function (event) {
      if (equals(event.key, 'Enter')) {
        console.log(this$Editor.obtainSource_0());
      }if (equals(event.key, 'Shift')) {
        this$Editor.text = this$Editor.code_0.value;
        var compiler = new Compiler(this$Editor.text);
        console.log(compiler.compile());
      }return Unit;
    };
  }
  function Editor$build$lambda(this$Editor) {
    return function (event) {
      var compiler = new Compiler(this$Editor.obtainSource_0());
      var automaton = compiler.compile();
      if (compiler.errorNumber === 0) {
        OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Build success.');
      } else {
        OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Build error:\n');
        OutputTool$Companion_getInstance().getInstance().addString_61zpoe$(compiler.log);
      }
      if (automaton != null) {
        var $receiver = this$Editor.automatonRepository_0.automatonMap;
        var key = automaton.getName();
        $receiver.put_xwzc9p$(key, automaton);
      }var output = document.getElementById('output');
      var cleaned = '<pre class=' + '"' + 'output' + '"' + '>' + this$Editor.cleanSource_0(this$Editor.obtainSource_0()) + '<\/pre>';
      return Unit;
    };
  }
  function Editor$addCode$lambda(this$Editor) {
    return function (event) {
      this$Editor.code_0.value = '';
      return Unit;
    };
  }
  function Editor$saveCode$lambda(this$Editor) {
    return function (event) {
      var tmp$ = [this$Editor.obtainSource_0()];
      var type = 'text/plain';
      var o = {};
      o['type'] = type;
      var blob = new Blob(tmp$, o);
      var link = document.createElement('a');
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', 'automaton.txt');
      return link.click();
    };
  }
  function Editor_init$lambda(this$Editor) {
    return function () {
      this$Editor.getDFAFile_0();
      return Unit;
    };
  }
  Editor.$metadata$ = {kind: Kind_CLASS, simpleName: 'Editor', interfaces: []};
  function ChessMaze() {
    this.topLeftVertex_yr7fuf$_0 = this.topLeftVertex_yr7fuf$_0;
    this.bottomRightVertex_41jol0$_0 = this.bottomRightVertex_41jol0$_0;
    this.borderCollections_0 = mutableListOf([ArrayList_init()]);
  }
  Object.defineProperty(ChessMaze.prototype, 'topLeftVertex_0', {configurable: true, get: function () {
    if (this.topLeftVertex_yr7fuf$_0 == null)
      return throwUPAE('topLeftVertex');
    return this.topLeftVertex_yr7fuf$_0;
  }, set: function (topLeftVertex) {
    this.topLeftVertex_yr7fuf$_0 = topLeftVertex;
  }});
  Object.defineProperty(ChessMaze.prototype, 'bottomRightVertex_0', {configurable: true, get: function () {
    if (this.bottomRightVertex_41jol0$_0 == null)
      return throwUPAE('bottomRightVertex');
    return this.bottomRightVertex_41jol0$_0;
  }, set: function (bottomRightVertex) {
    this.bottomRightVertex_41jol0$_0 = bottomRightVertex;
  }});
  ChessMaze.prototype.getTopLeftVertex = function () {
    return this.topLeftVertex_0;
  };
  ChessMaze.prototype.getBottomRightVertex = function () {
    return this.bottomRightVertex_0;
  };
  ChessMaze.prototype.addBorderCollection_adp833$ = function (borderCollection) {
    this.borderCollections_0.add_11rb$(borderCollection);
  };
  ChessMaze.prototype.removeLastBorderCollection = function () {
    return removeLast(this.borderCollections_0);
  };
  ChessMaze.prototype.clearBorders = function () {
    this.borderCollections_0.clear();
  };
  ChessMaze.prototype.getVertexByCoordinate_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0;
    if (x >= (this.bottomRightVertex_0.X + 1 | 0) || x <= (this.topLeftVertex_0.X - 1 | 0) || y <= (this.bottomRightVertex_0.Y - 1 | 0) || y >= (this.topLeftVertex_0.Y + 1 | 0))
      return ChessMazeVertex_init(x, y, 4);
    tmp$ = this.borderCollections_0.iterator();
    while (tmp$.hasNext()) {
      var col = tmp$.next();
      tmp$_0 = col.iterator();
      while (tmp$_0.hasNext()) {
        var b = tmp$_0.next();
        if (b.containsCoordinates_vux9f0$(x, y)) {
          return ChessMazeVertex_init(x, y, b.color);
        }}
    }
    return ChessMazeVertex_init(x, y, 0);
  };
  ChessMaze.prototype.getValidDirection_vux9f0$ = function (x, y) {
    if (this.getVertexByCoordinate_vux9f0$(x, y).color === 4)
      throw IllegalArgumentException_init('Error (the specified vertex is a part of a wall)');
    var result = '';
    if (this.getVertexByCoordinate_vux9f0$(x, y + 1 | 0).color === 0)
      result += 'N';
    if (this.getVertexByCoordinate_vux9f0$(x, y - 1 | 0).color === 0)
      result += 'S';
    if (this.getVertexByCoordinate_vux9f0$(x + 1 | 0, y).color === 0)
      result += 'E';
    if (this.getVertexByCoordinate_vux9f0$(x - 1 | 0, y).color === 0)
      result += 'W';
    return result;
  };
  ChessMaze.prototype.getCellColor_vux9f0$ = function (x, y) {
    return this.getVertexByCoordinate_vux9f0$(x, y).color;
  };
  ChessMaze.prototype.toTXT = function () {
    var tmp$, tmp$_0;
    var txt = 'tl: ' + this.topLeftVertex_0.X + ' ' + this.topLeftVertex_0.Y + ' ' + this.topLeftVertex_0.color + '\n';
    txt += 'br: ' + this.bottomRightVertex_0.X + ' ' + this.bottomRightVertex_0.Y + ' ' + this.bottomRightVertex_0.color + '\n';
    var cnt = 1;
    tmp$ = this.borderCollections_0.iterator();
    while (tmp$.hasNext()) {
      var col = tmp$.next();
      txt += 'col' + cnt + ':' + '\n';
      tmp$_0 = col.iterator();
      while (tmp$_0.hasNext()) {
        var b = tmp$_0.next();
        txt += b.startVertex.X.toString() + ' ' + b.startVertex.Y + ' ' + b.endVertex.X + ' ' + b.endVertex.Y + '\n';
      }
      cnt = cnt + 1 | 0;
    }
    return txt;
  };
  ChessMaze.prototype.toString = function () {
    var tmp$, tmp$_0;
    var result = 'TopLeft: ' + this.topLeftVertex_0 + '\n' + 'BottomRight: ' + this.bottomRightVertex_0 + '\n' + 'Borders:' + '\n';
    var cnt = 1;
    tmp$ = this.borderCollections_0.iterator();
    while (tmp$.hasNext()) {
      var col = tmp$.next();
      result += 'Set ' + cnt + ':' + '\n';
      tmp$_0 = col.iterator();
      while (tmp$_0.hasNext()) {
        var b = tmp$_0.next();
        result += b.toString() + '\n';
      }
      cnt = cnt + 1 | 0;
    }
    return result;
  };
  ChessMaze.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChessMaze', interfaces: []};
  function ChessMaze_init(tl, br, init, $this) {
    if (init === void 0) {
      init = ArrayList_init();
    }$this = $this || Object.create(ChessMaze.prototype);
    ChessMaze.call($this);
    $this.topLeftVertex_0 = tl;
    $this.bottomRightVertex_0 = br;
    removeLast($this.borderCollections_0);
    if (!init.isEmpty())
      $this.borderCollections_0.add_11rb$(init);
    return $this;
  }
  function ChessMaze_init_0(txt, $this) {
    $this = $this || Object.create(ChessMaze.prototype);
    ChessMaze.call($this);
    var tmp$;
    var strings = split(txt, ['\n']);
    var values;
    removeLast($this.borderCollections_0);
    var borderCollection = ArrayList_init();
    tmp$ = strings.iterator();
    while (tmp$.hasNext()) {
      var string = tmp$.next();
      values = split(string, [' ']);
      if (equals(values.get_za3lpa$(0), 'tl:'))
        $this.topLeftVertex_0 = ChessMazeVertex_init(toInt(values.get_za3lpa$(1)), toInt(values.get_za3lpa$(2)), toInt(replace(values.get_za3lpa$(3), '\r', '')));
      else if (equals(values.get_za3lpa$(0), 'br:'))
        $this.bottomRightVertex_0 = ChessMazeVertex_init(toInt(values.get_za3lpa$(1)), toInt(values.get_za3lpa$(2)), toInt(replace(values.get_za3lpa$(3), '\r', '')));
      else if (startsWith(values.get_za3lpa$(0), 'col1'))
        continue;
      else {
        if (values.size === 4) {
          borderCollection.add_11rb$(ChessMazeBorder_init_2(toInt(values.get_za3lpa$(0)), toInt(values.get_za3lpa$(1)), toInt(values.get_za3lpa$(2)), toInt(replace(values.get_za3lpa$(3), '\r', '')), 4));
        } else {
          $this.borderCollections_0.add_11rb$(toMutableList(borderCollection));
          borderCollection.clear();
        }
      }
    }
    return $this;
  }
  function ChessMazeBorder() {
    this.startVertex_6r4umv$_0 = null;
    this.endVertex_vyhuiq$_0 = null;
    this.color_2xfbnq$_0 = 0;
  }
  Object.defineProperty(ChessMazeBorder.prototype, 'startVertex', {configurable: true, get: function () {
    return this.startVertex_6r4umv$_0;
  }, set: function (value) {
    this.startVertex_6r4umv$_0 = ChessMazeVertex_init_0(value);
  }});
  Object.defineProperty(ChessMazeBorder.prototype, 'endVertex', {configurable: true, get: function () {
    return this.endVertex_vyhuiq$_0;
  }, set: function (value) {
    this.endVertex_vyhuiq$_0 = ChessMazeVertex_init_0(value);
  }});
  Object.defineProperty(ChessMazeBorder.prototype, 'color', {configurable: true, get: function () {
    return this.color_2xfbnq$_0;
  }, set: function (value) {
    this.color_2xfbnq$_0 = this.startVertex.color;
  }});
  ChessMazeBorder.prototype.VertexCount = function () {
    return Kotlin.imul(abs(this.startVertex.X - this.endVertex.X | 0) + 1 | 0, abs(this.startVertex.Y - this.endVertex.Y | 0) + 1 | 0);
  };
  ChessMazeBorder.prototype.containsCoordinates_vux9f0$ = function (x, y) {
    var a = this.startVertex.X;
    var b = this.endVertex.X;
    var tmp$ = x >= JsMath.min(a, b);
    if (tmp$) {
      var a_0 = this.startVertex.X;
      var b_0 = this.endVertex.X;
      tmp$ = x <= JsMath.max(a_0, b_0);
    }var tmp$_0 = tmp$;
    if (tmp$_0) {
      var a_1 = this.startVertex.Y;
      var b_1 = this.endVertex.Y;
      tmp$_0 = y >= JsMath.min(a_1, b_1);
    }var tmp$_1 = tmp$_0;
    if (tmp$_1) {
      var a_2 = this.startVertex.Y;
      var b_2 = this.endVertex.Y;
      tmp$_1 = y <= JsMath.max(a_2, b_2);
    }return tmp$_1;
  };
  ChessMazeBorder.prototype.containsVertex_w81bcz$ = function (vertex) {
    return this.containsCoordinates_vux9f0$(vertex.X, vertex.Y);
  };
  ChessMazeBorder.prototype.intersectsWithBorder_0 = function (border) {
    if (border.startVertex.moreRightThan_w81bcz$(this.startVertex) && border.startVertex.moreLeftThan_w81bcz$(this.endVertex) || (border.endVertex.moreRightThan_w81bcz$(this.startVertex) && border.endVertex.moreLeftThan_w81bcz$(this.endVertex))) {
      if (border.startVertex.lowerThan_w81bcz$(this.startVertex) && border.startVertex.higherThan_w81bcz$(this.endVertex) || (border.endVertex.lowerThan_w81bcz$(this.startVertex) && border.endVertex.higherThan_w81bcz$(this.endVertex)) || (this.startVertex.lowerThan_w81bcz$(border.startVertex) && this.startVertex.higherThan_w81bcz$(border.endVertex)) || (this.endVertex.lowerThan_w81bcz$(border.startVertex) && this.endVertex.higherThan_w81bcz$(border.endVertex)))
        return true;
    }if (border.endVertex.lowerThan_w81bcz$(this.startVertex) && border.endVertex.higherThan_w81bcz$(this.endVertex) || (border.startVertex.lowerThan_w81bcz$(this.startVertex) && border.startVertex.higherThan_w81bcz$(this.endVertex))) {
      if (border.startVertex.moreRightThan_w81bcz$(this.startVertex) && border.startVertex.moreLeftThan_w81bcz$(this.endVertex) || (border.endVertex.moreRightThan_w81bcz$(this.startVertex) && border.endVertex.moreLeftThan_w81bcz$(this.endVertex)) || (this.startVertex.moreRightThan_w81bcz$(border.startVertex) && this.startVertex.moreLeftThan_w81bcz$(border.endVertex)) || (this.endVertex.moreRightThan_w81bcz$(border.startVertex) && this.endVertex.moreLeftThan_w81bcz$(border.endVertex)))
        return true;
    }return false;
  };
  ChessMazeBorder.prototype.intersectWithBorder_mwmhjf$ = function (border) {
    return this.intersectsWithBorder_0(border) || border.intersectsWithBorder_0(this);
  };
  ChessMazeBorder.prototype.containedIn_mwmhjf$ = function (border) {
    return border.containsVertex_w81bcz$(this.startVertex) && border.containsVertex_w81bcz$(this.endVertex);
  };
  ChessMazeBorder.prototype.getIntersectArea_mwmhjf$ = function (border) {
    if (!this.intersectWithBorder_mwmhjf$(border))
      return null;
    var a = border.startVertex.X;
    var b = this.startVertex.X;
    var tmp$ = JsMath.max(a, b);
    var a_0 = this.startVertex.Y;
    var b_0 = border.startVertex.Y;
    var tmp$_0 = ChessMazeVertex_init(tmp$, JsMath.min(a_0, b_0), border.color);
    var a_1 = border.endVertex.X;
    var b_1 = this.endVertex.X;
    var tmp$_1 = JsMath.min(a_1, b_1);
    var a_2 = border.endVertex.Y;
    var b_2 = this.endVertex.Y;
    return ChessMazeBorder_init(tmp$_0, ChessMazeVertex_init(tmp$_1, JsMath.max(a_2, b_2), border.color));
  };
  ChessMazeBorder.prototype.joinBorder_mwmhjf$ = function (border) {
    if (border.startVertex.X === this.startVertex.X && border.endVertex.X === this.endVertex.X) {
      if (border.endVertex.Y === (border.startVertex.Y + 1 | 0)) {
        this.startVertex = ChessMazeVertex_init(border.startVertex.X, border.startVertex.Y, border.color);
        return true;
      }if (border.startVertex.Y === (this.endVertex.Y - 1 | 0)) {
        this.endVertex = ChessMazeVertex_init(border.endVertex.X, border.endVertex.Y, border.color);
        return true;
      }}if (border.startVertex.Y === this.startVertex.Y && border.endVertex.Y === this.endVertex.Y) {
      if (border.startVertex.X === (this.endVertex.X + 1 | 0)) {
        this.endVertex = ChessMazeVertex_init(border.endVertex.X, border.endVertex.Y, border.color);
        return true;
      }if (border.endVertex.X === (this.startVertex.X - 1 | 0)) {
        this.startVertex = ChessMazeVertex_init(border.startVertex.X, border.startVertex.Y, border.color);
        return true;
      }}return false;
  };
  ChessMazeBorder.prototype.toString = function () {
    return '[ ' + this.startVertex + ' , ' + this.endVertex + ' ] ';
  };
  ChessMazeBorder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChessMazeBorder', interfaces: []};
  function ChessMazeBorder_init(startVertex, endVertex, $this) {
    $this = $this || Object.create(ChessMazeBorder.prototype);
    ChessMazeBorder.call($this);
    if (startVertex.color !== endVertex.color) {
      throw IllegalArgumentException_init('Start and End vertexes must have the same colour!');
    }var a = startVertex.X;
    var b = endVertex.X;
    var tmp$ = JsMath.min(a, b);
    var a_0 = startVertex.Y;
    var b_0 = endVertex.Y;
    $this.startVertex = ChessMazeVertex_init(tmp$, JsMath.max(a_0, b_0), startVertex.color);
    var a_1 = startVertex.X;
    var b_1 = endVertex.X;
    var tmp$_0 = JsMath.max(a_1, b_1);
    var a_2 = startVertex.Y;
    var b_2 = endVertex.Y;
    $this.endVertex = ChessMazeVertex_init(tmp$_0, JsMath.min(a_2, b_2), startVertex.color);
    $this.color = startVertex.color;
    return $this;
  }
  function ChessMazeBorder_init_0(vertex, $this) {
    $this = $this || Object.create(ChessMazeBorder.prototype);
    ChessMazeBorder.call($this);
    $this.startVertex = vertex;
    $this.endVertex = vertex;
    $this.color = vertex.color;
    return $this;
  }
  function ChessMazeBorder_init_2(startX, startY, endX, endY, color, $this) {
    $this = $this || Object.create(ChessMazeBorder.prototype);
    ChessMazeBorder.call($this);
    $this.startVertex = ChessMazeVertex_init(startX, startY, color);
    $this.endVertex = ChessMazeVertex_init(endX, endY, color);
    $this.color = color;
    return $this;
  }
  function ChessMazeVertex() {
    this.X_k8kk5v$_0 = 0;
    this.Y_k8kk50$_0 = 0;
    this.color_dvqri$_0 = 0;
  }
  Object.defineProperty(ChessMazeVertex.prototype, 'X', {configurable: true, get: function () {
    return this.X_k8kk5v$_0;
  }, set: function (value) {
    this.X_k8kk5v$_0 = value;
  }});
  Object.defineProperty(ChessMazeVertex.prototype, 'Y', {configurable: true, get: function () {
    return this.Y_k8kk50$_0;
  }, set: function (value) {
    this.Y_k8kk50$_0 = value;
  }});
  Object.defineProperty(ChessMazeVertex.prototype, 'color', {configurable: true, get: function () {
    return this.color_dvqri$_0;
  }, set: function (value) {
    if (value > 3 && value !== 4 && value !== 0) {
      throw IllegalArgumentException_init_0();
    }this.color_dvqri$_0 = value;
  }});
  ChessMazeVertex.prototype.higherThan_w81bcz$ = function (vertex) {
    return this.Y > vertex.Y;
  };
  ChessMazeVertex.prototype.lowerThan_w81bcz$ = function (vertex) {
    return this.Y < vertex.Y;
  };
  ChessMazeVertex.prototype.moreLeftThan_w81bcz$ = function (vertex) {
    return this.X < vertex.X;
  };
  ChessMazeVertex.prototype.moreRightThan_w81bcz$ = function (vertex) {
    return this.X > vertex.X;
  };
  ChessMazeVertex.prototype.toString = function () {
    return '[ ( ' + this.X.toString() + ' , ' + this.Y.toString() + ' ) , ' + this.color.toString() + ' ]';
  };
  ChessMazeVertex.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChessMazeVertex', interfaces: []};
  function ChessMazeVertex_init(x, y, color, $this) {
    $this = $this || Object.create(ChessMazeVertex.prototype);
    ChessMazeVertex.call($this);
    $this.X = x;
    $this.Y = y;
    $this.color = color;
    return $this;
  }
  function ChessMazeVertex_init_0(chessMazeVertex, $this) {
    $this = $this || Object.create(ChessMazeVertex.prototype);
    ChessMazeVertex.call($this);
    $this.X = chessMazeVertex.X;
    $this.Y = chessMazeVertex.Y;
    $this.color = chessMazeVertex.color;
    return $this;
  }
  function ChessMazeEditor(maze) {
    this.maze_0 = maze;
  }
  ChessMazeEditor.prototype.generateLinearBorder_yaw8w9$ = function (segment, a, b, fill) {
    if (segment === void 0)
      segment = to(this.maze_0.getTopLeftVertex().X, this.maze_0.getBottomRightVertex().X);
    if (fill === void 0)
      fill = 'none';
    ChessMazeEditorCore$Companion_getInstance().generateLinearBorder_gyal8$(this.maze_0, segment, a, b, fill);
  };
  ChessMazeEditor.prototype.generateVerticalBorder_cycqfv$ = function (segment, a, fill) {
    if (segment === void 0)
      segment = to(this.maze_0.getTopLeftVertex().Y, this.maze_0.getBottomRightVertex().Y);
    if (fill === void 0)
      fill = 'none';
    ChessMazeEditorCore$Companion_getInstance().generateVerticalBorder_5sl51u$(this.maze_0, segment, a, fill);
  };
  ChessMazeEditor.prototype.generateBorderFromFunction_hnyx68$ = function (function_0, drawSegment, offset, fill) {
    if (drawSegment === void 0)
      drawSegment = to(this.maze_0.getTopLeftVertex().X, this.maze_0.getBottomRightVertex().X);
    if (offset === void 0)
      offset = to(0, 0);
    if (fill === void 0)
      fill = 'none';
    ChessMazeEditorCore$Companion_getInstance().generateBorderFromFunction_3w4ddv$(this.maze_0, function_0, drawSegment, offset, fill);
  };
  ChessMazeEditor.prototype.addDotBorder_vux9f0$ = function (x, y) {
    ChessMazeEditorCore$Companion_getInstance().addDotBorder_39w56n$(this.maze_0, x, y);
  };
  ChessMazeEditor.prototype.removeLastBorder = function () {
    ChessMazeEditorCore$Companion_getInstance().removeLastBorder_93ll4v$(this.maze_0);
  };
  ChessMazeEditor.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChessMazeEditor', interfaces: []};
  function ChessMazeEditorCore() {
    ChessMazeEditorCore$Companion_getInstance();
    ChessMazeGenerator.call(this);
  }
  function ChessMazeEditorCore$Companion() {
    ChessMazeEditorCore$Companion_instance = this;
    this.fillTypes_0 = mutableListOf(['n', 'none', 'u', 'up', 'a', 'above', 'd', 'down', 'b', 'below']);
  }
  ChessMazeEditorCore$Companion.prototype.removeRedundantVertices_0 = function (v, tl, br) {
    var tmp$;
    var indices = ArrayList_init();
    for (var i = 0; i !== v.size; ++i) {
      if (i === 0 && (v.get_za3lpa$(i + 1 | 0).higherThan_w81bcz$(tl) || v.get_za3lpa$(i + 1 | 0).moreLeftThan_w81bcz$(tl) || v.get_za3lpa$(i + 1 | 0).lowerThan_w81bcz$(br) || v.get_za3lpa$(i + 1 | 0).moreRightThan_w81bcz$(br)) || (i === (v.size - 1 | 0) && (v.get_za3lpa$(i - 1 | 0).higherThan_w81bcz$(tl) || v.get_za3lpa$(i - 1 | 0).moreLeftThan_w81bcz$(tl) || v.get_za3lpa$(i - 1 | 0).lowerThan_w81bcz$(br) || v.get_za3lpa$(i - 1 | 0).moreRightThan_w81bcz$(br))) || (i > 0 && i < v.size && (v.get_za3lpa$(i - 1 | 0).higherThan_w81bcz$(tl) && v.get_za3lpa$(i + 1 | 0).higherThan_w81bcz$(tl) || (v.get_za3lpa$(i - 1 | 0).moreLeftThan_w81bcz$(tl) && v.get_za3lpa$(i + 1 | 0).moreLeftThan_w81bcz$(tl)) || (v.get_za3lpa$(i - 1 | 0).lowerThan_w81bcz$(br) && v.get_za3lpa$(i + 1 | 0).lowerThan_w81bcz$(br)) || (v.get_za3lpa$(i - 1 | 0).moreRightThan_w81bcz$(br) && v.get_za3lpa$(i + 1 | 0).moreRightThan_w81bcz$(br)))) || v.get_za3lpa$(i).X === (tl.X - 1 | 0) || v.get_za3lpa$(i).X === (br.X + 1 | 0))
        indices.add_11rb$(i);
    }
    var verticesMap = LinkedHashMap_init();
    for (var i_0 = 0; i_0 !== v.size; ++i_0) {
      var value = v.get_za3lpa$(i_0);
      verticesMap.put_xwzc9p$(i_0, value);
    }
    tmp$ = indices.iterator();
    while (tmp$.hasNext()) {
      var index = tmp$.next();
      if (verticesMap.keys.contains_11rb$(index)) {
        verticesMap.remove_11rb$(index);
      }}
    return toMutableList(verticesMap.values);
  };
  ChessMazeEditorCore$Companion.prototype.edMakeBorders_0 = function (v, fill, tl, br) {
    var tmp$, tmp$_0, tmp$_1;
    var b = ArrayList_init();
    switch (fill) {
      case 'n':
      case 'none':
        return ChessMazeGenerator$Companion_getInstance().genMakeBorders_0(this.removeRedundantVertices_0(v, tl, br), fill, tl, br);
      case 'u':
      case 'up':
      case 'a':
      case 'above':
        tmp$ = v.size;
        for (var i = 0; i < tmp$; i++) {
          if (v.get_za3lpa$(i).X < tl.X || v.get_za3lpa$(i).X > br.X)
            continue;
          if (v.get_za3lpa$(i).Y === tl.Y)
            b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(i)));
          else if (v.get_za3lpa$(i).Y > tl.Y)
            continue;
          else {
            if (v.get_za3lpa$(i).Y < br.Y)
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i).X, br.Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i).X, tl.Y, 4)));
            else
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i).X, v.get_za3lpa$(i).Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i).X, tl.Y, 4)));
          }
        }

        break;
      case 'd':
      case 'down':
      case 'b':
      case 'below':
        tmp$_0 = v.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          if (v.get_za3lpa$(i_0).X < tl.X || v.get_za3lpa$(i_0).X > br.X)
            continue;
          if (v.get_za3lpa$(i_0).Y === br.Y)
            b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(i_0)));
          else if (v.get_za3lpa$(i_0).Y < br.Y)
            continue;
          else {
            if (v.get_za3lpa$(i_0).Y > tl.Y) {
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0).X, tl.Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0).X, br.Y, 4)));
            } else {
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0).X, v.get_za3lpa$(i_0).Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0).X, br.Y, 4)));
            }
          }
        }

        break;
      case 'r':
      case 'right':
        if (v.get_za3lpa$(0).X === br.X) {
          b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(0)));
          return b;
        } else {
          if (v.get_za3lpa$(0).X >= tl.X)
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(0).X, v.get_za3lpa$(0).Y, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(0).Y, 4)));
          else
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(tl.X, v.get_za3lpa$(0).Y, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(0).Y, 4)));
        }

        tmp$_1 = v.size;
        for (var i_1 = 1; i_1 < tmp$_1; i_1++) {
          if (v.get_za3lpa$(i_1).Y === v.get_za3lpa$(i_1 - 1 | 0).Y)
            continue;
          if (v.get_za3lpa$(i_1).Y < br.Y || v.get_za3lpa$(i_1).Y > tl.Y)
            continue;
          if (v.get_za3lpa$(i_1).X > br.X)
            break;
          if (v.get_za3lpa$(i_1).X >= tl.X)
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_1).X, v.get_za3lpa$(i_1).Y, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(i_1).Y, 4)));
          else
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_1).Y, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(i_1).Y, 4)));
          if (abs(v.get_za3lpa$(i_1).Y - v.get_za3lpa$(i_1 - 1 | 0).Y | 0) > 1) {
            var gaps = abs(v.get_za3lpa$(i_1).Y - v.get_za3lpa$(i_1 - 1 | 0).Y | 0) - 1 | 0;
            var sgnInvert = v.get_za3lpa$(i_1).Y > v.get_za3lpa$(i_1 - 1 | 0).Y ? -1 : 1;
            for (var j = 1; j <= gaps; j++) {
              if (v.get_za3lpa$(i_1 - 1 | 0).X >= tl.X)
                b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_1 - 1 | 0).X, v.get_za3lpa$(i_1 - 1 | 0).Y - Kotlin.imul(j, sgnInvert) | 0, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(i_1 - 1 | 0).Y - Kotlin.imul(j, sgnInvert) | 0, 4)));
              else
                b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_1 - 1 | 0).Y - Kotlin.imul(j, sgnInvert) | 0, 4), ChessMazeVertex_init(br.X, v.get_za3lpa$(i_1 - 1 | 0).Y - Kotlin.imul(j, sgnInvert) | 0, 4)));
            }
          }}

        break;
      case 'l':
      case 'left':
        if (v.get_za3lpa$(v.size - 1 | 0).X === tl.X) {
          b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(v.size - 1 | 0)));
          return b;
        } else {
          if (v.get_za3lpa$(v.size - 1 | 0).X <= br.X)
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(v.size - 1 | 0).X, v.get_za3lpa$(v.size - 1 | 0).Y, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(v.size - 1 | 0).Y, 4)));
          else
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(br.X, v.get_za3lpa$(v.size - 1 | 0).Y, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(v.size - 1 | 0).Y, 4)));
        }

        for (var i_2 = v.size - 2 | 0; i_2 >= 0; i_2--) {
          if (v.get_za3lpa$(i_2).Y === v.get_za3lpa$(i_2 + 1 | 0).Y)
            continue;
          if (v.get_za3lpa$(i_2).Y < br.Y || v.get_za3lpa$(i_2).Y > tl.Y)
            continue;
          if (v.get_za3lpa$(i_2).X < tl.X)
            break;
          if (v.get_za3lpa$(i_2).X <= br.X)
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_2).X, v.get_za3lpa$(i_2).Y, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_2).Y, 4)));
          else
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(br.X, v.get_za3lpa$(i_2).Y, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_2).Y, 4)));
          if (abs(v.get_za3lpa$(i_2).Y - v.get_za3lpa$(i_2 + 1 | 0).Y | 0) > 1) {
            var gaps_0 = abs(v.get_za3lpa$(i_2).Y - v.get_za3lpa$(i_2 + 1 | 0).Y | 0) - 1 | 0;
            var sgnInvert_0 = v.get_za3lpa$(i_2).Y < v.get_za3lpa$(i_2 + 1 | 0).Y ? -1 : 1;
            for (var j_0 = 1; j_0 <= gaps_0; j_0++) {
              if (v.get_za3lpa$(i_2 + 1 | 0).X >= tl.X)
                b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_2 + 1 | 0).X, v.get_za3lpa$(i_2 + 1 | 0).Y + Kotlin.imul(j_0, sgnInvert_0) | 0, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_2 + 1 | 0).Y + Kotlin.imul(j_0, sgnInvert_0) | 0, 4)));
              else
                b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(br.X, v.get_za3lpa$(i_2 + 1 | 0).Y + Kotlin.imul(j_0, sgnInvert_0) | 0, 4), ChessMazeVertex_init(tl.X, v.get_za3lpa$(i_2 + 1 | 0).Y + Kotlin.imul(j_0, sgnInvert_0) | 0, 4)));
            }
          }}

        break;
    }
    return b;
  };
  ChessMazeEditorCore$Companion.prototype.generateLinearBorder_gyal8$ = function (maze, segment, a, b, fill) {
    if (fill === void 0)
      fill = 'none';
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var linFillTypes = plus(this.fillTypes_0, mutableListOf(['l', 'left', 'r', 'right']));
    if (!linFillTypes.contains_11rb$(fill)) {
      throw IllegalArgumentException_init('Error (wrong "fill" parameter)');
    }if (a === 0.0) {
      if (equals(fill, 'r') || equals(fill, 'right') || equals(fill, 'l') || equals(fill, 'left'))
        throw IllegalArgumentException_init('Error (cannot fill to the left/right of horizontal line)');
      if (b > maze.getTopLeftVertex().Y || b < maze.getBottomRightVertex().Y)
        throw Exception_init('Error (line is out of bounds)');
      var borderCollection = ArrayList_init();
      if (!(segment != null ? segment.equals(to(maze.getTopLeftVertex().X, maze.getBottomRightVertex().X)) : null)) {
        if (segment.first < maze.getTopLeftVertex().X)
          tmp$ = maze.getTopLeftVertex().X;
        else
          tmp$ = segment.first;
        var start = tmp$;
        if (segment.second > maze.getBottomRightVertex().X)
          tmp$_0 = maze.getBottomRightVertex().X;
        else
          tmp$_0 = segment.second;
        var end = tmp$_0;
        tmp$_1 = ChessMazeBorder_init_2(start, b, end, b, 4);
      } else
        tmp$_1 = ChessMazeBorder_init_2(segment.first, b, segment.second, b, 4);
      var hor = tmp$_1;
      borderCollection.add_11rb$(hor);
      if (equals(fill, 'u') || equals(fill, 'up') || equals(fill, 'a') || equals(fill, 'above')) {
        var border;
        tmp$_2 = hor.startVertex.X;
        tmp$_3 = hor.endVertex.X;
        for (var x = tmp$_2; x <= tmp$_3; x++) {
          border = ChessMazeBorder_init(ChessMazeVertex_init(x, hor.startVertex.Y + 1 | 0, 4), ChessMazeVertex_init(x, maze.getTopLeftVertex().Y, 4));
          borderCollection.add_11rb$(border);
        }
      } else if (equals(fill, 'd') || equals(fill, 'down') || equals(fill, 'b') || equals(fill, 'below')) {
        var border_0;
        tmp$_4 = hor.startVertex.X;
        tmp$_5 = hor.endVertex.X;
        for (var x_0 = tmp$_4; x_0 <= tmp$_5; x_0++) {
          border_0 = ChessMazeBorder_init(ChessMazeVertex_init(x_0, hor.startVertex.Y - 1 | 0, 4), ChessMazeVertex_init(x_0, maze.getBottomRightVertex().Y, 4));
          borderCollection.add_11rb$(border_0);
        }
      }maze.addBorderCollection_adp833$(borderCollection);
    } else {
      var y = ArrayList_init();
      tmp$_6 = segment.first;
      tmp$_7 = segment.second;
      for (var x_1 = tmp$_6; x_1 <= tmp$_7; x_1++)
        y.add_11rb$(roundToInt(a * x_1 + b));
      var j = 0;
      var k = segment.first;
      var inside = false;
      while (true) {
        if (k >= maze.getTopLeftVertex().X && k <= maze.getBottomRightVertex().X && y.get_za3lpa$(j) <= maze.getTopLeftVertex().Y && y.get_za3lpa$(j) >= maze.getBottomRightVertex().Y) {
          inside = true;
          break;
        }j = j + 1 | 0;
        if (j === y.size)
          break;
        k = k + 1 | 0;
      }
      if (!inside)
        throw RuntimeException_init('Error (func out of bounds)');
      var vertices = ArrayList_init();
      var i = 0;
      for (var tmp$_9 = (new IntRange(segment.first, segment.second)).iterator(); tmp$_9.hasNext(); ++i) {
        var x_2 = tmp$_9.next();
        vertices.add_11rb$(ChessMazeVertex_init(x_2, y.get_za3lpa$(i), 4));
      }
      var borders = this.edMakeBorders_0(vertices, fill, maze.getTopLeftVertex(), maze.getBottomRightVertex());
      tmp$_8 = borders.iterator();
      while (tmp$_8.hasNext()) {
        var border_1 = tmp$_8.next();
        if (border_1.containsVertex_w81bcz$(maze.getTopLeftVertex()))
          maze.getTopLeftVertex().color = 4;
        if (border_1.containsVertex_w81bcz$(maze.getBottomRightVertex()))
          maze.getBottomRightVertex().color = 4;
      }
      maze.addBorderCollection_adp833$(borders);
    }
  };
  ChessMazeEditorCore$Companion.prototype.generateVerticalBorder_5sl51u$ = function (maze, segment, a, fill) {
    if (fill === void 0)
      fill = 'none';
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var vertFillTypes = mutableListOf(['n', 'none', 'l', 'left', 'r', 'right']);
    if (!vertFillTypes.contains_11rb$(fill)) {
      throw IllegalArgumentException_init('Error (wrong "fill" parameter)');
    }var borderCollection = ArrayList_init();
    if (!(segment != null ? segment.equals(to(maze.getTopLeftVertex().Y, maze.getBottomRightVertex().Y)) : null)) {
      if (segment.first < maze.getBottomRightVertex().Y)
        tmp$ = maze.getBottomRightVertex().Y;
      else
        tmp$ = segment.first;
      var start = tmp$;
      if (segment.second > maze.getTopLeftVertex().Y)
        tmp$_0 = maze.getTopLeftVertex().Y;
      else
        tmp$_0 = segment.second;
      var end = tmp$_0;
      tmp$_1 = ChessMazeBorder_init_2(a, start, a, end, 4);
    } else
      tmp$_1 = ChessMazeBorder_init_2(a, segment.first, a, segment.second, 4);
    var vert = tmp$_1;
    borderCollection.add_11rb$(vert);
    if (!equals(fill, 'n') && !equals(fill, 'none')) {
      var stX = equals(fill, 'l') || equals(fill, 'left') ? a - 1 | 0 : a + 1 | 0;
      var edX = equals(fill, 'l') || equals(fill, 'left') ? maze.getTopLeftVertex().X : maze.getBottomRightVertex().X;
      var border;
      tmp$_2 = vert.startVertex.Y;
      tmp$_3 = vert.endVertex.Y;
      for (var i = tmp$_2; i <= tmp$_3; i++) {
        border = ChessMazeBorder_init_2(stX, i, edX, i, 4);
        borderCollection.add_11rb$(border);
      }
    }tmp$_4 = borderCollection.iterator();
    while (tmp$_4.hasNext()) {
      var border_0 = tmp$_4.next();
      if (border_0.containsVertex_w81bcz$(maze.getTopLeftVertex()))
        maze.getTopLeftVertex().color = 4;
      if (border_0.containsVertex_w81bcz$(maze.getBottomRightVertex()))
        maze.getBottomRightVertex().color = 4;
    }
    maze.addBorderCollection_adp833$(borderCollection);
  };
  ChessMazeEditorCore$Companion.prototype.generateBorderFromFunction_3w4ddv$ = function (maze, function_0, drawSegment, offset, fill) {
    var tmp$, tmp$_0, tmp$_1;
    if (!this.fillTypes_0.contains_11rb$(fill)) {
      throw IllegalArgumentException_init('Error (wrong "fill" parameter)');
    }var shiftSegment = to(drawSegment.first - offset.first | 0, drawSegment.second - offset.first | 0);
    var y = ChessMazeGenerator$Companion_getInstance().getFunctionValues_0(function_0, shiftSegment);
    tmp$ = y.size;
    for (var i = 0; i < tmp$; i++) {
      y.set_wxm5ur$(i, y.get_za3lpa$(i) + offset.second | 0);
    }
    var vertices = ArrayList_init();
    var x = drawSegment.first;
    tmp$_0 = y.size;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      vertices.add_wxm5ur$(i_0, ChessMazeVertex_init(x, y.get_za3lpa$(i_0), 4));
      x = x + 1 | 0;
    }
    var newBorderCollection = this.edMakeBorders_0(vertices, fill, maze.getTopLeftVertex(), maze.getBottomRightVertex());
    tmp$_1 = newBorderCollection.iterator();
    while (tmp$_1.hasNext()) {
      var border = tmp$_1.next();
      if (border.containsVertex_w81bcz$(maze.getTopLeftVertex()))
        maze.getTopLeftVertex().color = 4;
      if (border.containsVertex_w81bcz$(maze.getBottomRightVertex()))
        maze.getBottomRightVertex().color = 4;
    }
    maze.addBorderCollection_adp833$(newBorderCollection);
  };
  ChessMazeEditorCore$Companion.prototype.addDotBorder_39w56n$ = function (maze, x, y) {
    maze.addBorderCollection_adp833$(mutableListOf([ChessMazeBorder_init_0(ChessMazeVertex_init(x, y, 4))]));
  };
  ChessMazeEditorCore$Companion.prototype.removeLastBorder_93ll4v$ = function (maze) {
    var tmp$;
    var lastCollection = maze.removeLastBorderCollection();
    tmp$ = lastCollection.iterator();
    while (tmp$.hasNext()) {
      var b = tmp$.next();
      if (b.containsVertex_w81bcz$(maze.getTopLeftVertex()))
        maze.getTopLeftVertex().color = 0;
      if (b.containsVertex_w81bcz$(maze.getBottomRightVertex()))
        maze.getBottomRightVertex().color = 0;
    }
  };
  ChessMazeEditorCore$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ChessMazeEditorCore$Companion_instance = null;
  function ChessMazeEditorCore$Companion_getInstance() {
    if (ChessMazeEditorCore$Companion_instance === null) {
      new ChessMazeEditorCore$Companion();
    }return ChessMazeEditorCore$Companion_instance;
  }
  function ChessMazeGenerator() {
    ChessMazeGenerator$Companion_getInstance();
  }
  function ChessMazeGenerator$Companion() {
    ChessMazeGenerator$Companion_instance = this;
    this.fillTypes_0 = mutableListOf(['n', 'none', 'u', 'up', 'a', 'above', 'd', 'down', 'b', 'below']);
  }
  ChessMazeGenerator$Companion.prototype.makeEmpty = function () {
    return ChessMaze_init(ChessMazeVertex_init(-10000, 10000, 0), ChessMazeVertex_init(10000, -10000, 0));
  };
  ChessMazeGenerator$Companion.prototype.generateRectangle_sier17$ = function (width, height, bl) {
    return ChessMaze_init(ChessMazeVertex_init(bl.first, bl.second + height - 1 | 0, 0), ChessMazeVertex_init(bl.first + width - 1 | 0, bl.second, 0));
  };
  function ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral(closure$str) {
    this.closure$str = closure$str;
    this.pos = -1;
    this.ch = 0;
  }
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.nextChar = function () {
    this.ch = (this.pos = this.pos + 1 | 0, this.pos) < this.closure$str.length ? this.closure$str.charCodeAt(this.pos) | 0 : -1;
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.eat_za3lpa$ = function (charToEat) {
    while (this.ch === 32)
      this.nextChar();
    if (this.ch === charToEat) {
      this.nextChar();
      return true;
    }return false;
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.parse = function () {
    this.nextChar();
    var x = this.parseExpression();
    if (this.pos < this.closure$str.length)
      throw RuntimeException_init('Unexpected: ' + String.fromCharCode(toBoxedChar(toChar(this.ch))));
    return x;
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.parseExpression = function () {
    var x = this.parseTerm();
    while (true) {
      if (this.eat_za3lpa$(43))
        x += this.parseTerm();
      else if (this.eat_za3lpa$(45))
        x -= this.parseTerm();
      else
        return x;
    }
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.parseTerm = function () {
    var x = this.parseFactor();
    while (true) {
      if (this.eat_za3lpa$(42))
        x *= this.parseFactor();
      else if (this.eat_za3lpa$(47)) {
        var div = this.parseFactor();
        if (div < 1.0E-8)
          throw new ArithmeticException('Error (division by 0)');
        x /= div;
      } else
        return x;
    }
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.prototype.parseFactor = function () {
    var tmp$;
    if (this.eat_za3lpa$(43))
      return this.parseFactor();
    if (this.eat_za3lpa$(45))
      return -this.parseFactor();
    var x;
    var startPos = this.pos;
    if (this.eat_za3lpa$(40)) {
      x = this.parseExpression();
      this.eat_za3lpa$(41);
    } else if (this.ch >= 48 && this.ch <= 57 || this.ch === 46) {
      while (this.ch >= 48 && this.ch <= 57 || this.ch === 46)
        this.nextChar();
      var $receiver = this.closure$str;
      var endIndex = this.pos;
      x = toDouble($receiver.substring(startPos, endIndex));
    } else if (this.ch >= 97 && this.ch <= 122) {
      while (this.ch >= 97 && this.ch <= 122)
        this.nextChar();
      var $receiver_0 = this.closure$str;
      var endIndex_0 = this.pos;
      var func = $receiver_0.substring(startPos, endIndex_0);
      x = this.parseFactor();
      switch (func) {
        case 'abs':
          var x_0 = x;
          tmp$ = JsMath.abs(x_0);
          break;
        case 'sqrt':
          if (x < 0)
            throw new ArithmeticException('Error (square root of negative number)');
          var x_1 = x;
          tmp$ = JsMath.sqrt(x_1);
          break;
        case 'sin':
          var x_2 = x;
          tmp$ = JsMath.sin(x_2);
          break;
        case 'cos':
          var x_3 = x;
          tmp$ = JsMath.cos(x_3);
          break;
        case 'exp':
          var x_4 = x;
          tmp$ = JsMath.exp(x_4);
          break;
        case 'ln':
          if (x <= 0)
            throw new ArithmeticException('Error (logarithm of non-positive number)');
          var x_5 = x;
          tmp$ = JsMath.log(x_5);
          break;
        case 'log10':
          if (x <= 0)
            throw new ArithmeticException('Error (logarithm of non-positive number)');
          var x_6 = x;
          tmp$ = JsMath.log10(x_6);
          break;
        case 'log2':
          if (x <= 0)
            throw new ArithmeticException('Error (logarithm of non-positive number)');
          var x_7 = x;
          tmp$ = JsMath.log2(x_7);
          break;
        default:throw RuntimeException_init('Unknown function: ' + func);
      }
      x = tmp$;
    } else
      throw RuntimeException_init('Unexpected: ' + String.fromCharCode(toBoxedChar(toChar(this.ch))));
    if (this.eat_za3lpa$(94)) {
      var $receiver_1 = x;
      var x_8 = this.parseFactor();
      x = JsMath.pow($receiver_1, x_8);
    }return x;
  };
  ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: []};
  ChessMazeGenerator$Companion.prototype.evaluateExpression_0 = function (str) {
    return (new ChessMazeGenerator$Companion$evaluateExpression$ObjectLiteral(str)).parse();
  };
  ChessMazeGenerator$Companion.prototype.getFunctionValues_0 = function (function_0, segment) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var hasVariable = false;
    tmp$ = function_0.length;
    for (var i = 0; i <= tmp$; i++) {
      if (function_0.charCodeAt(i) === 120) {
        if (i > 0 && i < (function_0.length - 1 | 0) && function_0.charCodeAt(i - 1 | 0) === 101 && function_0.charCodeAt(i + 1 | 0) === 112)
          continue;
        hasVariable = true;
        break;
      }}
    if (!hasVariable) {
      return mutableListOf([roundToInt(this.evaluateExpression_0(function_0))]);
    }var results = ArrayList_init();
    tmp$_0 = segment.first;
    tmp$_1 = segment.second;
    for (var x = tmp$_0; x <= tmp$_1; x++) {
      var initExpression = toMutableList_0(function_0);
      var evalExpression = toMutableList_0(function_0);
      var eOffset = 0;
      var xList = toMutableList_0(x.toString());
      tmp$_2 = initExpression.size;
      for (var j = 0; j < tmp$_2; j++) {
        if (unboxChar(initExpression.get_za3lpa$(j)) === 120) {
          if (j > 0 && j < initExpression.size && unboxChar(initExpression.get_za3lpa$(j - 1 | 0)) === 101 && unboxChar(initExpression.get_za3lpa$(j + 1 | 0)) === 112)
            continue;
          evalExpression.set_wxm5ur$(j + eOffset | 0, xList.get_za3lpa$(0));
          var k = 1;
          tmp$_3 = xList.size;
          for (var x_ind = 1; x_ind < tmp$_3; x_ind++) {
            evalExpression.add_wxm5ur$(j + eOffset + k | 0, xList.get_za3lpa$(x_ind));
            k = k + 1 | 0;
          }
          eOffset = eOffset + (xList.size - 1) | 0;
        }}
      results.add_11rb$(roundToInt(this.evaluateExpression_0(joinToString(evalExpression, ''))));
    }
    return results;
  };
  ChessMazeGenerator$Companion.prototype.genMakeBorders_0 = function (v, fill, tl, br) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var b = ArrayList_init();
    var vb = ArrayList_init();
    switch (fill) {
      case 'n':
      case 'none':
        var actStartY;
        var actEndY;
        var skipped = false;
        tmp$ = v.size;
        for (var i = 0; i < tmp$; i++) {
          if (!(v.get_za3lpa$(i).higherThan_w81bcz$(tl) || v.get_za3lpa$(i).lowerThan_w81bcz$(br)))
            vb.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(i)));
        }

        tmp$_0 = v.size - 1 | 0;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          if ((v.get_za3lpa$(i_0 + 1 | 0).X - v.get_za3lpa$(i_0).X | 0) > 1 || ((v.get_za3lpa$(i_0).higherThan_w81bcz$(tl) || v.get_za3lpa$(i_0).lowerThan_w81bcz$(br)) && (v.get_za3lpa$(i_0 + 1 | 0).Y === tl.Y || v.get_za3lpa$(i_0 + 1 | 0).Y === br.Y)) || (1 + abs(v.get_za3lpa$(i_0 + 1 | 0).Y - v.get_za3lpa$(i_0).Y | 0) | 0) <= 2) {
            skipped = true;
            continue;
          }if (v.get_za3lpa$(i_0).higherThan_w81bcz$(v.get_za3lpa$(i_0 + 1 | 0))) {
            actStartY = v.get_za3lpa$(i_0).higherThan_w81bcz$(tl) ? tl.Y : v.get_za3lpa$(i_0).Y - 1 | 0;
            actEndY = v.get_za3lpa$(i_0 + 1 | 0).lowerThan_w81bcz$(br) ? br.Y : v.get_za3lpa$(i_0 + 1 | 0).Y + 1 | 0;
            var tmp$_4 = !skipped;
            if (tmp$_4) {
              tmp$_4 = !b.isEmpty();
            }if (tmp$_4 && last(b).endVertex.lowerThan_w81bcz$(v.get_za3lpa$(i_0))) {
              if (v.get_za3lpa$(i_0 + 1 | 0).Y <= last(b).endVertex.Y && v.get_za3lpa$(i_0 + 1 | 0).Y >= (last(b).startVertex.Y - 1 | 0))
                continue;
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0 + 1 | 0).X, last(b).startVertex.Y - 1 | 0, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0 + 1 | 0).X, actEndY, 4)));
            } else {
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0).X, actStartY, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0).X, actEndY, 4)));
            }
          }if (v.get_za3lpa$(i_0).lowerThan_w81bcz$(v.get_za3lpa$(i_0 + 1 | 0))) {
            actStartY = v.get_za3lpa$(i_0).lowerThan_w81bcz$(br) ? br.Y : v.get_za3lpa$(i_0).Y + 1 | 0;
            actEndY = v.get_za3lpa$(i_0 + 1 | 0).higherThan_w81bcz$(tl) ? tl.Y : v.get_za3lpa$(i_0 + 1 | 0).Y - 1 | 0;
            var tmp$_5 = !skipped;
            if (tmp$_5) {
              tmp$_5 = !b.isEmpty();
            }if (tmp$_5 && last(b).startVertex.higherThan_w81bcz$(v.get_za3lpa$(i_0))) {
              if (v.get_za3lpa$(i_0 + 1 | 0).Y <= (last(b).startVertex.Y + 1 | 0) && v.get_za3lpa$(i_0 + 1 | 0).Y >= last(b).endVertex.Y)
                continue;
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0 + 1 | 0).X, last(b).startVertex.Y + 1 | 0, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0 + 1 | 0).X, actEndY, 4)));
            } else {
              b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_0).X + 1 | 0, actStartY, 4), ChessMazeVertex_init(v.get_za3lpa$(i_0).X + 1 | 0, actEndY, 4)));
            }
          }skipped = false;
        }

        tmp$_1 = vb.iterator();
        while (tmp$_1.hasNext()) {
          var i_1 = tmp$_1.next();
          b.add_11rb$(i_1);
        }

        break;
      case 'u':
      case 'up':
      case 'a':
      case 'above':
        tmp$_2 = v.size;
        for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
          if (v.get_za3lpa$(i_2).Y !== tl.Y) {
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_2).X, v.get_za3lpa$(i_2).Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i_2).X, tl.Y, 4)));
          } else
            b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(i_2)));
        }

        break;
      case 'd':
      case 'down':
      case 'b':
      case 'below':
        tmp$_3 = v.size;
        for (var i_3 = 0; i_3 < tmp$_3; i_3++) {
          if (v.get_za3lpa$(i_3).Y !== br.Y) {
            b.add_11rb$(ChessMazeBorder_init(ChessMazeVertex_init(v.get_za3lpa$(i_3).X, v.get_za3lpa$(i_3).Y, 4), ChessMazeVertex_init(v.get_za3lpa$(i_3).X, br.Y, 4)));
          } else
            b.add_11rb$(ChessMazeBorder_init_0(v.get_za3lpa$(i_3)));
        }

        break;
    }
    return b;
  };
  ChessMazeGenerator$Companion.prototype.generateUsingFunction_wbuyhn$ = function (function_0, segment, fill) {
    if (fill === void 0)
      fill = 'none';
    var tmp$, tmp$_0;
    if (!this.fillTypes_0.contains_11rb$(fill))
      throw IllegalArgumentException_init('Error (wrong "fill" parameter)');
    var y = this.getFunctionValues_0(function_0, segment);
    if (y.size === 1) {
      throw RuntimeException_init('Error (cannot create maze using constant function)');
    }var topLeftVertex = (tmp$ = maxOrNull(y)) != null ? ChessMazeVertex_init(segment.first, tmp$, 4) : null;
    var bottomRightVertex = (tmp$_0 = minOrNull(y)) != null ? ChessMazeVertex_init(segment.second, tmp$_0, 4) : null;
    if (topLeftVertex == null || bottomRightVertex == null)
      throw new NoSuchElementException('Error (something went wrong with getting function results)');
    var vertices = ArrayList_init();
    var i = 0;
    for (var tmp$_1 = (new IntRange(segment.first, segment.second)).iterator(); tmp$_1.hasNext(); ++i) {
      var x = tmp$_1.next();
      vertices.add_11rb$(ChessMazeVertex_init(x, y.get_za3lpa$(i), 4));
    }
    var borderCollection = this.genMakeBorders_0(vertices, fill, topLeftVertex, bottomRightVertex);
    return ChessMaze_init(topLeftVertex, bottomRightVertex, borderCollection);
  };
  ChessMazeGenerator$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ChessMazeGenerator$Companion_instance = null;
  function ChessMazeGenerator$Companion_getInstance() {
    if (ChessMazeGenerator$Companion_instance === null) {
      new ChessMazeGenerator$Companion();
    }return ChessMazeGenerator$Companion_instance;
  }
  var ChessMazeManager$Companion_instance = null;
  function Terminal(maze, sceneController) {
    this.maze_0 = maze;
    this.sceneController_0 = sceneController;
    this.content = '';
    this.terminalTextArea_0 = document.getElementById('preview_output_content');
    this.terminalTextArea_0.addEventListener('keydown', Terminal_init$lambda(this));
    this.terminalTextArea_0.value = '';
  }
  Terminal.prototype.updateContent = function () {
    var tmp$;
    this.content = typeof (tmp$ = this.terminalTextArea_0.value) === 'string' ? tmp$ : throwCCE();
  };
  Terminal.prototype.execute = function () {
    this.updateContent();
    var $receiver = split(this.content, ['\n']);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!Regex_init('\\s*').matches_6bul2c$(element))
        destination.add_11rb$(element);
    }
    var command = last(destination);
    if (contains(command, 'add border')) {
      this.addBorderHandler_0(command);
      return;
    }var tmp$_0;
    if (equals(trim(Kotlin.isCharSequence(tmp$_0 = command) ? tmp$_0 : throwCCE()).toString(), 'dfa list')) {
      var list = toList(AutomatonRepository$Companion_getInstance().getInstance().automatonMap.values);
      var stringBuilder = StringBuilder_init();
      if (list.isEmpty()) {
        this.terminalTextArea_0.value = this.content + '\n' + 'no automatons' + '\n';
        return;
      }for (var i = 0; i !== list.size; ++i) {
        stringBuilder.append_pdl1vj$(list.get_za3lpa$(i).getName());
        if (i !== (list.size - 1 | 0))
          stringBuilder.append_pdl1vj$(', ');
      }
      this.terminalTextArea_0.value = this.content + '\n' + stringBuilder.toString();
      return;
    }if (contains(command, 'set dfa')) {
      var tmp$_1;
      this.setDfaHandler_0(trim(Kotlin.isCharSequence(tmp$_1 = command) ? tmp$_1 : throwCCE()).toString());
    }};
  Terminal.prototype.setDfaHandler_0 = function (command) {
    var $receiver = replace(command, 'set dfa', '');
    var tmp$;
    var command_ = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var args = Regex_init('\\s+').split_905azu$(command_, 0);
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = args.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (matches(element, '\\s*'))
        destination.add_11rb$(element);
    }
    var fargs = destination;
    if (fargs.size !== 4) {
      println_0('syntax error');
    }println_0(fargs.size);
    var name = fargs.get_za3lpa$(0);
    var x = toInt(fargs.get_za3lpa$(1));
    var y = toInt(fargs.get_za3lpa$(2));
    var color = fargs.get_za3lpa$(3);
    var automaton = AutomatonRepository$Companion_getInstance().getInstance().automatonMap.get_11rb$(name);
    if (automaton != null) {
      var automatonContext = new AutomatonContext(automaton);
      automatonContext.color = color;
      automatonContext.setXY_1fzo63$(to(x, y));
      this.sceneController_0.scene.getAutomatonContextManager().addContext_5yeq41$(automatonContext, name);
      this.sceneController_0.draw();
      this.terminalTextArea_0.value = this.content + '\n' + 'set successful';
    } else {
      this.terminalTextArea_0.value = this.content + '\n' + 'no automaton with name ' + name;
    }
  };
  Terminal.prototype.addBorderHandler_0 = function (command) {
    var $receiver = replace(command, 'add border', '');
    var tmp$;
    var command_ = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var operName = command_.charCodeAt(0);
    if (!listOf([toBoxedChar(108), toBoxedChar(118), toBoxedChar(99)]).contains_11rb$(toBoxedChar(operName)))
      throw Exception_init('illegal command');
    var $receiver_0 = replace(command_, String.fromCharCode(operName), '');
    var tmp$_0;
    command_ = trim(Kotlin.isCharSequence(tmp$_0 = $receiver_0) ? tmp$_0 : throwCCE()).toString();
    var tmp$_1 = command_;
    var args = Regex_init('\\s+').split_905azu$(tmp$_1, 0);
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = args.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (matches(element, '\\s*'))
        destination.add_11rb$(element);
    }
    var fargs = destination;
    switch (operName) {
      case 108:
        if (fargs.size !== 5)
          throw Exception_init('wrong syntax 1');
        var start = toInt(fargs.get_za3lpa$(0));
        var end = toInt(fargs.get_za3lpa$(1));
        var a = toDouble(fargs.get_za3lpa$(2));
        var b = toInt(fargs.get_za3lpa$(3));
        var fill = fargs.get_za3lpa$(4);
        (new ChessMazeEditor(this.maze_0)).generateLinearBorder_yaw8w9$(to(start, end), a, b, fill);
        break;
      case 118:
        if (fargs.size !== 4)
          throw Exception_init('wrong syntax 2');
        var start_0 = toInt(fargs.get_za3lpa$(0));
        var end_0 = toInt(fargs.get_za3lpa$(1));
        var a_0 = toInt(fargs.get_za3lpa$(2));
        var fill_0 = fargs.get_za3lpa$(3);
        (new ChessMazeEditor(this.maze_0)).generateVerticalBorder_cycqfv$(to(start_0, end_0), a_0, fill_0);
        break;
      case 99:
        if (fargs.size !== 6)
          throw Exception_init('wrong syntax 3');
        var function_0 = fargs.get_za3lpa$(0);
        var start_1 = toInt(fargs.get_za3lpa$(1));
        var end_1 = toInt(fargs.get_za3lpa$(2));
        var offsetX = toInt(fargs.get_za3lpa$(3));
        var offsetY = toInt(fargs.get_za3lpa$(4));
        var fill_1 = fargs.get_za3lpa$(5);
        (new ChessMazeEditor(this.maze_0)).generateBorderFromFunction_hnyx68$(function_0, to(start_1, end_1), to(offsetX, offsetY), fill_1);
        break;
    }
    this.sceneController_0.draw();
  };
  Terminal.prototype.setMaze_93ll4v$ = function (maze) {
    this.maze_0 = maze;
  };
  function Terminal_init$lambda(this$Terminal) {
    return function (keyboardEvent) {
      if (equals(keyboardEvent.key, 'Enter')) {
        this$Terminal.execute();
      }return Unit;
    };
  }
  Terminal.$metadata$ = {kind: Kind_CLASS, simpleName: 'Terminal', interfaces: []};
  function Scene(maze) {
    this.maze_0 = maze;
    this.h_un6xqi$_0 = 14;
    this.offsetX = 0;
    this.offsetY = 0;
    this.height = 784;
    this.weight = 784;
    this.running = false;
    this.automatonContextManager_0 = new AutomatonContextManager();
  }
  Object.defineProperty(Scene.prototype, 'h', {configurable: true, get: function () {
    return this.h_un6xqi$_0;
  }, set: function (value) {
    if (8 <= value && value <= 112) {
      this.h_un6xqi$_0 = value;
    }}});
  Scene.prototype.getMaze = function () {
    return this.maze_0;
  };
  Scene.prototype.getAutomatonContextManager = function () {
    return this.automatonContextManager_0;
  };
  Scene.$metadata$ = {kind: Kind_CLASS, simpleName: 'Scene', interfaces: []};
  function SceneController(canvas) {
    SceneController$Companion_getInstance();
    this.width_0 = toInt(canvas.getAttribute('width').toString());
    this.height_0 = toInt(canvas.getAttribute('height').toString());
    this.automatonRepository_0 = AutomatonRepository$Companion_getInstance().getInstance();
    this.h_5gn9ja$_0 = 14;
    var tmp$;
    this.hint_0 = Kotlin.isType(tmp$ = document.getElementById('hint'), HTMLDivElement) ? tmp$ : throwCCE();
    this.offset = to(this.width_0 / (3 * this.h | 0) | 0, this.height_0 / (3 * this.h | 0) | 0);
    this.scene_gaze0a$_0 = new Scene(ChessMazeGenerator$Companion_getInstance().generateUsingFunction_wbuyhn$('(x)^2/15', to(0, 10), 'u'));
    this.terminal_0 = new Terminal(this.scene.getMaze(), this);
    this.render_0 = new SceneRender(this.scene, canvas.getContext('2d'));
    this.cycle = SceneController$cycle$lambda(this);
    this.mouseClickHandler_0 = SceneController$mouseClickHandler$lambda(this);
    this.mouseUpHandler_0 = SceneController$mouseUpHandler$lambda;
    this.mouseMoveHandler_0 = SceneController$mouseMoveHandler$lambda;
    this.mouseDownHandler_0 = SceneController$mouseDownHandler$lambda;
    this.contextMenuHandler_0 = SceneController$contextMenuHandler$lambda(this);
    this.keyDownHandler_0 = SceneController$keyDownHandler$lambda(this);
    this.mouseWheelHandler_0 = SceneController$mouseWheelHandler$lambda(this);
    if (SceneController$Companion_getInstance().sceneController_0 == null)
      SceneController$Companion_getInstance().sceneController_0 = this;
    canvas.addEventListener('click', this.mouseClickHandler_0);
    canvas.addEventListener('mousemove', this.mouseMoveHandler_0);
    canvas.addEventListener('mousedown', this.mouseDownHandler_0);
    canvas.addEventListener('mouseup', this.mouseUpHandler_0);
    canvas.addEventListener('wheel', this.mouseWheelHandler_0);
    canvas.addEventListener('keydown', this.keyDownHandler_0);
    canvas.addEventListener('contextmenu', this.contextMenuHandler_0);
    this.toolController_0 = new ToolController();
    this.timerId_0 = 0;
  }
  function SceneController$Companion() {
    SceneController$Companion_instance = this;
    this.sceneController_0 = null;
  }
  SceneController$Companion.prototype.getInstance = function () {
    var tmp$;
    tmp$ = this.sceneController_0;
    if (tmp$ == null) {
      throw new NullPointerException('sceneController has not been initialized');
    }return tmp$;
  };
  SceneController$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var SceneController$Companion_instance = null;
  function SceneController$Companion_getInstance() {
    if (SceneController$Companion_instance === null) {
      new SceneController$Companion();
    }return SceneController$Companion_instance;
  }
  Object.defineProperty(SceneController.prototype, 'h', {configurable: true, get: function () {
    return this.h_5gn9ja$_0;
  }, set: function (value) {
    if (8 <= value && value <= 112) {
      this.h_5gn9ja$_0 = value;
      this.render_0.h = value;
    }}});
  Object.defineProperty(SceneController.prototype, 'scene', {configurable: true, get: function () {
    return this.scene_gaze0a$_0;
  }, set: function (value) {
    this.scene_gaze0a$_0 = value;
    this.terminal_0.setMaze_93ll4v$(value.getMaze());
    this.render_0.scene = value;
  }});
  SceneController.prototype.draw = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.render_0.clear();
    var contextMapValues = this.scene.getAutomatonContextManager().getContextMap().values;
    var set = LinkedHashSet_init();
    tmp$ = contextMapValues.iterator();
    while (tmp$.hasNext()) {
      var context = tmp$.next();
      set.addAll_brywnq$(context.visited);
    }
    var maze = this.scene.getMaze();
    tmp$_0 = this.width_0 / this.h | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      tmp$_1 = this.width_0 / this.h | 0;
      for (var j = 0; j <= tmp$_1; j++) {
        if (maze.getCellColor_vux9f0$(i - this.offset.first | 0, j - this.offset.second | 0) === 4)
          this.render_0.fillCell_98i29q$(i, j, '#000000');
        if (set.contains_11rb$(to(i - this.offset.first | 0, j - this.offset.second | 0)))
          this.render_0.fillCell_98i29q$(i, j, '#dddddd');
      }
    }
    tmp$_2 = contextMapValues.iterator();
    while (tmp$_2.hasNext()) {
      var context_0 = tmp$_2.next();
      if (context_0.visible)
        this.render_0.drawAutomaton_98i29q$(context_0.getX() + this.offset.first | 0, context_0.getY() + this.offset.second | 0, context_0.getColor());
    }
    this.render_0.drawGrid();
  };
  SceneController.prototype.getGridCellCoordinates_tfvzir$ = function (event) {
    return to((numberToInt(event.offsetX) / this.h | 0) - this.offset.first | 0, (((-numberToInt(event.offsetY) | 0) + this.height_0 | 0) / this.h | 0) - this.offset.second | 0);
  };
  SceneController.prototype.setScene_mhdj7a$ = function (scene) {
    this.scene = scene;
  };
  SceneController.prototype.run = function () {
    this.draw();
    this.timerId_0 = window.setInterval(this.cycle, 200);
    this.scene.running = true;
  };
  SceneController.prototype.stop = function () {
    window.clearInterval(this.timerId_0);
  };
  function SceneController$cycle$lambda(this$SceneController) {
    return function () {
      var tmp$;
      var automatonContextCollection = this$SceneController.scene.getAutomatonContextManager().getContextMap().values;
      var x = 0;
      var y = 0;
      var input = '';
      var isNotL = false;
      tmp$ = automatonContextCollection.iterator();
      while (tmp$.hasNext()) {
        var context = tmp$.next();
        x = context.getX();
        y = context.getY();
        input = this$SceneController.scene.getMaze().getValidDirection_vux9f0$(x, y);
        if (!equals(context.next_61zpoe$(input), 'L'))
          isNotL = true;
      }
      if (!isNotL)
        ToolController$Companion_getInstance().getInstance().playTool.togglePlay();
      this$SceneController.render_0.clear();
      this$SceneController.draw();
      return Unit;
    };
  }
  function SceneController$mouseClickHandler$lambda$lambda(this$SceneController) {
    return function () {
      this$SceneController.hint_0.style.opacity = '0';
      return Unit;
    };
  }
  function SceneController$mouseClickHandler$lambda(this$SceneController) {
    return function (event) {
      if (this$SceneController.toolController_0.lineTool.isSelected()) {
        return this$SceneController.toolController_0.lineTool.selectPoint_vux9f0$((numberToInt(event.offsetX) / this$SceneController.h | 0) - this$SceneController.offset.first | 0, (((-numberToInt(event.offsetY) | 0) + this$SceneController.height_0 | 0) / this$SceneController.h | 0) - this$SceneController.offset.second | 0), Unit;
      } else {
        this$SceneController.hint_0.innerHTML = 'Cell: { x: ' + ((numberToInt(event.offsetX) / this$SceneController.h | 0) - this$SceneController.offset.first | 0) + ', y: ' + ((((-numberToInt(event.offsetY) | 0) + this$SceneController.height_0 | 0) / this$SceneController.h | 0) - this$SceneController.offset.second | 0) + ' }';
        this$SceneController.hint_0.style.marginLeft = event.clientX.toString() + 'px';
        this$SceneController.hint_0.style.marginTop = event.clientY.toString() + 'px';
        this$SceneController.hint_0.style.opacity = '100%';
        return window.setTimeout(SceneController$mouseClickHandler$lambda$lambda(this$SceneController), 2000);
      }
    };
  }
  function SceneController$mouseUpHandler$lambda(event) {
    return Unit;
  }
  function SceneController$mouseMoveHandler$lambda(event) {
    return Unit;
  }
  function SceneController$mouseDownHandler$lambda(event) {
    return Unit;
  }
  function SceneController$contextMenuHandler$lambda(this$SceneController) {
    return function (event) {
      this$SceneController.toolController_0.contextMenuInvoker_tfvzir$(event);
      return Unit;
    };
  }
  function SceneController$keyDownHandler$lambda(this$SceneController) {
    return function (event) {
      var c = event.key;
      var x = this$SceneController.offset.first;
      var y = this$SceneController.offset.second;
      switch (c) {
        case 'ArrowUp':
          y = y - 1 | 0;
          break;
        case 'W':
          y = y - 1 | 0;
          break;
        case 'w':
          y = y - 1 | 0;
          break;
        case '\u0426':
          y = y - 1 | 0;
          break;
        case '\u0446':
          y = y - 1 | 0;
          break;
        case 'ArrowDown':
          y = y + 1 | 0;
          break;
        case 'S':
          y = y + 1 | 0;
          break;
        case 's':
          y = y + 1 | 0;
          break;
        case '\u042B':
          y = y + 1 | 0;
          break;
        case '\u044B':
          y = y + 1 | 0;
          break;
        case 'ArrowLeft':
          x = x + 1 | 0;
          break;
        case 'A':
          x = x + 1 | 0;
          break;
        case 'a':
          x = x + 1 | 0;
          break;
        case '\u0424':
          x = x + 1 | 0;
          break;
        case '\u0444':
          x = x + 1 | 0;
          break;
        case 'ArrowRight':
          x = x - 1 | 0;
          break;
        case 'D':
          x = x - 1 | 0;
          break;
        case 'd':
          x = x - 1 | 0;
          break;
        case '\u0412':
          x = x - 1 | 0;
          break;
        case '\u0432':
          x = x - 1 | 0;
          break;
        default:break;
      }
      this$SceneController.offset = to(x, y);
      this$SceneController.draw();
      return Unit;
    };
  }
  function SceneController$mouseWheelHandler$lambda(this$SceneController) {
    return function (event) {
      var tmp$, tmp$_0;
      if (event.deltaY > 0) {
        tmp$ = this$SceneController.h;
        if (16 <= tmp$ && tmp$ <= 56)
          this$SceneController.offset = to(this$SceneController.offset.first + (this$SceneController.height_0 / (2 * this$SceneController.h | 0) | 0) + 1 | 0, this$SceneController.offset.second + (this$SceneController.width_0 / (2 * this$SceneController.h | 0) | 0) + 1 | 0);
        this$SceneController.h = this$SceneController.h / 2 | 0;
      } else {
        this$SceneController.h = this$SceneController.h * 2 | 0;
        tmp$_0 = this$SceneController.h;
        if (16 <= tmp$_0 && tmp$_0 <= 56)
          this$SceneController.offset = to(this$SceneController.offset.first - (this$SceneController.height_0 / (2 * this$SceneController.h | 0) | 0) - 1 | 0, this$SceneController.offset.second - (this$SceneController.width_0 / (2 * this$SceneController.h | 0) | 0) - 1 | 0);
      }
      this$SceneController.scene.h = this$SceneController.h;
      this$SceneController.draw();
      return Unit;
    };
  }
  SceneController.$metadata$ = {kind: Kind_CLASS, simpleName: 'SceneController', interfaces: []};
  function BroomTool() {
    this.broomButton_0 = null;
    this.broomButton_0 = document.getElementById('dfa_cleaner');
    this.broomButton_0.addEventListener('click', BroomTool_init$lambda(this));
  }
  BroomTool.prototype.dfaClean = function () {
    SceneController$Companion_getInstance().getInstance().scene.getAutomatonContextManager().getContextMap().clear();
    SceneController$Companion_getInstance().getInstance().draw();
  };
  function BroomTool_init$lambda(this$BroomTool) {
    return function () {
      this$BroomTool.dfaClean();
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('All automatons removed.');
      return Unit;
    };
  }
  BroomTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'BroomTool', interfaces: []};
  function BulldozerTool() {
    this.bulldozerTool_0 = null;
    this.bulldozerTool_0 = document.getElementById('border_eraser');
    this.bulldozerTool_0.addEventListener('click', BulldozerTool_init$lambda(this));
  }
  BulldozerTool.prototype.bulldoze_0 = function () {
    SceneController$Companion_getInstance().getInstance().scene.getMaze().clearBorders();
    SceneController$Companion_getInstance().getInstance().draw();
    ToolController$Companion_getInstance().getInstance().lineTool.disableSwitcher();
    ToolController$Companion_getInstance().getInstance().lineTool.iconHighlighter();
  };
  function BulldozerTool_init$lambda(this$BulldozerTool) {
    return function () {
      this$BulldozerTool.bulldoze_0();
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('All borders removed.');
      return Unit;
    };
  }
  BulldozerTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'BulldozerTool', interfaces: []};
  function ContextMenu() {
    this.contextElement_0 = null;
    this.contextElement_0 = document.getElementById('context-menu');
    window.addEventListener('click', ContextMenu_init$lambda(this));
  }
  ContextMenu.prototype.invoke_tfvzir$ = function (mouseEvent) {
    var tmp$;
    mouseEvent.preventDefault();
    this.contextElement_0.style.top = mouseEvent.clientY.toString() + 'px';
    this.contextElement_0.style.left = mouseEvent.clientX.toString() + 'px';
    this.contextElement_0.classList.add('active');
    (tmp$ = this.contextElement_0) != null ? (tmp$.innerHTML = AutomatonRepository$Companion_getInstance().getInstance().toString()) : null;
    AutomatonRepository$Companion_getInstance().getInstance().addEventListeners();
  };
  function ContextMenu_init$lambda(this$ContextMenu) {
    return function () {
      return this$ContextMenu.contextElement_0.classList.remove('active');
    };
  }
  ContextMenu.$metadata$ = {kind: Kind_CLASS, simpleName: 'ContextMenu', interfaces: []};
  function LineTool() {
    this.lineButton_0 = null;
    this.lineButtonUp_0 = null;
    this.lineButtonDown_0 = null;
    this.lineButtonLeft_0 = null;
    this.lineButtonRight_0 = null;
    this.lineButtonNone_0 = null;
    this.lineButtonDeselect_0 = null;
    this.upHandler_0 = null;
    this.downHandler_0 = null;
    this.leftHandler_0 = null;
    this.rightHandler_0 = null;
    this.noneHandler_0 = null;
    this.switchMap_0 = mutableMapOf([to(this.upHandler_0, false), to(this.downHandler_0, false), to(this.leftHandler_0, false), to(this.rightHandler_0, false), to(this.noneHandler_0, false)]);
    this.selected_0 = false;
    this.upSwitcher = LineTool$upSwitcher$lambda(this);
    this.downSwitcher = LineTool$downSwitcher$lambda(this);
    this.leftSwitcher = LineTool$leftSwitcher$lambda(this);
    this.rightSwitcher = LineTool$rightSwitcher$lambda(this);
    this.noneSwitcher = LineTool$noneSwitcher$lambda(this);
    this.disableSwitcher = LineTool$disableSwitcher$lambda(this);
    this.lineButton_0 = document.getElementById('line_tool');
    this.lineButtonUp_0 = document.getElementById('line_tool_up');
    this.lineButtonDown_0 = document.getElementById('line_tool_down');
    this.lineButtonLeft_0 = document.getElementById('line_tool_left');
    this.lineButtonRight_0 = document.getElementById('line_tool_right');
    this.lineButtonNone_0 = document.getElementById('line_tool_none');
    this.lineButtonDeselect_0 = document.getElementById('line_tool_disable');
    this.upHandler_0 = new LineToolHandler('u');
    this.downHandler_0 = new LineToolHandler('d');
    this.leftHandler_0 = new LineToolHandler('l');
    this.rightHandler_0 = new LineToolHandler('r');
    this.noneHandler_0 = new LineToolHandler('n');
    this.lineButtonUp_0.addEventListener('click', LineTool_init$lambda(this));
    this.lineButtonDown_0.addEventListener('click', LineTool_init$lambda_0(this));
    this.lineButtonLeft_0.addEventListener('click', LineTool_init$lambda_1(this));
    this.lineButtonRight_0.addEventListener('click', LineTool_init$lambda_2(this));
    this.lineButtonNone_0.addEventListener('click', LineTool_init$lambda_3(this));
    this.lineButtonDeselect_0.addEventListener('click', LineTool_init$lambda_4(this));
  }
  LineTool.prototype.selectPoint_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0;
    tmp$ = this.switchMap_0.entries.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      if (entry.value) {
        (tmp$_0 = entry.key) != null ? tmp$_0.selectPoint_vux9f0$(x, y) : null;
        break;
      }}
  };
  LineTool.prototype.isSelected = function () {
    return this.selected_0;
  };
  LineTool.prototype.reset_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this.switchMap_0.entries.iterator();
    while (tmp$.hasNext()) {
      var entry = tmp$.next();
      (tmp$_0 = entry.key) != null ? (tmp$_0.deactivate(), Unit) : null;
      var $receiver = this.switchMap_0;
      var key = entry.key;
      $receiver.put_xwzc9p$(key, false);
    }
  };
  LineTool.prototype.iconHighlighter = function () {
    if (this.selected_0) {
      this.lineButton_0.style = trimIndent('\n                    border: solid 2px #b3deff;\n                    background: 20%;\n                    background-color: #475972;\n                ');
    } else {
      this.lineButton_0.style = trimIndent('\n                    border: none;\n                    background: transparent;\n                ');
    }
  };
  function LineTool$upSwitcher$lambda(this$LineTool) {
    return function () {
      if (SceneController$Companion_getInstance().getInstance().scene.running)
        throw Exception_init('Can not edit maze during scene running');
      ToolController$Companion_getInstance().getInstance().broomTool.dfaClean();
      this$LineTool.reset_0();
      var $receiver = this$LineTool.switchMap_0;
      var key = this$LineTool.upHandler_0;
      $receiver.put_xwzc9p$(key, true);
      this$LineTool.selected_0 = true;
      return Unit;
    };
  }
  function LineTool$downSwitcher$lambda(this$LineTool) {
    return function () {
      if (SceneController$Companion_getInstance().getInstance().scene.running)
        throw Exception_init('Can not edit maze during scene running');
      ToolController$Companion_getInstance().getInstance().broomTool.dfaClean();
      this$LineTool.reset_0();
      var $receiver = this$LineTool.switchMap_0;
      var key = this$LineTool.downHandler_0;
      $receiver.put_xwzc9p$(key, true);
      this$LineTool.selected_0 = true;
      return Unit;
    };
  }
  function LineTool$leftSwitcher$lambda(this$LineTool) {
    return function () {
      if (SceneController$Companion_getInstance().getInstance().scene.running)
        throw Exception_init('Can not edit maze during scene running');
      ToolController$Companion_getInstance().getInstance().broomTool.dfaClean();
      this$LineTool.reset_0();
      var $receiver = this$LineTool.switchMap_0;
      var key = this$LineTool.leftHandler_0;
      $receiver.put_xwzc9p$(key, true);
      this$LineTool.selected_0 = true;
      return Unit;
    };
  }
  function LineTool$rightSwitcher$lambda(this$LineTool) {
    return function () {
      if (SceneController$Companion_getInstance().getInstance().scene.running)
        throw Exception_init('Can not edit maze during scene running');
      ToolController$Companion_getInstance().getInstance().broomTool.dfaClean();
      this$LineTool.reset_0();
      var $receiver = this$LineTool.switchMap_0;
      var key = this$LineTool.rightHandler_0;
      $receiver.put_xwzc9p$(key, true);
      this$LineTool.selected_0 = true;
      return Unit;
    };
  }
  function LineTool$noneSwitcher$lambda(this$LineTool) {
    return function () {
      if (SceneController$Companion_getInstance().getInstance().scene.running)
        throw Exception_init('Can not edit maze during scene running');
      ToolController$Companion_getInstance().getInstance().broomTool.dfaClean();
      this$LineTool.reset_0();
      var $receiver = this$LineTool.switchMap_0;
      var key = this$LineTool.noneHandler_0;
      $receiver.put_xwzc9p$(key, true);
      this$LineTool.selected_0 = true;
      return Unit;
    };
  }
  function LineTool$disableSwitcher$lambda(this$LineTool) {
    return function () {
      this$LineTool.reset_0();
      this$LineTool.selected_0 = false;
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda(this$LineTool) {
    return function () {
      this$LineTool.upSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda_0(this$LineTool) {
    return function () {
      this$LineTool.downSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda_1(this$LineTool) {
    return function () {
      this$LineTool.leftSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda_2(this$LineTool) {
    return function () {
      this$LineTool.rightSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda_3(this$LineTool) {
    return function () {
      this$LineTool.noneSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  function LineTool_init$lambda_4(this$LineTool) {
    return function () {
      this$LineTool.disableSwitcher();
      this$LineTool.iconHighlighter();
      return Unit;
    };
  }
  LineTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'LineTool', interfaces: []};
  function LineToolHandler(type) {
    this.type_0 = type;
    this.x1_0 = to(0, 0);
    this.x2_0 = to(0, 0);
    this.x1Set_0 = false;
    this.x2Set_0 = false;
  }
  LineToolHandler.prototype.selectPoint_vux9f0$ = function (x, y) {
    if (!this.x1Set_0) {
      this.x1_0 = to(x, y);
      this.x1Set_0 = true;
      return false;
    }if (!this.x2Set_0) {
      this.x2_0 = to(x, y);
      this.x2Set_0 = true;
      this.action_0();
    }return true;
  };
  LineToolHandler.prototype.action_0 = function () {
    var tmp$;
    var maze = SceneController$Companion_getInstance().getInstance().scene.getMaze();
    if (this.x2_0.first === this.x1_0.first && !equals(this.type_0, 'u') && !equals(this.type_0, 'd')) {
      var tmp$_0 = new ChessMazeEditor(maze);
      var a = this.x1_0.second;
      var b = this.x2_0.second;
      var tmp$_1 = JsMath.min(a, b);
      var a_0 = this.x1_0.second;
      var b_0 = this.x2_0.second;
      tmp$_0.generateVerticalBorder_cycqfv$(to(tmp$_1, JsMath.max(a_0, b_0)), this.x2_0.first, this.type_0);
    } else if ((tmp$ = this.x1_0) != null ? tmp$.equals(this.x2_0) : null) {
      (new ChessMazeEditor(maze)).addDotBorder_vux9f0$(this.x1_0.first, this.x1_0.second);
    } else {
      var a_1 = (this.x2_0.second - this.x1_0.second | 0) / (this.x2_0.first - this.x1_0.first | 0);
      var b_1 = roundToInt((Kotlin.imul(this.x1_0.second, this.x2_0.first) - Kotlin.imul(this.x1_0.first, this.x2_0.second) | 0) / (this.x2_0.first - this.x1_0.first | 0));
      if (a_1 !== 0.0 || (a_1 === 0.0 && (!equals(this.type_0, 'l') || equals(this.type_0, 'r')))) {
        var tmp$_2 = new ChessMazeEditor(maze);
        var a_2 = this.x1_0.first;
        var b_2 = this.x2_0.first;
        var tmp$_3 = JsMath.min(a_2, b_2);
        var a_3 = this.x1_0.first;
        var b_3 = this.x2_0.first;
        tmp$_2.generateLinearBorder_yaw8w9$(to(tmp$_3, JsMath.max(a_3, b_3)), a_1, b_1, this.type_0);
      }}
    this.x1Set_0 = false;
    this.x2Set_0 = false;
    SceneController$Companion_getInstance().getInstance().draw();
    OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Linear border set.');
  };
  LineToolHandler.prototype.deactivate = function () {
    this.x1Set_0 = false;
    this.x2Set_0 = false;
  };
  LineToolHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'LineToolHandler', interfaces: []};
  function LoadTool() {
    this.loadButton_0 = null;
    this.loadButton_0 = document.getElementById('input__file');
    this.loadButton_0.addEventListener('change', LoadTool_init$lambda(this));
  }
  LoadTool.prototype.loadMaze_0 = function (file) {
    var newMaze = ChessMaze_init_0(file);
    var scene = new Scene(newMaze);
    SceneController$Companion_getInstance().getInstance().setScene_mhdj7a$(scene);
    SceneController$Companion_getInstance().getInstance().draw();
    OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Maze loaded successfully.');
  };
  function LoadTool$getFile$lambda(closure$fileReader, this$LoadTool) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = typeof (tmp$ = closure$fileReader.result) === 'string' ? tmp$ : throwCCE();
      this$LoadTool.loadMaze_0(tmp$_0);
      return Unit;
    };
  }
  LoadTool.prototype.getFile_0 = function () {
    var file = this.loadButton_0.files[0];
    var fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = LoadTool$getFile$lambda(fileReader, this);
  };
  function LoadTool_init$lambda(this$LoadTool) {
    return function () {
      this$LoadTool.getFile_0();
      return Unit;
    };
  }
  LoadTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'LoadTool', interfaces: []};
  function OutputTool() {
    OutputTool$Companion_getInstance();
    this.outputContent_0 = null;
    if (OutputTool$Companion_getInstance().outputTool_0 == null)
      OutputTool$Companion_getInstance().outputTool_0 = this;
    this.outputContent_0 = document.getElementById('preview_output_content');
    this.outputContent_0.value = '';
  }
  function OutputTool$Companion() {
    OutputTool$Companion_instance = this;
    this.outputTool_0 = null;
  }
  OutputTool$Companion.prototype.getInstance = function () {
    var tmp$;
    tmp$ = this.outputTool_0;
    if (tmp$ == null) {
      throw new NullPointerException('outputTool not initialized');
    }return tmp$;
  };
  OutputTool$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var OutputTool$Companion_instance = null;
  function OutputTool$Companion_getInstance() {
    if (OutputTool$Companion_instance === null) {
      new OutputTool$Companion();
    }return OutputTool$Companion_instance;
  }
  OutputTool.prototype.addString_61zpoe$ = function (str) {
    this.outputContent_0.value += str + '\n';
    console.log(str + '\n');
  };
  OutputTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'OutputTool', interfaces: []};
  function PlayTool() {
    this.playButton_0 = null;
    this.playButton_0 = document.getElementById('play');
    this.playButton_0.addEventListener('click', PlayTool_init$lambda(this));
  }
  PlayTool.prototype.togglePlay = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (SceneController$Companion_getInstance().getInstance().scene.running) {
      SceneController$Companion_getInstance().getInstance().stop();
      (tmp$_0 = (tmp$ = this.playButton_0) != null ? tmp$.classList : null) != null ? (tmp$_0.add('fa-play'), Unit) : null;
      (tmp$_2 = (tmp$_1 = this.playButton_0) != null ? tmp$_1.classList : null) != null ? (tmp$_2.remove('fa-pause'), Unit) : null;
      SceneController$Companion_getInstance().getInstance().scene.running = false;
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Sim paused.');
    } else {
      if (SceneController$Companion_getInstance().getInstance().scene.getAutomatonContextManager().getContextMap().isEmpty()) {
        window.alert('Nothing to run');
        throw Exception_init('Nothing to run');
      }SceneController$Companion_getInstance().getInstance().run();
      (tmp$_4 = (tmp$_3 = this.playButton_0) != null ? tmp$_3.classList : null) != null ? (tmp$_4.add('fa-pause'), Unit) : null;
      (tmp$_6 = (tmp$_5 = this.playButton_0) != null ? tmp$_5.classList : null) != null ? (tmp$_6.remove('fa-play'), Unit) : null;
      SceneController$Companion_getInstance().getInstance().scene.running = true;
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Sim started.');
    }
  };
  PlayTool.prototype.playPauseSwitcher_0 = function () {
    ToolController$Companion_getInstance().getInstance().lineTool.disableSwitcher();
    ToolController$Companion_getInstance().getInstance().lineTool.iconHighlighter();
    this.togglePlay();
  };
  function PlayTool_init$lambda(this$PlayTool) {
    return function () {
      this$PlayTool.playPauseSwitcher_0();
      return Unit;
    };
  }
  PlayTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'PlayTool', interfaces: []};
  function PlusTool() {
    var tmp$;
    this.form_0 = (tmp$ = document.getElementById('input_area')) == null || Kotlin.isType(tmp$, HTMLDivElement) ? tmp$ : throwCCE();
    this.plusButton_0 = document.getElementById('plus');
    this.addButton_0 = document.getElementById('add_btn');
    this.formula_0 = document.getElementById('formula');
    this.startSegment_0 = document.getElementById('start_segment');
    this.endSegment_0 = document.getElementById('end_segment');
    this.offsetX_0 = document.getElementById('offset_x');
    this.offsetY_0 = document.getElementById('offset_y');
    this.radioButtons_0 = document.getElementsByName('inlineRadioOptions');
    this.formEnabled_0 = false;
    this.height = 340;
    this.function_0 = 'sin(x)';
    this.startX_0 = 0;
    this.endX_0 = 0;
    this._offsetX_0 = 0;
    this._offsetY_0 = 0;
    this.fill_0 = 'u';
    this.sceneController = SceneController$Companion_getInstance().getInstance();
    this.addButton_0.addEventListener('click', PlusTool_init$lambda(this));
    this.plusButton_0.addEventListener('click', getCallableRef('switch', function ($receiver) {
      return $receiver.switch_0(), Unit;
    }.bind(null, this)));
  }
  PlusTool.prototype.switch_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (!this.formEnabled_0) {
      (tmp$_0 = (tmp$ = this.form_0) != null ? tmp$.style : null) != null ? (tmp$_0.opacity = '100%') : null;
      (tmp$_2 = (tmp$_1 = this.form_0) != null ? tmp$_1.style : null) != null ? (tmp$_2.display = 'block') : null;
      ToolController$Companion_getInstance().getInstance().lineTool.disableSwitcher();
    } else {
      (tmp$_4 = (tmp$_3 = this.form_0) != null ? tmp$_3.style : null) != null ? (tmp$_4.opacity = '0') : null;
      (tmp$_6 = (tmp$_5 = this.form_0) != null ? tmp$_5.style : null) != null ? (tmp$_6.display = 'none') : null;
    }
    this.formEnabled_0 = !this.formEnabled_0;
  };
  PlusTool.prototype.extract_0 = function () {
    var tmp$, tmp$_0;
    this.function_0 = this.formula_0.value.toString();
    try {
      this.startX_0 = toInt(this.startSegment_0.value.toString());
      this.endX_0 = toInt(this.endSegment_0.value.toString());
      this._offsetX_0 = toInt(this.offsetX_0.value.toString());
      this._offsetY_0 = toInt(this.offsetY_0.value.toString());
    } catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        this.startX_0 = 0;
        this.endX_0 = 0;
        this._offsetX_0 = 0;
        this._offsetY_0 = 0;
        this.switch_0();
        window.alert('Fields can not be empty!!!1111!!!');
        printStackTrace(e);
      } else
        throw e;
    }
    if (typeof (tmp$ = this.radioButtons_0[0].checked) === 'boolean' ? tmp$ : throwCCE())
      this.fill_0 = 'u';
    if (typeof (tmp$_0 = this.radioButtons_0[1].checked) === 'boolean' ? tmp$_0 : throwCCE())
      this.fill_0 = 'd';
  };
  function PlusTool_init$lambda(this$PlusTool) {
    return function () {
      this$PlusTool.extract_0();
      (new ChessMazeEditor(this$PlusTool.sceneController.scene.getMaze())).generateBorderFromFunction_hnyx68$(this$PlusTool.function_0, to(this$PlusTool.startX_0, this$PlusTool.endX_0), to(this$PlusTool._offsetX_0, this$PlusTool._offsetY_0), this$PlusTool.fill_0);
      this$PlusTool.switch_0();
      this$PlusTool.sceneController.draw();
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Border from function ' + this$PlusTool.function_0 + ' is set.');
      return Unit;
    };
  }
  PlusTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'PlusTool', interfaces: []};
  function SaveTool() {
    this.saveTool_0 = null;
    this.saveTool_0 = document.getElementById('save_maze');
    this.saveTool_0.addEventListener('click', SaveTool_init$lambda);
  }
  function SaveTool_init$lambda() {
    var txt = SceneController$Companion_getInstance().getInstance().scene.getMaze().toTXT();
    var tmp$ = [txt];
    var type = 'text/plain';
    var o = {};
    o['type'] = type;
    var blob = new Blob(tmp$, o);
    var link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'maze.txt');
    return link.click();
  }
  SaveTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'SaveTool', interfaces: []};
  function ToolController() {
    ToolController$Companion_getInstance();
    this.contextMenu_0 = new ContextMenu();
    this.saveTool = new SaveTool();
    this.loadTool = new LoadTool();
    this.playTool = new PlayTool();
    this.lineTool = new LineTool();
    this.plusTool = new PlusTool();
    this.undoTool = new UndoTool();
    this.bulldozerTool = new BulldozerTool();
    this.broomTool = new BroomTool();
    this.outputTool = new OutputTool();
    if (ToolController$Companion_getInstance().toolController_0 == null)
      ToolController$Companion_getInstance().toolController_0 = this;
  }
  function ToolController$Companion() {
    ToolController$Companion_instance = this;
    this.toolController_0 = null;
  }
  ToolController$Companion.prototype.getInstance = function () {
    var tmp$;
    tmp$ = this.toolController_0;
    if (tmp$ == null) {
      throw new NullPointerException('toolController not initialized');
    }return tmp$;
  };
  ToolController$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ToolController$Companion_instance = null;
  function ToolController$Companion_getInstance() {
    if (ToolController$Companion_instance === null) {
      new ToolController$Companion();
    }return ToolController$Companion_instance;
  }
  ToolController.prototype.contextMenuInvoker_tfvzir$ = function (mouseEvent) {
    AutomatonRepository$Companion_getInstance().getInstance().rmbClickPosition = SceneController$Companion_getInstance().getInstance().getGridCellCoordinates_tfvzir$(mouseEvent);
    this.contextMenu_0.invoke_tfvzir$(mouseEvent);
    this.lineTool.disableSwitcher();
    this.lineTool.iconHighlighter();
  };
  ToolController.$metadata$ = {kind: Kind_CLASS, simpleName: 'ToolController', interfaces: []};
  function UndoTool() {
    this.undoButton_0 = null;
    this.undoButton_0 = document.getElementById('undo');
    this.undoButton_0.addEventListener('click', UndoTool_init$lambda(this));
  }
  UndoTool.prototype.undo_0 = function () {
    ToolController$Companion_getInstance().getInstance().lineTool.disableSwitcher();
    ToolController$Companion_getInstance().getInstance().lineTool.iconHighlighter();
    var maze = SceneController$Companion_getInstance().getInstance().scene.getMaze();
    (new ChessMazeEditor(maze)).removeLastBorder();
    SceneController$Companion_getInstance().getInstance().draw();
  };
  function UndoTool_init$lambda(this$UndoTool) {
    return function () {
      this$UndoTool.undo_0();
      OutputTool$Companion_getInstance().getInstance().addString_61zpoe$('Last border set removed.');
      return Unit;
    };
  }
  UndoTool.$metadata$ = {kind: Kind_CLASS, simpleName: 'UndoTool', interfaces: []};
  function BaseRender() {
  }
  BaseRender.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'BaseRender', interfaces: []};
  function SceneRender(scene, context2d) {
    this.scene = scene;
    this.context2d_0 = context2d;
    this.h_sir2ui$_0 = 15;
    this.offsetX = 0;
    this.offsetY = 0;
    this.width = 897;
    this.height = 897;
  }
  Object.defineProperty(SceneRender.prototype, 'h', {configurable: true, get: function () {
    return this.h_sir2ui$_0;
  }, set: function (value) {
    if (8 <= value && value <= 112) {
      this.h_sir2ui$_0 = value;
    }}});
  SceneRender.prototype.drawAutomaton_98i29q$ = function (x, y, color) {
    this.update_0();
    this.context2d_0.lineWidth = 1;
    this.context2d_0.strokeStyle = '#ff0000';
    this.context2d_0.beginPath();
    this.context2d_0.arc(Kotlin.imul(x, this.h) + (this.h / 2 | 0) | 0, this.height - Kotlin.imul(y, this.h) - (this.h / 2 | 0) | 0, (this.h / 2 | 0) - 2 | 0, 0, 2 * 3.1415926535, false);
    this.context2d_0.closePath();
    this.context2d_0.stroke();
    this.context2d_0.fillStyle = color;
    this.context2d_0.fill();
  };
  SceneRender.prototype.fillCell_98i29q$ = function (x, y, color) {
    this.update_0();
    this.context2d_0.fillStyle = color;
    this.context2d_0.strokeStyle = '#000000';
    this.context2d_0.beginPath();
    this.context2d_0.rect(Kotlin.imul(x, this.h), this.height - Kotlin.imul(y + 1 | 0, this.h) | 0, this.h, this.h);
    this.context2d_0.closePath();
    this.context2d_0.fill();
  };
  SceneRender.prototype.drawGrid = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.update_0();
    var x0 = 0;
    var y0 = 0;
    var lineColor = '#baacc7';
    this.context2d_0.beginPath();
    tmp$ = this.height;
    tmp$_0 = this.h;
    for (var offset = 0; offset <= tmp$; offset += tmp$_0) {
      this.context2d_0.moveTo(0.5, offset + 0.5 + y0);
      this.context2d_0.lineTo(this.width + 0.5, offset + 0.5);
    }
    tmp$_1 = this.width;
    tmp$_2 = this.h;
    for (var offset_0 = 0; offset_0 <= tmp$_1; offset_0 += tmp$_2) {
      this.context2d_0.moveTo(offset_0 + 0.5 + x0, 0.5);
      this.context2d_0.lineTo(offset_0 + 0.5 + x0, this.height + 0.5);
    }
    this.context2d_0.closePath();
    this.setLineStyle_19mbxw$(1, lineColor);
    this.context2d_0.stroke();
  };
  SceneRender.prototype.setLineStyle_19mbxw$ = function (lineWidth, strokeStyle) {
    this.context2d_0.lineWidth = lineWidth;
    this.context2d_0.strokeStyle = strokeStyle;
  };
  SceneRender.prototype.clear = function () {
    this.context2d_0.clearRect(0, 0, this.width, this.height);
  };
  SceneRender.prototype.update_0 = function () {
    this.offsetX = this.scene.offsetX;
    this.offsetY = this.scene.offsetY;
    this.h = this.scene.h;
  };
  SceneRender.$metadata$ = {kind: Kind_CLASS, simpleName: 'SceneRender', interfaces: [BaseRender]};
  var package$automaton = _.automaton || (_.automaton = {});
  package$automaton.Automaton = Automaton;
  package$automaton.AutomatonBuilder = AutomatonBuilder;
  package$automaton.AutomatonContext = AutomatonContext;
  package$automaton.AutomatonContextManager = AutomatonContextManager;
  Object.defineProperty(AutomatonRepository, 'Companion', {get: AutomatonRepository$Companion_getInstance});
  package$automaton.AutomatonRepository = AutomatonRepository;
  package$automaton.DFA = DFA;
  package$automaton.DFABuilder = DFABuilder;
  package$automaton.Prepare = Prepare;
  _.main = main;
  var package$compile = _.compile || (_.compile = {});
  package$compile.Compiler = Compiler;
  var package$editor = _.editor || (_.editor = {});
  package$editor.Editor = Editor;
  var package$maze = _.maze || (_.maze = {});
  var package$core = package$maze.core || (package$maze.core = {});
  package$core.ChessMaze_init_nhinr3$ = ChessMaze_init;
  package$core.ChessMaze_init_61zpoe$ = ChessMaze_init_0;
  package$core.ChessMaze = ChessMaze;
  package$core.ChessMazeBorder_init_estrl2$ = ChessMazeBorder_init;
  package$core.ChessMazeBorder_init_w81bcz$ = ChessMazeBorder_init_0;
  package$core.ChessMazeBorder_init_4qozqa$ = ChessMazeBorder_init_2;
  package$core.ChessMazeBorder = ChessMazeBorder;
  package$core.ChessMazeVertex_init_qt1dr2$ = ChessMazeVertex_init;
  package$core.ChessMazeVertex_init_w81bcz$ = ChessMazeVertex_init_0;
  package$core.ChessMazeVertex = ChessMazeVertex;
  var package$generators = package$maze.generators || (package$maze.generators = {});
  package$generators.ChessMazeEditor = ChessMazeEditor;
  Object.defineProperty(ChessMazeEditorCore, 'Companion', {get: ChessMazeEditorCore$Companion_getInstance});
  package$generators.ChessMazeEditorCore = ChessMazeEditorCore;
  Object.defineProperty(ChessMazeGenerator, 'Companion', {get: ChessMazeGenerator$Companion_getInstance});
  package$generators.ChessMazeGenerator = ChessMazeGenerator;
  var package$output = _.output || (_.output = {});
  package$output.Terminal = Terminal;
  var package$scene = _.scene || (_.scene = {});
  package$scene.Scene = Scene;
  Object.defineProperty(SceneController, 'Companion', {get: SceneController$Companion_getInstance});
  package$scene.SceneController = SceneController;
  var package$tools = package$scene.tools || (package$scene.tools = {});
  package$tools.BroomTool = BroomTool;
  package$tools.BulldozerTool = BulldozerTool;
  package$tools.ContextMenu = ContextMenu;
  package$tools.LineTool = LineTool;
  package$tools.LineToolHandler = LineToolHandler;
  package$tools.LoadTool = LoadTool;
  Object.defineProperty(OutputTool, 'Companion', {get: OutputTool$Companion_getInstance});
  package$tools.OutputTool = OutputTool;
  package$tools.PlayTool = PlayTool;
  package$tools.PlusTool = PlusTool;
  package$tools.SaveTool = SaveTool;
  Object.defineProperty(ToolController, 'Companion', {get: ToolController$Companion_getInstance});
  package$tools.ToolController = ToolController;
  package$tools.UndoTool = UndoTool;
  var package$ui = package$scene.ui || (package$scene.ui = {});
  package$ui.BaseRender = BaseRender;
  package$ui.SceneRender = SceneRender;
  AutomatonContext.prototype.getName = Automaton.prototype.getName;
  DFA.prototype.equals_puj7f4$ = Prepare.prototype.equals_puj7f4$;
  DFA.prototype.prepareInput_61zpoe$ = Prepare.prototype.prepareInput_61zpoe$;
  DFABuilder.prototype.equals_puj7f4$ = Prepare.prototype.equals_puj7f4$;
  DFABuilder.prototype.prepareInput_61zpoe$ = Prepare.prototype.prepareInput_61zpoe$;
  canvas = document.getElementById('test');
  code = document.getElementById('code');
  lines = document.getElementById('lines');
  automatonRepository = AutomatonRepository$Companion_getInstance().getInstance();
  sceneController = new SceneController(canvas);
  if (code == null) {
    throw new NullPointerException('no such element');
  }if (lines == null) {
    throw new NullPointerException('no such element');
  }codeEditor = new Editor(code, lines);
  MAX_COLOR_ID = 3;
  WALL_COLOR_ID = 4;
  NO_COLOR_ID = 0;
  LAMBDA_SYMBOL = 'l';
  CHESS_MAZE_MAX_Y = 100000;
  CHESS_MAZE_MAX_X = 100000;
  STATE_DEFAULT_NAME = 'q0';
  DEFAULT_INIT_VERTEX_X = 0;
  DEFAULT_INIT_VERTEX_Y = 0;
  DEFAULT_INITIAL_VERTEX = ChessMazeVertex_init(0, 0, 0);
  main();
  return _;
}));

//# sourceMappingURL=mazewalker.js.map
