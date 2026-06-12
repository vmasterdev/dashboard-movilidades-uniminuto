import { useState, useMemo, useCallback } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LabelList } from "recharts";

const RAW = [
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"PROF-OUT Visitante",movilizante:"Profesor",centro:"COA GARZÓN",programa:"LEID",destino:"España",paisOrigen:"Colombia",socio:"Universidad Internacional de la Rioja-UNIR",unidad:"F. Educación",dur:0,pid:0},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"PROF-IN Visitante",movilizante:"Profesor",centro:"COA GARZÓN",programa:"ASST",destino:"Colombia",paisOrigen:"Colombia",socio:"Corporación Unificada Nacional de Educación Superior- CUN",unidad:"F. Ciencias Empresariales",dur:0,pid:1},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"PROF-IN Visitante",movilizante:"Profesor",centro:"COA GARZÓN",programa:"ASST",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:2},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"PROF-IN Clase espejo",movilizante:"Profesor",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Costa Rica",socio:"Instituto Tecnológico de Costa Rica (TEC)",unidad:"F. Ciencias Empresariales",dur:0,pid:3},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:4},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:5},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:6},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:7},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:8},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:9},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:10},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:11},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:12},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:13},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:14},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:15},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:16},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:17},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:18},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:19},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:20},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:21},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:22},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:23},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:24},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:25},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:26},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:27},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:28},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:29},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:30},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:31},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:32},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Santander - UDES",unidad:"F. Ciencias Empresariales",dur:0,pid:33},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:34},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:35},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:36},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:37},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:12},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:38},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:39},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:40},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:41},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:42},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:43},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:44},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:13},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:45},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:46},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:47},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:48},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:49},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:50},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:51},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:52},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:53},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:54},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:55},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:56},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:57},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:58},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:59},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:60},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:61},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:62},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:63},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:64},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:65},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:66},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:67},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:68},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:69},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:70},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:71},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:72},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:73},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:74},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:75},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:76},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:77},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:78},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:79},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:43},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:80},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:81},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:82},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:83},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:84},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:85},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:86},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:87},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:89},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:90},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:91},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:92},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:93},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Profesor",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:94},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Profesor",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:34},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Profesor",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de Argentina",unidad:"F. Ciencias Empresariales",dur:0,pid:72},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:95},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:96},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:97},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:98},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:99},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:100},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:101},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:102},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:103},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:104},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:105},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:106},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:107},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:108},
  {año:2025,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Educación",dur:1,pid:109},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Administrativo",centro:"COA IBAGUE",programa:"LEID",destino:"España",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Eindhoven.",unidad:"F. Educación",dur:1,pid:110},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Humanas",dur:43,pid:111},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:112},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:113},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:114},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:115},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:116},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:117},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:118},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:119},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:120},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:121},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:122},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"Chile",paisOrigen:"Colombia",socio:"Museo Chileno de arte precolombino",unidad:"F. Ciencias de la Comunicación",dur:0,pid:123},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:124},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:125},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:126},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:127},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:128},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:129},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:130},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:131},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:132},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:133},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:134},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:135},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:136},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:137},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:138},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:139},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:140},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:141},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:142},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:143},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:144},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:145},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:146},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:147},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:148},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:149},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:150},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:151},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:152},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:153},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:154},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:155},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:156},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:157},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:158},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:159},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:160},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:161},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:162},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:163},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"Voluntariado en escenario internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:164},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"Voluntariado en escenario internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:165},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"Voluntariado en escenario internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:166},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"Voluntariado en escenario internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:167},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"Voluntariado en escenario internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:168},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Profesor",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:169},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Profesor",centro:"COA IBAGUE",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"U. de La Salle",unidad:"F. Ciencias Humanas",dur:0,pid:169},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:170},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"PROF-IN Visitante",movilizante:"Profesor",centro:"COA IBAGUE",programa:"ASST",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:171},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Presencial",tipo:"PROF-OUT Visitante",movilizante:"Profesor",centro:"COA IBAGUE",programa:"Esp. Transmedia",destino:"Colombia",paisOrigen:"EE.UU.",socio:"Universidad del Sagrado Corazón",unidad:"F. Ciencias Humanas",dur:6,pid:172},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:173},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:174},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:175},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:176},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:177},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:178},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:179},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:180},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:181},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:182},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:183},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:184},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:185},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:186},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:187},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:188},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:189},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:190},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:191},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:192},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:193},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:194},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:195},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:196},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:197},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:198},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:199},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:200},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:201},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:202},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:203},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:204},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:205},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:206},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:207},
  {año:2025,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"PROF-IN Visitante",movilizante:"Profesor",centro:"COA NEIVA",programa:"ISUM",destino:"Colombia",paisOrigen:"México",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:208},
  {año:2025,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"PROF-OUT Evento",movilizante:"Profesor",centro:"COA NEIVA",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Universidad Tecnológica de Tlaxcala",unidad:"Facultad de Ingeniería",dur:0,pid:209},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"REDCOLSI",unidad:"F. Ciencias Humanas",dur:0,pid:88},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"REDCOLSI",unidad:"F. Ciencias Humanas",dur:0,pid:210},
  {año:2025,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"PROF-IN Clase espejo",movilizante:"Profesor",centro:"COA NEIVA",programa:"TRSO",destino:"Colombia",paisOrigen:"Colombia",socio:"UNICLARETIANA",unidad:"F. Ciencias Humanas",dur:0,pid:211},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:32,pid:212},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:213},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:214},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:215},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:216},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:217},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:218},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:219},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:220},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:221},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:222},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:223},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:224},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:213},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:214},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:215},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:216},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:217},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:218},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:219},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:220},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:221},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:222},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:223},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:224},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:213},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:214},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:215},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:216},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:217},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:218},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:219},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:220},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:221},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:222},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:223},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA GARZÓN",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:224},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"Bolsa de valores",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:1,pid:225},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:1,pid:226},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:1,pid:227},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:0,pid:228},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:0,pid:229},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AEMD",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Colima",unidad:"F. Ciencias Empresariales",dur:0,pid:230},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:231},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:232},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:233},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:234},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:235},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:236},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:237},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:238},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:239},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:240},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:241},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:242},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:243},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:244},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:245},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:246},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:247},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:248},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:249},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:250},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:251},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:252},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:253},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:254},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:255},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:256},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:257},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:258},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:259},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:260},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:261},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:262},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:263},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:264},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:252},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:265},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:266},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:267},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:268},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:269},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:270},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:271},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:272},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:273},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:249},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"AETH",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:274},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:275},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:276},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:277},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:278},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:279},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:280},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:281},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:282},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:283},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:284},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:285},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:286},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:287},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:288},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:289},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:290},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:291},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:292},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:293},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:294},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:295},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA LÉRIDA",programa:"COPD",destino:"Perú",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:31,pid:296},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:297},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:298},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:299},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:300},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:301},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:302},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:303},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:304},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:305},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:306},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:307},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:308},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:309},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:310},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:311},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:312},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:313},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:314},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:315},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:316},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:317},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:318},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:319},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:320},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:321},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:322},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:323},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:324},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:325},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Híbrida",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad del Santander",unidad:"F. Ciencias Empresariales",dur:1,pid:326},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"México",paisOrigen:"México",socio:"Universidad Autónoma del estado de México",unidad:"F. Ciencias Empresariales",dur:3,pid:327},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"México",paisOrigen:"México",socio:"Universidad Autónoma del estado de México",unidad:"F. Ciencias Empresariales",dur:3,pid:328},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"México",paisOrigen:"México",socio:"Universidad Autónoma del estado de México",unidad:"F. Ciencias Empresariales",dur:3,pid:329},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"México",paisOrigen:"México",socio:"Universidad Autónoma del estado de México",unidad:"F. Ciencias Empresariales",dur:3,pid:330},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"COPD",destino:"México",paisOrigen:"México",socio:"Universidad Autónoma del estado de México",unidad:"F. Ciencias Empresariales",dur:3,pid:331},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Presencial",tipo:"Intercambio académico",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRAU",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Guadalajara",unidad:"F. Ciencias de la Comunicación",dur:125,pid:332},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"Facultad de Ingeniería",dur:3,pid:183},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"Facultad de Ingeniería",dur:3,pid:180},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"Facultad de Ingeniería",dur:3,pid:333},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"Facultad de Ingeniería",dur:3,pid:194},
  {año:2026,dir:"Entrante",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"Facultad de Ingeniería",dur:3,pid:193},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Tecnológico de Monterrey",unidad:"Facultad de Ingeniería",dur:111,pid:334},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"México",paisOrigen:"Colombia",socio:"Tecnológico de Monterrey",unidad:"Facultad de Ingeniería",dur:111,pid:335},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:336},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:337},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:338},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:339},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:88},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:340},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:341},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:342},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:343},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:344},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:345},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:346},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:347},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:348},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:349},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:350},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:334},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:351},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:352},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:353},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:335},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:354},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:355},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:356},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:357},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:358},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:359},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:360},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:361},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:362},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:363},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:364},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:365},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:366},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:367},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:368},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:369},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:370},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:371},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Argentina",paisOrigen:"Colombia",socio:"Universidad Austral",unidad:"Facultad de Ingeniería",dur:111,pid:372},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:373},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:374},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:375},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:376},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:377},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Perú",paisOrigen:"Colombia",socio:"Pontificia Universidad Católica del Perú",unidad:"Facultad de Ingeniería",dur:111,pid:378},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:379},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:380},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:381},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:382},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:383},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:384},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:385},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:386},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:387},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:388},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:389},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:390},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:391},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:392},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:393},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:394},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:395},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:396},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:397},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:398},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:399},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:400},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:401},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:402},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:403},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:404},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:405},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:406},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google Cloud",unidad:"Facultad de Ingeniería",dur:111,pid:407},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:408},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:409},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:410},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:411},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:412},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:413},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:414},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:415},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:416},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:417},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:418},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:419},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:420},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:421},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Google",unidad:"Facultad de Ingeniería",dur:111,pid:422},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:423},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:424},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:425},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:426},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:427},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:428},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:431},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:433},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:433},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"EE.UU.",paisOrigen:"Colombia",socio:"Meta",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:434},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:435},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:436},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:437},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:438},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:439},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:440},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:430},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:398},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:441},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:432},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:442},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:435},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"ISUM",destino:"Colombia",paisOrigen:"Colombia",socio:"Universidad de los Andes",unidad:"Facultad de Ingeniería",dur:111,pid:429},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:443},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:444},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:445},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:446},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:447},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:448},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:449},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:450},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:451},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:452},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:453},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:454},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:455},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:456},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:457},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:458},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:459},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:460},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:461},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Proyecto COIL",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:462},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:463},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:464},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:465},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:466},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:467},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:468},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:469},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:470},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:471},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:472},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:473},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:111},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:474},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:475},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:476},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:477},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:478},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:479},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:480},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:481},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:482},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:483},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:484},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:485},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:486},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:487},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:488},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:489},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:490},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:491},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:492},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:493},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:494},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:495},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:496},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:497},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:498},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:499},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:500},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:501},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:502},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:503},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:504},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:505},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:506},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:507},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:508},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:509},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:510},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:511},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:512},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:513},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:514},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:510},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:513},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:507},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:515},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:516},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:510},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:517},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:515},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:518},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:519},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:505},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:520},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:502},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:506},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:521},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:505},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:522},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:506},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"Clase espejo",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:0,pid:511},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:126},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:127},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:130},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:523},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:131},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:524},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:133},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:136},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:139},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:140},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:525},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Co-terminal internacional",movilizante:"Estudiante",centro:"COA IBAGUE",programa:"TRSO",destino:"México",paisOrigen:"Colombia",socio:"U. Autónoma de Tamaulipas",unidad:"F. Ciencias Humanas",dur:49,pid:142},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:526},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:527},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:528},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:529},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:530},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:531},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:532},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:533},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:534},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:535},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:536},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:537},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:538},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:539},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:540},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:541},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:542},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:543},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:544},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:545},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:546},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Industria Ramo - Feria del Libro",unidad:"F. Ciencias Empresariales",dur:0,pid:547},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Movilidad de cursos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Perú",paisOrigen:"Colombia",socio:"Universidad Cesar Vallejo",unidad:"F. Ciencias Empresariales",dur:65,pid:88},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:548},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:549},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:550},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:551},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:552},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:553},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:554},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Coursera",movilizante:"Estudiante",centro:"COA NEIVA",programa:"COPD",destino:"España",paisOrigen:"Colombia",socio:"U. Autónoma de Barcelona",unidad:"F. Ciencias Empresariales",dur:49,pid:555},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:556},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:557},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:558},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:559},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:560},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:561},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:562},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:32,pid:563},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:556},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:557},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:558},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:559},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:560},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:561},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:562},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:32,pid:563},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:556},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:557},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:558},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:559},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:560},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:561},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:562},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA NEIVA",programa:"AEMD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:32,pid:563},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:18,pid:564},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:18,pid:565},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:18,pid:566},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:18,pid:567},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Junta Central de Contadores",unidad:"F. Ciencias Empresariales",dur:18,pid:568},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:18,pid:564},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:18,pid:565},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:18,pid:566},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:18,pid:567},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Consejo Tecnico de la Contaduría Pública",unidad:"F. Ciencias Empresariales",dur:18,pid:568},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:18,pid:564},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:18,pid:565},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:18,pid:566},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:18,pid:567},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Asistencia a eventos",movilizante:"Estudiante",centro:"COA PITALITO",programa:"COPD",destino:"Colombia",paisOrigen:"Colombia",socio:"Manzana Cultural Museo del Oro y Casa de la Moneda",unidad:"F. Ciencias Empresariales",dur:18,pid:568},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"Ponencia virtual",movilizante:"Administrativo",centro:"COA IBAGUE",programa:"Sin programa",destino:"España",paisOrigen:"Colombia",socio:"campus iberus",unidad:"Sin registro",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Participación en evento",movilizante:"Administrativo",centro:"COA IBAGUE",programa:"Sin programa",destino:"Colombia",paisOrigen:"Colombia",socio:"Cumbre de Economia circular",unidad:"Sin registro",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Presencial",tipo:"Participación en evento",movilizante:"Administrativo",centro:"COA IBAGUE",programa:"Sin programa",destino:"Colombia",paisOrigen:"Colombia",socio:"Foro de mujeres que transforman",unidad:"Sin registro",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"ADFU",destino:"Colombia",paisOrigen:"Colombia",socio:"UNIMINUTO",unidad:"F. Ciencias Empresariales",dur:0,pid:88},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"Institucion Alberto Merani",unidad:"F. Educación",dur:0,pid:569},
  {año:2026,dir:"Saliente",nat:"Nacional",mod:"Virtual",tipo:"Asistencia a eventos",movilizante:"Profesor",centro:"COA IBAGUE",programa:"LEID",destino:"Colombia",paisOrigen:"Colombia",socio:"Institucion Alberto Merani",unidad:"F. Educación",dur:0,pid:570},
  {año:2026,dir:"Entrante",nat:"Internacional",mod:"Virtual",tipo:"PROF-IN COIL",movilizante:"Profesor",centro:"COA IBAGUE",programa:"PSID",destino:"Colombia",paisOrigen:"México",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:571},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"PROF-IN COIL",movilizante:"Profesor",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:572},
  {año:2026,dir:"Saliente",nat:"Internacional",mod:"Virtual",tipo:"PROF-IN COIL",movilizante:"Profesor",centro:"COA IBAGUE",programa:"PSID",destino:"México",paisOrigen:"Colombia",socio:"Universidad de Monterrey",unidad:"F. Ciencias Humanas",dur:56,pid:573}
];
// ── Siglas oficiales UNIMINUTO ─────────────────────────────────────────────
const PROG_LABEL = {
  AEMD: "Administración de Empresas",
  ASST: "Adm. en Seguridad y Salud en el Trabajo",
  COPD: "Contaduría Pública",
  ISUM: "Ingeniería de Sistemas",
  CSOD: "Comunicación Social",
  ADFU: "Administración Financiera",
  LEID: "Lic. en Educación Infantil",
  TRSO: "Trabajo Social",
  AETH: "Adm. de Empresas Turísticas y Hoteleras",
  TRAU: "Tec. en Realización Audiovisual",
  PSID: "Psicología",
};

// ── Paleta institucional UNIMINUTO ─────────────────────────────────────────
const BRAND = "#003B71";        // azul institucional
const BRAND2 = "#0072CE";       // azul medio
const GOLD = "#FDB913";         // amarillo institucional
const C25 = "#003B71", C26 = "#0072CE";
const PIE_COLORS = ["#003B71", "#0072CE", "#FDB913", "#5B9BD5", "#1B7F4E", "#8B5CF6", "#E07B39", "#6B7280", "#B0413E", "#3AA6A6"];
const fmt = n => (n ?? 0).toLocaleString("es-CO");

// ── Iconos SVG ─────────────────────────────────────────────────────────────
const Icon = ({ d, size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, verticalAlign: "-2px" }}>
    {d}
  </svg>
);
const IcChart = () => <Icon d={<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>} />;
const IcUsers = () => <Icon d={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const IcLayers = () => <Icon d={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} />;
const IcGlobe = () => <Icon d={<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>} />;
const IcFilter = () => <Icon size={13} d={<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>} />;
const IcX = () => <Icon size={11} d={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} />;

const FIELD_LABELS = { año: "Año", dir: "Dirección", nat: "Naturaleza", mod: "Modalidad", tipo: "Tipo de movilidad", movilizante: "Movilizante", centro: "Centro", programa: "Programa", destino: "Destino", paisOrigen: "País de origen", socio: "Institución", unidad: "Facultad" };

function count(data, field) {
  const m = {};
  data.forEach(r => { m[r[field]] = (m[r[field]] || 0) + 1; });
  return Object.entries(m).map(([name, v]) => ({ name, v })).sort((a, b) => b.v - a.v);
}

// ── Componentes de visualización (todos clicables → cross-filter) ──────────
const CustomTT = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 6, padding: "8px 14px", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,.1)" }}>
      <div style={{ fontWeight: 700, marginBottom: 4, color: "#1e293b" }}>{PROG_LABEL[label] || label}</div>
      {payload.map((p, i) => <div key={i} style={{ color: p.color }}>{p.name}: <b>{fmt(p.value)}</b></div>)}
      <div style={{ marginTop: 4, fontSize: 10, color: "#94a3b8" }}>Clic para filtrar</div>
    </div>
  );
};

function Card({ title, subtitle, children }) {
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 16px", boxShadow: "0 1px 2px rgba(0,0,0,.04)", display: "flex", flexDirection: "column", minHeight: 0 }}>
      <div style={{ marginBottom: 8, flexShrink: 0 }}>
        <h3 style={{ margin: 0, fontSize: 13.5, fontWeight: 700, color: "#1e293b" }}>{title}</h3>
        {subtitle && <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{subtitle}</div>}
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}

function CompareBar({ d25, d26, field, activeFilter, onToggle }) {
  const keys = [...new Set([...d25.map(d => d.name), ...d26.map(d => d.name)])];
  const merged = keys.map(k => ({ name: k, "2025": d25.find(d => d.name === k)?.v ?? 0, "2026": d26.find(d => d.name === k)?.v ?? 0 }));
  if (!merged.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  const sel = activeFilter[field] || [];
  const click = (entry) => onToggle(field, entry.name);
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={160}>
      <BarChart data={merged} layout="vertical" margin={{ top: 4, right: 42, left: 4, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
        <XAxis type="number" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 10.5, fill: "#334155" }} width={130} axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTT />} cursor={{ fill: "#f8fafc" }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="2025" name="2025" radius={[0,3,3,0]} cursor="pointer" onClick={click} label={{ position: "right", fontSize: 10, fill: "#64748b" }}>
          {merged.map((e, i) => <Cell key={i} fill={C25} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
        </Bar>
        <Bar dataKey="2026" name="2026" radius={[0,3,3,0]} cursor="pointer" onClick={click} label={{ position: "right", fontSize: 10, fill: "#64748b" }}>
          {merged.map((e, i) => <Cell key={i} fill={C26} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// Columnas verticales agrupadas — ideal 4-8 categorías en tarjetas anchas
function VertCompare({ d25, d26, field, activeFilter, onToggle }) {
  const keys = [...new Set([...d25.map(d => d.name), ...d26.map(d => d.name)])];
  const merged = keys.map(k => ({ name: k, "2025": d25.find(d => d.name === k)?.v ?? 0, "2026": d26.find(d => d.name === k)?.v ?? 0 }))
    .sort((a, b) => (b["2025"] + b["2026"]) - (a["2025"] + a["2026"]));
  if (!merged.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  const sel = activeFilter[field] || [];
  const click = (entry) => onToggle(field, entry.name);
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={160}>
      <BarChart data={merged} margin={{ top: 18, right: 8, left: 0, bottom: 4 }} barCategoryGap="25%">
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#334155" }} axisLine={false} tickLine={false} interval={0} />
        <YAxis tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} width={36} />
        <Tooltip content={<CustomTT />} cursor={{ fill: "#f8fafc" }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="2025" name="2025" radius={[3,3,0,0]} cursor="pointer" onClick={click} label={{ position: "top", fontSize: 10, fill: "#64748b" }}>
          {merged.map((e, i) => <Cell key={i} fill={C25} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
        </Bar>
        <Bar dataKey="2026" name="2026" radius={[3,3,0,0]} cursor="pointer" onClick={click} label={{ position: "top", fontSize: 10, fill: "#64748b" }}>
          {merged.map((e, i) => <Cell key={i} fill={C26} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// Barras apiladas 100% por año — composición y su cambio entre años (2-4 categorías)
function PctStack({ rows25, rows26, field, activeFilter, onToggle }) {
  const cats = [...new Set([...rows25, ...rows26].map(r => r[field]))].sort();
  if (!cats.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  const mk = (rows, label) => {
    const o = { name: label };
    cats.forEach(c => { o[c] = rows.filter(r => r[field] === c).length; });
    return o;
  };
  const data = [mk(rows25, "2025"), mk(rows26, "2026")];
  const sel = activeFilter[field] || [];
  const PctTT = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    const total = payload.reduce((s, p) => s + (p.value || 0), 0);
    return (
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 6, padding: "8px 14px", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,.1)" }}>
        <div style={{ fontWeight: 700, marginBottom: 4, color: "#1e293b" }}>{PROG_LABEL[label] || label}</div>
        {payload.map((p, i) => <div key={i} style={{ color: p.color }}>{p.name}: <b>{fmt(p.value)}</b> ({total ? (p.value / total * 100).toFixed(1) : 0}%)</div>)}
        <div style={{ marginTop: 4, fontSize: 10, color: "#94a3b8" }}>Clic para filtrar</div>
      </div>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={95}>
      <BarChart data={data} layout="vertical" stackOffset="expand" margin={{ top: 4, right: 16, left: 0, bottom: 4 }} barCategoryGap="30%">
        <XAxis type="number" tickFormatter={v => `${Math.round(v * 100)}%`} tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 13, fontWeight: 700, fill: "#334155" }} width={48} axisLine={false} tickLine={false} />
        <Tooltip content={<PctTT />} cursor={{ fill: "#f8fafc" }} />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        {cats.map((c, i) => (
          <Bar key={c} dataKey={c} name={c} stackId="s" cursor="pointer" onClick={() => onToggle(field, c)}
            opacity={sel.length === 0 || sel.includes(c) ? 1 : 0.25} fill={PIE_COLORS[i % PIE_COLORS.length]}>
            <LabelList dataKey={c} position="center" formatter={v => v > 0 ? fmt(v) : ""} style={{ fontSize: 11, fontWeight: 700, fill: "#fff" }} />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

// Barra apilada por año — 1 barra por categoría. scroll=true para listas largas (todas visibles)
function YearStackBar({ d25, d26, field, activeFilter, onToggle, topN = 999, scroll = false }) {
  const keys = [...new Set([...d25.map(d => d.name), ...d26.map(d => d.name)])];
  let merged = keys.map(k => {
    const a = d25.find(d => d.name === k)?.v ?? 0, b = d26.find(d => d.name === k)?.v ?? 0;
    return { name: k, "2025": a, "2026": b, total: a + b };
  }).sort((x, y) => y.total - x.total);
  if (!merged.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  // topN sólo agrupa si se pasa explícitamente un valor < total
  if (topN < merged.length) {
    const tail = merged.slice(topN);
    const rest = { name: `Otros (${tail.length})`, "2025": tail.reduce((s, d) => s + d["2025"], 0), "2026": tail.reduce((s, d) => s + d["2026"], 0) };
    rest.total = rest["2025"] + rest["2026"];
    merged = [...merged.slice(0, topN), rest];
  }
  const sel = activeFilter[field] || [];
  const click = (entry) => { if (!entry.name.startsWith("Otros (")) onToggle(field, entry.name); };
  const op = (name) => sel.length === 0 || sel.includes(name) ? 1 : 0.25;
  const BAR_H = 28;
  const chartH = merged.length * BAR_H + 40;
  const inner = (
    <BarChart data={merged} layout="vertical" width={scroll ? undefined : undefined} height={scroll ? chartH : undefined}
      margin={{ top: 4, right: 52, left: 4, bottom: 4 }} barCategoryGap="18%">
      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
      <XAxis type="number" tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
      <YAxis type="category" dataKey="name" tick={{ fontSize: 10.5, fill: "#334155" }} width={160} axisLine={false} tickLine={false} interval={0} />
      <Tooltip content={<CustomTT />} cursor={{ fill: "#f8fafc" }} />
      <Legend wrapperStyle={{ fontSize: 11 }} />
      <Bar dataKey="2025" name="2025" stackId="y" cursor="pointer" onClick={click}>
        {merged.map((e, i) => <Cell key={i} fill={C25} opacity={op(e.name)} />)}
        <LabelList dataKey="2025" position="center" formatter={v => v > 1 ? fmt(v) : ""} style={{ fontSize: 10, fontWeight: 700, fill: "#fff" }} />
      </Bar>
      <Bar dataKey="2026" name="2026" stackId="y" cursor="pointer" onClick={click}>
        {merged.map((e, i) => <Cell key={i} fill={C26} opacity={op(e.name)} />)}
        <LabelList dataKey="2026" position="center" formatter={v => v > 1 ? fmt(v) : ""} style={{ fontSize: 10, fontWeight: 700, fill: "#fff" }} />
        <LabelList dataKey="total" position="right" style={{ fontSize: 10.5, fill: "#475569", fontWeight: 700 }} />
      </Bar>
    </BarChart>
  );
  if (scroll) return (
    <div style={{ overflowY: "auto", overflowX: "hidden", height: "100%", paddingRight: 2 }}>
      <div style={{ height: chartH, minHeight: chartH }}>
        <ResponsiveContainer width="100%" height={chartH}>{inner}</ResponsiveContainer>
      </div>
    </div>
  );
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={160}>{inner}</ResponsiveContainer>
  );
}

// Crecimiento por categoría — barra divergente con % de variación 2025→2026
function GrowthChart({ d25, d26, field, activeFilter, onToggle }) {
  const keys = [...new Set([...d25.map(d => d.name), ...d26.map(d => d.name)])];
  const merged = keys.map(k => {
    const a = d25.find(d => d.name === k)?.v ?? 0, b = d26.find(d => d.name === k)?.v ?? 0;
    return { name: k, v25: a, v26: b, pct: a > 0 ? (b - a) / a * 100 : (b > 0 ? 100 : 0) };
  }).sort((x, y) => y.pct - x.pct);
  if (!merged.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  const sel = activeFilter[field] || [];
  const GrowTT = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 6, padding: "8px 14px", fontSize: 12, boxShadow: "0 4px 12px rgba(0,0,0,.1)" }}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>{PROG_LABEL[d.name] || d.name}</div>
        <div>2025: <b>{fmt(d.v25)}</b> · 2026: <b>{fmt(d.v26)}</b></div>
        <div style={{ color: d.pct >= 0 ? "#1B7F4E" : "#B0413E", fontWeight: 700 }}>{d.pct >= 0 ? "+" : ""}{d.pct.toFixed(1)}%</div>
      </div>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={160}>
      <BarChart data={merged} layout="vertical" margin={{ top: 4, right: 64, left: 4, bottom: 4 }} barCategoryGap="28%">
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
        <XAxis type="number" tickFormatter={v => `${v}%`} tick={{ fontSize: 10, fill: "#64748b" }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#334155" }} width={120} axisLine={false} tickLine={false} interval={0} />
        <Tooltip content={<GrowTT />} cursor={{ fill: "#f8fafc" }} />
        <Bar dataKey="pct" cursor="pointer" onClick={(e) => onToggle(field, e.name)}>
          {merged.map((e, i) => <Cell key={i} fill={e.pct >= 0 ? "#1B7F4E" : "#B0413E"} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
          <LabelList dataKey="pct" position="right" formatter={v => `${v >= 0 ? "+" : ""}${v.toFixed(0)}%`} style={{ fontSize: 10.5, fontWeight: 700, fill: "#475569" }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// Matriz dirección × naturaleza — tabla calor por año, celdas clicables (filtran ambas dimensiones)
function HeatMatrix({ rows25, rows26, filters, onTogglePair }) {
  const dirs = ["Entrante", "Saliente"], nats = ["Nacional", "Internacional"];
  const cnt = (rows, d, n) => rows.filter(r => r.dir === d && r.nat === n).length;
  const max = Math.max(1, ...dirs.flatMap(d => nats.flatMap(n => [cnt(rows25, d, n), cnt(rows26, d, n)])));
  const selDir = filters.dir || [], selNat = filters.nat || [];
  const isSel = (d, n) => selDir.includes(d) && selNat.includes(n);
  const anySel = selDir.length > 0 && selNat.length > 0;
  const cell = (rows, d, n, base) => {
    const v = cnt(rows, d, n);
    const t = v / max;
    const on = isSel(d, n);
    return (
      <td key={d + n} onClick={() => onTogglePair(d, n)} style={{
        padding: "10px 8px", textAlign: "center", cursor: "pointer", borderRadius: 6,
        background: on ? GOLD : `rgba(0,59,113,${0.06 + t * 0.85})`,
        color: on ? "#1e293b" : (t > 0.45 ? "white" : "#1e293b"),
        fontWeight: 800, fontSize: 16, opacity: anySel && !on ? 0.35 : 1,
        border: "2px solid white", transition: "all .15s"
      }}>{fmt(v)}</td>
    );
  };
  const block = (rows, label) => (
    <table style={{ borderCollapse: "separate", borderSpacing: 2, width: "100%", tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ fontSize: 11, color: "#64748b", fontWeight: 700, padding: 4 }}>{label}</th>
          {nats.map(n => <th key={n} style={{ fontSize: 10.5, color: "#64748b", fontWeight: 600, padding: 4 }}>{n}</th>)}
        </tr>
      </thead>
      <tbody>
        {dirs.map(d => (
          <tr key={d}>
            <td style={{ fontSize: 10.5, color: "#64748b", fontWeight: 600, textAlign: "right", paddingRight: 6 }}>{d}</td>
            {nats.map(n => cell(rows, d, n))}
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, height: "100%", alignContent: "center" }}>
      {block(rows25, "2025")}
      {block(rows26, "2026")}
    </div>
  );
}

function SinglePie({ data, field, activeFilter, onToggle }) {
  if (!data.length) return <div style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", padding: 20 }}>Sin datos para esta combinación</div>;
  const sel = activeFilter[field] || [];
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={160}>
      <PieChart>
        <Pie data={data} dataKey="v" nameKey="name" cx="50%" cy="50%" outerRadius="68%" innerRadius="40%"
          paddingAngle={1} cursor="pointer" onClick={(e) => onToggle(field, e.name)}
          label={({ name, value, percent }) => `${name.length > 16 ? name.slice(0,15) + "…" : name}: ${fmt(value)} (${(percent*100).toFixed(1)}%)`}
          labelLine={{ stroke: "#cbd5e1", strokeWidth: 1 }} fontSize={10.5}>
          {data.map((e, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} opacity={sel.length === 0 || sel.includes(e.name) ? 1 : 0.25} />)}
        </Pie>
        <Tooltip formatter={(v, n) => [fmt(v), n]} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function StatCard({ label, value, color, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: active ? color : "white", border: `1px solid ${active ? color : "#e2e8f0"}`,
      borderRadius: 10, padding: "10px 14px", textAlign: "center", cursor: onClick ? "pointer" : "default",
      fontFamily: "inherit", transition: "all .15s", boxShadow: active ? `0 2px 8px ${color}40` : "0 1px 2px rgba(0,0,0,.04)",
      borderTop: `3px solid ${color}`
    }}>
      <div style={{ fontSize: 10, color: active ? "rgba(255,255,255,.85)" : "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".03em", marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 800, color: active ? "white" : "#0f172a" }}>{fmt(value)}</div>
    </button>
  );
}

const IcTrend = () => <Icon d={<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>} />;

const TABS = [
  { label: "Resumen", icon: <IcChart /> },
  { label: "Movilizantes", icon: <IcUsers /> },
  { label: "Tipos de movilidad", icon: <IcLayers /> },
  { label: "Destinos", icon: <IcGlobe /> },
  { label: "Análisis", icon: <IcTrend /> },
];

export default function App() {
  const [tab, setTab] = useState(0);
  // Filtros como mapa { campo: [valores] } — un solo estado, estilo Power BI
  const [filters, setFilters] = useState({});

  const toggle = useCallback((field, value) => {
    setFilters(prev => {
      const cur = prev[field] || [];
      const next = cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value];
      const out = { ...prev };
      if (next.length) out[field] = next; else delete out[field];
      return out;
    });
  }, []);

  const clearAll = () => setFilters({});

  // Alterna el par dirección+naturaleza (celdas de la matriz)
  const togglePair = useCallback((d, n) => {
    setFilters(prev => {
      const on = (prev.dir || []).includes(d) && (prev.nat || []).includes(n) && (prev.dir || []).length === 1 && (prev.nat || []).length === 1;
      const out = { ...prev };
      if (on) { delete out.dir; delete out.nat; }
      else { out.dir = [d]; out.nat = [n]; }
      return out;
    });
  }, []);

  const filtered = useMemo(() => RAW.filter(r =>
    Object.entries(filters).every(([f, vals]) => vals.includes(r[f]))
  ), [filters]);

  const f25 = useMemo(() => filtered.filter(r => r.año === 2025), [filtered]);
  const f26 = useMemo(() => filtered.filter(r => r.año === 2026), [filtered]);

  const activeChips = Object.entries(filters).flatMap(([f, vals]) => vals.map(v => ({ field: f, value: v })));
  const has = activeChips.length > 0;

  // helper para StatCards de dimensión
  const isOn = (f, v) => (filters[f] || []).includes(v);
  const n = (pred) => filtered.filter(pred).length;

  const grid2 = { flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 12 };

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", background: "#f1f5f9", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* ── Encabezado institucional ── */}
      <div style={{ background: BRAND, padding: "12px 24px 0", color: "white", borderBottom: `4px solid ${GOLD}`, flexShrink: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, opacity: 0.75, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Corporación Universitaria Minuto de Dios — Oficina de Asuntos Globales</div>
            <h1 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 700 }}>Movilidad Académica · Primer Trimestre 2025 – 2026</h1>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ l: "2025", v: f25.length }, { l: "2026", v: f26.length }, { l: "Total", v: filtered.length }].map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "6px 16px", textAlign: "center", minWidth: 70 }}>
                <div style={{ fontSize: 9, opacity: 0.75, textTransform: "uppercase", letterSpacing: ".05em" }}>{s.l}</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{fmt(s.v)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {TABS.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: "6px 6px 0 0",
              border: "none", cursor: "pointer", fontSize: 12.5, fontFamily: "inherit",
              fontWeight: tab === i ? 700 : 500,
              background: tab === i ? "#f1f5f9" : "rgba(255,255,255,0.08)",
              color: tab === i ? BRAND : "rgba(255,255,255,0.85)"
            }}>
              {t.icon}{t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Barra de filtros activos (estilo Power BI) ── */}
      <div style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "6px 24px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", minHeight: 36, flexShrink: 0 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 600, color: "#64748b" }}>
          <IcFilter /> Filtros
        </span>
        {!has && <span style={{ fontSize: 11.5, color: "#94a3b8" }}>Haga clic en cualquier barra, sector o tarjeta para filtrar todo el tablero. Clic de nuevo para deshacer.</span>}
        {activeChips.map((c, i) => (
          <button key={i} onClick={() => toggle(c.field, c.value)} style={{
            display: "flex", alignItems: "center", gap: 5, padding: "3px 8px 3px 10px", borderRadius: 14,
            border: `1px solid ${BRAND2}`, background: "#eff6ff", color: BRAND, fontSize: 11.5, fontWeight: 600,
            cursor: "pointer", fontFamily: "inherit"
          }}>
            <span style={{ opacity: 0.6, fontWeight: 500 }}>{FIELD_LABELS[c.field]}:</span> {c.value} <IcX />
          </button>
        ))}
        {has && (
          <button onClick={clearAll} style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, padding: "4px 12px", borderRadius: 6, background: "white", border: "1px solid #cbd5e1", color: "#475569", fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            <IcX /> Limpiar todo
          </button>
        )}
      </div>

      <div style={{ flex: 1, minHeight: 0, padding: "12px 24px 12px", display: "flex", flexDirection: "column", gap: 12 }}>

        {/* ── KPIs clicables (visibles en todas las pestañas) ── */}
        <div style={{ flexShrink: 0, display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: 10 }}>
          <StatCard label="Año 2025" value={f25.length} color={C25} active={isOn("año", 2025)} onClick={() => toggle("año", 2025)} />
          <StatCard label="Año 2026" value={f26.length} color={C26} active={isOn("año", 2026)} onClick={() => toggle("año", 2026)} />
          <StatCard label="Entrantes" value={n(r => r.dir === "Entrante")} color="#1B7F4E" active={isOn("dir", "Entrante")} onClick={() => toggle("dir", "Entrante")} />
          <StatCard label="Salientes" value={n(r => r.dir === "Saliente")} color={GOLD} active={isOn("dir", "Saliente")} onClick={() => toggle("dir", "Saliente")} />
          <StatCard label="Nacional" value={n(r => r.nat === "Nacional")} color="#5B9BD5" active={isOn("nat", "Nacional")} onClick={() => toggle("nat", "Nacional")} />
          <StatCard label="Internacional" value={n(r => r.nat === "Internacional")} color="#8B5CF6" active={isOn("nat", "Internacional")} onClick={() => toggle("nat", "Internacional")} />
          <StatCard label="Virtual" value={n(r => r.mod === "Virtual")} color="#3AA6A6" active={isOn("mod", "Virtual")} onClick={() => toggle("mod", "Virtual")} />
          <StatCard label="Presencial" value={n(r => r.mod === "Presencial")} color="#E07B39" active={isOn("mod", "Presencial")} onClick={() => toggle("mod", "Presencial")} />
          <StatCard label="Híbrida" value={n(r => r.mod === "Híbrida")} color="#B0413E" active={isOn("mod", "Híbrida")} onClick={() => toggle("mod", "Híbrida")} />
        </div>

        {tab === 0 && (
          <div style={grid2}>
            <Card title="Movilidades por centro universitario" subtitle="Comparativo 2025 vs 2026 · clic para filtrar">
              <VertCompare d25={count(f25, "centro")} d26={count(f26, "centro")} field="centro" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Movilidades por programa académico" subtitle="Total por programa, segmentado por año · clic para filtrar">
              <YearStackBar d25={count(f25, "programa")} d26={count(f26, "programa")} field="programa" activeFilter={filters} onToggle={toggle} scroll={true} />
            </Card>
            <Card title="Composición: naturaleza y modalidad" subtitle="Participación porcentual por año · clic para filtrar">
              <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", height: "100%", minHeight: 0 }}>
                <PctStack rows25={f25} rows26={f26} field="nat" activeFilter={filters} onToggle={toggle} />
                <PctStack rows25={f25} rows26={f26} field="mod" activeFilter={filters} onToggle={toggle} />
              </div>
            </Card>
            <Card title="Movilidades por país de destino" subtitle="Total por país, segmentado por año · clic para filtrar">
              <YearStackBar d25={count(f25, "destino")} d26={count(f26, "destino")} field="destino" activeFilter={filters} onToggle={toggle} scroll={true} />
            </Card>
          </div>
        )}

        {tab === 1 && (
          <div style={grid2}>
            <Card title="Tipo de movilizante" subtitle="Comparativo 2025 vs 2026 · clic para filtrar">
              <VertCompare d25={count(f25, "movilizante")} d26={count(f26, "movilizante")} field="movilizante" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Distribución de movilizantes" subtitle="Total filtrado · clic para filtrar">
              <SinglePie data={count(filtered, "movilizante")} field="movilizante" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Centros con movilidad" subtitle="Según filtros activos · clic para filtrar">
              <VertCompare d25={count(f25, "centro")} d26={count(f26, "centro")} field="centro" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Programas con movilidad" subtitle="Total por programa, segmentado por año · clic para filtrar">
              <YearStackBar d25={count(f25, "programa")} d26={count(f26, "programa")} field="programa" activeFilter={filters} onToggle={toggle} scroll={true} />
            </Card>
          </div>
        )}

        {tab === 2 && (
          <div style={grid2}>
            <Card title="Tipos de movilidad" subtitle="Total por tipo, segmentado por año · clic para filtrar">
              <YearStackBar d25={count(f25, "tipo")} d26={count(f26, "tipo")} field="tipo" activeFilter={filters} onToggle={toggle} scroll={true} />
            </Card>
            <Card title="Distribución por tipo de movilidad" subtitle="Principales tipos · clic para filtrar">
              <SinglePie data={count(filtered, "tipo")} field="tipo" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Modalidad por año" subtitle="Participación porcentual · clic para filtrar">
              <PctStack rows25={f25} rows26={f26} field="mod" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Naturaleza por año" subtitle="Participación porcentual · clic para filtrar">
              <PctStack rows25={f25} rows26={f26} field="nat" activeFilter={filters} onToggle={toggle} />
            </Card>
          </div>
        )}

        {tab === 3 && (
          <div style={grid2}>
            <Card title="País de destino" subtitle="Comparativo 2025 vs 2026 · clic para filtrar">
              <VertCompare d25={count(f25, "destino")} d26={count(f26, "destino")} field="destino" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Distribución de destinos" subtitle="Participación porcentual · clic para filtrar">
              <SinglePie data={count(filtered, "destino")} field="destino" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Destinos por centro" subtitle="Filtre un centro y vea sus destinos · clic para filtrar">
              <VertCompare d25={count(f25, "centro")} d26={count(f26, "centro")} field="centro" activeFilter={filters} onToggle={toggle} />
            </Card>
            <Card title="Destinos por programa" subtitle="Total por programa, segmentado por año · clic para filtrar">
              <YearStackBar d25={count(f25, "programa")} d26={count(f26, "programa")} field="programa" activeFilter={filters} onToggle={toggle} scroll={true} />
            </Card>
          </div>
        )}

        {tab === 4 && (
          <>
            <div style={{ flexShrink: 0, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
              <StatCard label="Personas únicas 2025" value={new Set(f25.map(r => r.pid)).size} color={C25} />
              <StatCard label="Personas únicas 2026" value={new Set(f26.map(r => r.pid)).size} color={C26} />
              <StatCard label="Registros 2025" value={f25.length} color="#5B9BD5" />
              <StatCard label="Registros 2026" value={f26.length} color="#5B9BD5" />
              <StatCard label="Duración prom. 2025 (días)" value={f25.length ? Math.round(f25.reduce((s, r) => s + r.dur, 0) / f25.length) : 0} color="#3AA6A6" />
              <StatCard label="Duración prom. 2026 (días)" value={f26.length ? Math.round(f26.reduce((s, r) => s + r.dur, 0) / f26.length) : 0} color="#3AA6A6" />
            </div>
            <div style={grid2}>
              <Card title="Crecimiento por centro universitario" subtitle="Variación porcentual 2025 → 2026 · clic para filtrar">
                <GrowthChart d25={count(f25, "centro")} d26={count(f26, "centro")} field="centro" activeFilter={filters} onToggle={toggle} />
              </Card>
              <Card title="Matriz dirección × naturaleza" subtitle="Volumen por combinación y año · clic en una celda para filtrar">
                <HeatMatrix rows25={f25} rows26={f26} filters={filters} onTogglePair={togglePair} />
              </Card>
              <Card title="Principales instituciones aliadas" subtitle="Contraparte de la movilidad (excluye UNIMINUTO) · clic para filtrar">
                <YearStackBar d25={count(f25.filter(r => r.socio !== "UNIMINUTO"), "socio")} d26={count(f26.filter(r => r.socio !== "UNIMINUTO"), "socio")} field="socio" activeFilter={filters} onToggle={toggle} scroll={true} />
              </Card>
              <Card title="Movilidades por facultad" subtitle="Total por unidad académica, segmentado por año · clic para filtrar">
                <YearStackBar d25={count(f25, "unidad")} d26={count(f26, "unidad")} field="unidad" activeFilter={filters} onToggle={toggle} scroll={true} />
              </Card>
            </div>
          </>
        )}

      </div>

      <div style={{ flexShrink: 0, textAlign: "center", padding: "4px 0 6px", fontSize: 10, color: "#94a3b8" }}>
        Fuente: Oficina de Asuntos Globales · UNIMINUTO · Primer trimestre 2025–2026 · {RAW.length} registros
      </div>
    </div>
  );
}
