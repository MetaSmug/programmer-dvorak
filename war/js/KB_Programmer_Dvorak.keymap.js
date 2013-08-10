//key width
var w = 6.58;
//key height
var h = 19.5;
//caps lock width
var cl = 11.67;
//tab width
var t = 10;
//shift width
var s = 14.89;

var PROGRAMMER_DVORAK_KEYMAP = {
	//===============NUMBER ROW==============================
	//$
	36 : {x1: 0, y1: 0, x2: w, y2: h},
	//~
	126: {x1: 0, y1: 0, x2: w, y2: h},
	//&
	38 : {x1: w, y1: 0, x2: w*2, y2: h},
	//%
	37 : {x1: w, y1: 0, x2: w*2, y2: h},
	//[
	91 : {x1: w*2, y1: 0, x2: w*3, y2: h},
	//7
	55 : {x1: w*2, y1: 0, x2: w*3, y2: h},
	//{
	123 : {x1: w*3, y1: 0, x2: w*4, y2: h},
	//5
	53 : {x1: w*3, y1: 0, x2: w*4, y2: h},
	//}
	125 : {x1: w*4, y1: 0, x2: w*5, y2: h},
	//3
	51 : {x1: w*4, y1: 0, x2: w*5, y2: h},
	//(
	40 : {x1: w*5, y1: 0, x2: w*6, y2: h},
	//1
	49 : {x1: w*5, y1: 0, x2: w*6, y2: h},
	//=
	61 : {x1: w*6, y1: 0, x2: w*7, y2: h},
	//9
	57 : {x1: w*6, y1: 0, x2: w*7, y2: h},
	//*
	42 : {x1: w*7, y1: 0, x2: w*8, y2: h},
	//0
	48 : {x1: w*7, y1: 0, x2: w*8, y2: h},
	//)
	41 : {x1: w*8, y1: 0, x2: w*4, y2: h},
	//2
	50 : {x1: w*8, y1: 0, x2: w*9, y2: h},
	//+
	43 : {x1: w*3, y1: 0, x2: w*9, y2: h},
	//4
	52 : {x1: w*9, y1: 0, x2: w*10, y2: h},
	//]
	93 : {x1: w*9, y1: 0, x2: w*10, y2: h},
	//6
	54 : {x1: w*10, y1: 0, x2: w*11, y2: h},
	//!
	33 : {x1: w*10, y1: 0, x2: w*11, y2: h},
	//8
	56 : {x1: w*11, y1: 0, x2: w*12, y2: h},
	//#
	35 : {x1: w*11, y1: 0, x2: w*12, y2: h},
	//`
	96 : {x1: w*12, y1: 0, x2: w*13, y2: h},
	//BACKSPACE
	8 : {x1: w*12, y1: 0, x2: w*13, y2: h},
	
	//============================UPPER ROW==========================
	//TAB key has width t
	
	//;
	59 : {x1: t, y1: h, x2: t+w, y2: h*2},
	//:
	58 : {x1: t, y1: h, x2: t+w, y2: h*2},
	//,
	44 : {x1: t+w, y1: h, x2: t+w*2, y2: h*2},
	//<
	60 : {x1: t+w, y1: h, x2: t+w*2, y2: h*2},
	//.
	46 : {x1: t+w*2, y1: h, x2: t+w*3, y2: h*2},
	//>
	62 : {x1: t+w*2, y1: h, x2: t+w*3, y2: h*2},
	//p
	112 : {x1: t+w*3, y1: h, x2: t+w*4, y2: h*2},
	//P
	80 : {x1: t+w*3, y1: h, x2: t+w*4, y2: h*2},
	//y
	121 : {x1: t+w*4, y1: h, x2: t+w*5, y2: h*2},
	//Y
	89 : {x1: t+w*4, y1: h, x2: t+w*5, y2: h*2},
	//f
	102 : {x1: t+w*5, y1: h, x2: t+w*6, y2: h*2},
	//F
	70 : {x1: t+w*5, y1: h, x2: t+w*6, y2: h*2},
	//g
	103 : {x1: t+w*6, y1: h, x2: t+w*7, y2: h*2},
	//G
	71 : {x1: t+w*6, y1: h, x2: t+w*7, y2: h*2},
	//c
	99 : {x1: t+w*7, y1: h, x2: t+w*8, y2: h*2},
	//C
	67 : {x1: t+w*7, y1: h, x2: t+w*8, y2: h*2},
	//r
	114 : {x1: t+w*8, y1: h, x2: t+w*9, y2: h*2},
	//R
	82 : {x1: t+w*8, y1: h, x2: t+w*9, y2: h*2},
	//l
	108 : {x1: t+w*9, y1: h, x2: t+w*10, y2: h*2},
	//L
	76 : {x1: t+w*9, y1: h, x2: t+w*10, y2: h*2},
	///
	47 : {x1: t+w*10, y1: h, x2: t+w*11, y2: h*2},
	//?
	63 : {x1: t+w*10, y1: h, x2: t+w*11, y2: h*2},
	//@
	64 : {x1: t+w*11, y1: h, x2: t+w*12, y2: h*2},
	//^
	94 : {x1: t+w*11, y1: h, x2: t+w*12, y2: h*2},
	//\
	92 : {x1: t+w*12, y1: h, x2: t+w*13, y2: h*2},
	//|
	124 : {x1: t+w*12, y1: h, x2: t+w*13, y2: h*2},
	
	//========================HOME ROW============================
	//Caps Lock has width cl
	
	//a
	97 : {x1: cl, y1: h*2, x2: cl+w, y2: h*3},
	//A
	65 : {x1: cl, y1: h*2, x2: cl+w, y2: h*3},
	//o
	111 : {x1: cl+w, y1: h*2, x2: cl+w*2, y2: h*3},
	//O
	79 : {x1: cl+w, y1: h*2, x2: cl+w*2, y2: h*3},
	//e
	101 : {x1: cl+w*2, y1: h*2, x2: cl+w*3, y2: h*3},
	//E
	69 : {x1: cl+w*2, y1: h*2, x2: cl+w*3, y2: h*3},
	//u
	117 : {x1: cl+w*3, y1: h*2, x2: cl+w*4, y2: h*3},
	//U
	85 : {x1: cl+w*3, y1: h*2, x2: cl+w*4, y2: h*3},
	//i
	105 : {x1: cl+w*4, y1: h*2, x2: cl+w*5, y2: h*3},
	//I
	73 : {x1: cl+w*4, y1: h*2, x2: cl+w*5, y2: h*3},
	//d
	100 : {x1: cl+w*5, y1: h*2, x2: cl+w*6, y2: h*3},
	//D
	68 : {x1: cl+w*5, y1: h*2, x2: cl+w*6, y2: h*3},
	//h
	104 : {x1: cl+w*6, y1: h*2, x2: cl+w*7, y2: h*3},
	//H
	72 : {x1: cl+w*6, y1: h*2, x2: cl+w*7, y2: h*3},
	//t
	116 : {x1: cl+w*7, y1: h*2, x2: cl+w*8, y2: h*3},
	//T
	84 : {x1: cl+w*7, y1: h*2, x2: cl+w*8, y2: h*3},
	//n
	110 : {x1: cl+w*8, y1: h*2, x2: cl+w*9, y2: h*3},
	//N
	78 : {x1: cl+w*8, y1: h*2, x2: cl+w*9, y2: h*3},
	//s
	115 : {x1: cl+w*9, y1: h*2, x2: cl+w*10, y2: h*3},
	//S
	83 : {x1: cl+w*9, y1: h*2, x2: cl+w*10, y2: h*3},
	//-
	45 : {x1: cl+w*10, y1: h*2, x2: cl+w*11, y2: h*3},
	//_
	95 : {x1: cl+w*10, y1: h*2, x2: cl+w*11, y2: h*3},
	//ENTER
	13 : {x1: cl+w*11, y1: h*2, x2: cl+w*12, y2: h*3},
			
	//========================BOTTOM ROW================================
	
	//shift has width 14.89
	
	//'
	39 : {x1: s, y1: h*3, x2: s+w, y2: h*4},
	//"
	34 : {x1: s, y1: h*3, x2: s+w, y2: h*4},
	//q
	113 : {x1: s+w, y1: h*3, x2: s+w*2, y2: h*4},
	//Q
	81 : {x1: s+w, y1: h*3, x2: s+w*2, y2: h*4},
	//j
	106 : {x1: s+w*2, y1: h*3, x2: s+w*3, y2: h*4},
	//J
	74 : {x1: s+w*2, y1: h*3, x2: s+w*3, y2: h*4},
	//k
	107 : {x1: s+w*3, y1: h*3, x2: s+w*4, y2: h*4},
	//K
	75 : {x1: s+w*3, y1: h*3, x2: s+w*4, y2: h*4},
	//x
	120 : {x1: s+w*4, y1: h*3, x2: s+w*5, y2: h*4},
	//X
	88 : {x1: s+w*4, y1: h*3, x2: s+w*5, y2: h*4},
	//b
	98 : {x1: s+w*5, y1: h*3, x2: s+w*6, y2: h*4},
	//B
	66 : {x1: s+w*5, y1: h*3, x2: s+w*6, y2: h*4},
	//m
	109 : {x1: s+w*6, y1: h*3, x2: s+w*7, y2: h*4},
	//M
	77 : {x1: s+w*6, y1: h*3, x2: s+w*7, y2: h*4},
	//w
	119 : {x1: s+w*7, y1: h*3, x2: s+w*8, y2: h*4},
	//W
	87 : {x1: s+w*7, y1: h*3, x2: s+w*8, y2: h*4},
	//v
	118 : {x1: s+w*8, y1: h*3, x2: s+w*9, y2: h*4},
	//V
	86 : {x1: s+w*8, y1: h*3, x2: s+w*9, y2: h*4},
	//z
	122 : {x1: s+w*9, y1: h*3, x2: s+w*10, y2: h*4},
	//Z
	90 : {x1: s+w*9, y1: h*3, x2: s+w*10, y2: h*4},
	
	//===============VERY BOTTOM ROW=======================
	
	//whitespace
	32 : {x1: 26.67, y1: h*4, x2: 66, y2: h*5},
}