//INPUTS***************************************************************************

var impedancia_1 = document.getElementById("r_jx_1");
var impedancia_2 = document.getElementById("r_jx_2");
var impedancia_3 = document.getElementById("r_jx_3");

var tipo_inst = document.getElementById("tipo_tri");

//OUTPUTS**************************************************************************


var corrente_fase_1 = document.getElementById("if_1");
var corrente_fase_2 = document.getElementById("if_2");
var corrente_fase_3 = document.getElementById("if_3");

var corrente_linha_1 = document.getElementById("il_1");
var corrente_linha_2 = document.getElementById("il_2");
var corrente_linha_3 = document.getElementById("il_3"); 

var potencia_fase_1 = document.getElementById("pf_1");
var potencia_fase_2 = document.getElementById("pf_2");
var potencia_fase_3 = document.getElementById("pf_3");

var potencia_linha_1 = document.getElementById("pl_1");
var potencia_linha_2 = document.getElementById("pl_2");
var potencia_linha_3 = document.getElementById("pl_3");


function calcular(){



var ti = Number(Number(tipo_inst.value));


var z1 = impedancia_1.value;
var z2 = impedancia_2.value;
var z3 = impedancia_3.value;

//Verificaçao J Impedancia 1*******************************************************************************************

var lenght_z1= z1.length;

var x_1=0;
var y_1=1;

var pos_j1=1;



for(i=0;i<lenght_z1;i++){

var verificaco_j1 = z1.substring(x_1, y_1);

if(verificaco_j1=="j"){
break;
}

pos_j1 =pos_j1+1;
x_1=x_1+1;
y_1=y_1+1;

 }

//Fim Verificaçao J Impedancia 1*******************************************************************************************

//Verificaçao J Impedancia 2*******************************************************************************************

var lenght_z2= z2.length;

var x_2=0;
var y_2=1;

var pos_j2=1;



for(i=0;i<lenght_z2;i++){

var verificaco_j2 = z2.substring(x_2, y_2);

if(verificaco_j2=="j"){
break;
}

pos_j2 =pos_j2+1;
x_2=x_2+1;
y_2=y_2+1;

 }

//Fim Verificaçao J Impedancia 2*******************************************************************************************


//Verificaçao J Impedancia 3*******************************************************************************************

var lenght_z3= z3.length;

var x_3=0;
var y_3=1;

var pos_j3=1;



for(i=0;i<lenght_z3;i++){

var verificaco_j3 = z3.substring(x_3, y_3);

if(verificaco_j3=="j"){
break;
}

pos_j3 =pos_j3+1;
x_3=x_3+1;
y_3=y_3+1;

 }

//Fim Verificaçao J Impedancia 3*******************************************************************************************

var resistencia_1 =Number(z1.substring(0, pos_j1-2));
var reatancia_1_sem_sinal = z1.substring(pos_j1, lenght_z1);
var sinal_1 = z1.substring(pos_j1-2, pos_j1-1);
var reatancia_1= Number(sinal_1+reatancia_1_sem_sinal);

var resistencia_2 =Number(z2.substring(0, pos_j2-2));
var reatancia_2_sem_sinal = z2.substring(pos_j2, lenght_z2);
var sinal_2 = z2.substring(pos_j2-2, pos_j2-1);
var reatancia_2= Number(sinal_2+reatancia_2_sem_sinal);

var resistencia_3 =Number(z3.substring(0, pos_j3-2));
var reatancia_3_sem_sinal = z3.substring(pos_j3, lenght_z3);
var sinal_3 = z3.substring(pos_j3-2, pos_j3-1);
var reatancia_3= Number(sinal_3+reatancia_3_sem_sinal);

if((resistencia_1>0 || reatancia_1>0 || reatancia_1<0) && (resistencia_2>0 || reatancia_2>0 || reatancia_2<0) && (resistencia_3>0 || reatancia_3>0 || reatancia_3<0)){

var tensao_1;
var tensao_2;
var tensao_3;

var angulo_1;
var angulo_2;
var angulo_3;

if(ti==0){
tensao_1=230;
tensao_2=230;
tensao_3=230;

angulo_1=0;
angulo_2=120*(Math.PI/180);
angulo_3=-120*(Math.PI/180);

//ANGULO IMPEDANCIA Z1*******************************************************************************************

if(reatancia_1>0 && resistencia_1==0){

var angulo_z1 = 90*(Math.PI/180);

}


if(reatancia_1<0 && resistencia_1==0){

var angulo_z1 = -90*(Math.PI/180);

}

else{

var angulo_z1=Math.atan(reatancia_1/resistencia_1)*(Math.PI/180); 
}

//FIM ANGULO IMPEDANCIA Z1***************************************************************************************

//ANGULO IMPEDANCIA Z2*******************************************************************************************

if(reatancia_2>0 && resistencia_2==0){

var angulo_z2 = 90*(Math.PI/180);

}


if(reatancia_2<0 && resistencia_2==0){

var angulo_z2 = -90*(Math.PI/180);

}

else{

var angulo_z2=Math.atan(reatancia_2/resistencia_2)*(Math.PI/180); 
}


//FIM ANGULO IMPEDANCIA Z2***************************************************************************************

//ANGULO IMPEDANCIA Z3*******************************************************************************************

if(reatancia_3>0 && resistencia_3==0){

var angulo_z3 = 90*(Math.PI/180);

}


if(reatancia_3<0 && resistencia_3==0){

var angulo_z3 = -90*(Math.PI/180);

}

else{

var angulo_z3=Math.atan(reatancia_3/resistencia_3)*(Math.PI/180); 
}


//FIM ANGULO IMPEDANCIA Z3***************************************************************************************


var modulo_z1 = Math.sqrt(Math.pow(resistencia_1, 2) + Math.pow (reatancia_1, 2));

var modulo_z2 = Math.sqrt(Math.pow(resistencia_2, 2) + Math.pow (reatancia_2, 2));

var modulo_z3 = Math.sqrt(Math.pow(resistencia_3, 2) + Math.pow (reatancia_3, 2));



//QUEDA TENSAO AO TERMINAL DA CARGA 1*************************************************************************


var angulo_z2_z3 = angulo_z2+angulo_z3;


var mod_mul_z2_z3 = modulo_z2*modulo_z3; 



var real_z2_z3 = resistencia_2+resistencia_3;
var imag_z2_z3 = reatancia_2+reatancia_3;

var modulo_som_z2_z3 = Math.sqrt(Math.pow(real_z2_z3, 2) + Math.pow(imag_z2_z3, 2));


if(imag_z2_z3>0 && real_z2_z3==0){

var angulo_som_z2_z3 = 90*(Math.PI/180);

}

if(imag_z2_z3<0 && real_z2_z3==0){

var angulo_som_z2_z3 = -90*(Math.PI/180);

}

else{

var angulo_som_z2_z3 = Math.atan(imag_z2_z3/real_z2_z3)*(Math.PI/180);

}


var modulo_tot_z2_z3 = mod_mul_z2_z3/modulo_som_z2_z3;

var angulo_tot_z2_z3 = (angulo_z2_z3)-(angulo_som_z2_z3);


var resistencia_z2_z3 = modulo_tot_z2_z3*Math.cos(angulo_tot_z2_z3);

var reatancia_z2_z3 = modulo_tot_z2_z3*Math.sin(angulo_tot_z2_z3);


var resistencia_qtt1 = resistencia_z2_z3+resistencia_1;

var reatancia_qtt1 = reatancia_z2_z3+reatancia_1;


var mod_qtt1 = Math.sqrt(Math.pow(resistencia_qtt1, 2) + Math.pow(reatancia_qtt1, 2));



if(reatancia_qtt1>0 && resistencia_qtt1==0){

var angulo_qtt1 = 90*(Math.PI/180);

}

if(reatancia_qtt1<0 && resistencia_qtt1==0){

var angulo_qtt1 = 90*(Math.PI/180);

}

else{

var angulo_qtt1 = Math.atan(reatancia_qtt1/resistencia_qtt1)*(Math.PI/180);

}


var mod_corrente_qtt1=tensao_1/mod_qtt1;

var ang_corrente_qtt1= (angulo_1)-(angulo_qtt1);


var mod_qtt1_v = mod_corrente_qtt1*modulo_tot_z2_z3;
var ang_qtt1_v = ang_corrente_qtt1+angulo_tot_z2_z3;

var R_qtt1_v = mod_qtt1_v*Math.cos(ang_qtt1_v);
var I_qtt1_v = mod_qtt1_v*Math.sin(ang_qtt1_v);


//FIM QUEDA TENSAO AO TERMINAL DA CARGA 1*************************************************************************


//QUEDA TENSAO AO TERMINAL DA CARGA 2*************************************************************************


var angulo_z1_z3 = angulo_z1+angulo_z3;


var mod_mul_z1_z3 = modulo_z1*modulo_z3; 



var real_z1_z3 = resistencia_1+resistencia_3;
var imag_z1_z3 = reatancia_1+reatancia_3;

var modulo_som_z1_z3 = Math.sqrt(Math.pow(real_z1_z3, 2) + Math.pow(imag_z1_z3, 2));


if(imag_z1_z3>0 && real_z1_z3==0){

var angulo_som_z1_z3 = 90*(Math.PI/180);

}

if(imag_z1_z3<0 && real_z1_z3==0){

var angulo_som_z1_z3 = -90*(Math.PI/180);

}

else{

var angulo_som_z1_z3 = Math.atan(imag_z1_z3/real_z1_z3)*(Math.PI/180);

}


var modulo_tot_z1_z3 = mod_mul_z1_z3/modulo_som_z1_z3;

var angulo_tot_z1_z3 = (angulo_z1_z3)-(angulo_som_z1_z3);


var resistencia_z1_z3 = modulo_tot_z1_z3*Math.cos(angulo_tot_z1_z3);

var reatancia_z1_z3 = modulo_tot_z1_z3*Math.sin(angulo_tot_z1_z3);


var resistencia_qtt2 = resistencia_z1_z3+resistencia_2;

var reatancia_qtt2 = reatancia_z1_z3+reatancia_2;


var mod_qtt2 = Math.sqrt(Math.pow(resistencia_qtt2, 2) + Math.pow(reatancia_qtt2, 2));



if(reatancia_qtt2>0 && resistencia_qtt2==0){

var angulo_qtt2 = 90*(Math.PI/180);

}

if(reatancia_qtt2<0 && resistencia_qtt2==0){

var angulo_qtt2 = 90*(Math.PI/180);

}

else{

var angulo_qtt2 = Math.atan(reatancia_qtt2/resistencia_qtt2)*(Math.PI/180);

}


var mod_corrente_qtt2=tensao_2/mod_qtt2;

var ang_corrente_qtt2= (angulo_2)-(angulo_qtt2);


var mod_qtt2_v = mod_corrente_qtt2*modulo_tot_z1_z3;
var ang_qtt2_v = ang_corrente_qtt2+angulo_tot_z1_z3;

var R_qtt2_v = mod_qtt2_v*Math.cos(ang_qtt2_v);
var I_qtt2_v = mod_qtt2_v*Math.sin(ang_qtt2_v);


//FIM QUEDA TENSAO AO TERMINAL DA CARGA 2*************************************************************************


//QUEDA TENSAO AO TERMINAL DA CARGA 3*************************************************************************


var angulo_z1_z2 = angulo_z1+angulo_z2;


var mod_mul_z1_z2 = modulo_z1*modulo_z2; 



var real_z1_z2 = resistencia_1+resistencia_2;
var imag_z1_z2 = reatancia_1+reatancia_2;

var modulo_som_z1_z2 = Math.sqrt(Math.pow(real_z1_z2, 2) + Math.pow(imag_z1_z2, 2));


if(imag_z1_z2>0 && real_z1_z2==0){

var angulo_som_z1_z2 = 90*(Math.PI/180);

}

if(imag_z1_z2<0 && real_z1_z2==0){

var angulo_som_z1_z2 = -90*(Math.PI/180);

}

else{

var angulo_som_z1_z2 = Math.atan(imag_z1_z2/real_z1_z2)*(Math.PI/180);

}


var modulo_tot_z1_z2 = mod_mul_z1_z2/modulo_som_z1_z2;

var angulo_tot_z1_z2 = (angulo_z1_z2)-(angulo_som_z1_z2);


var resistencia_z1_z2 = modulo_tot_z1_z2*Math.cos(angulo_tot_z1_z2);

var reatancia_z1_z2 = modulo_tot_z1_z2*Math.sin(angulo_tot_z1_z2);


var resistencia_qtt3 = resistencia_z1_z2+resistencia_3;

var reatancia_qtt3 = reatancia_z1_z2+reatancia_3;


var mod_qtt3 = Math.sqrt(Math.pow(resistencia_qtt3, 2) + Math.pow(reatancia_qtt3, 2));



if(reatancia_qtt3>0 && resistencia_qtt3==0){

var angulo_qtt3 = 90*(Math.PI/180);

}

if(reatancia_qtt3<0 && resistencia_qtt3==0){

var angulo_qtt3 = 90*(Math.PI/180);

}

else{

var angulo_qtt3 = Math.atan(reatancia_qtt3/resistencia_qtt3)*(Math.PI/180);

}


var mod_corrente_qtt3=tensao_3/mod_qtt3;

var ang_corrente_qtt3= (angulo_3)-(angulo_qtt3);


var mod_qtt3_v = mod_corrente_qtt3*modulo_tot_z1_z2;
var ang_qtt3_v = ang_corrente_qtt3+angulo_tot_z1_z2;

var R_qtt3_v = mod_qtt3_v*Math.cos(ang_qtt3_v);
var I_qtt3_v = mod_qtt3_v*Math.sin(ang_qtt3_v);


//FIM QUEDA TENSAO AO TERMINAL DA CARGA 3*************************************************************************

//SOMATÓRIO QUEDAS TENSAO AOS TERMINAIS;

var r_total = R_qtt1_v+R_qtt2_v+R_qtt3_v;
var i_total = I_qtt1_v+I_qtt2_v+I_qtt3_v;


//FIM SOMATÓRIO QUEDAS TENSAO AOS TERMINAIS;

//QUEDAS DE TENSAO ÀS CARGAS;

var v1_r = (tensao_1*Math.cos(angulo_1))-(r_total);
var v1_i = (tensao_1*Math.sin(angulo_1))-(i_total);

var v1_mod = Math.sqrt(Math.pow(v1_r, 2) + Math.pow(v1_i, 2));

if(v1_i>0 && v1_r==0){

var angulo_v11 = 90*(Math.PI/180);

}

if(v1_i<0 && v1_r==0){

var angulo_v11 = -90*(Math.PI/180);

}

else{

var angulo_v11 = Math.atan(v1_i/v1_r)*(Math.PI/180);

}





var v2_r = (tensao_2*Math.cos(angulo_2))-(r_total);
var v2_i = (tensao_2*Math.sin(angulo_2))-(i_total);

var v2_mod = Math.sqrt(Math.pow(v2_r, 2) + Math.pow(v2_i, 2));

if(v2_i>0 && v2_r==0){

var angulo_v22 = 90*(Math.PI/180);

}

if(v2_i<0 && v2_r==0){

var angulo_v22 = -90*(Math.PI/180);

}

else{

var angulo_v22 = Math.atan(v2_i/v2_r)*(Math.PI/180);

}






var v3_r = (tensao_3*Math.cos(angulo_3))-(r_total);
var v3_i = (tensao_3*Math.sin(angulo_3))-(i_total);

var v3_mod = Math.sqrt(Math.pow(v3_r, 2) + Math.pow(v3_i, 2));


if(v3_i>0 && v3_r==0){

var angulo_v33 = 90*(Math.PI/180);

}

if(v3_i<0 && v3_r==0){

var angulo_v33 = -90*(Math.PI/180);

}

else{

var angulo_v33 = Math.atan(v3_i/v3_r)*(Math.PI/180);

}


//FIM QUEDAS TENSAO ÀS CARGAS;

//CORRENTES DE FASE E DE LINHA

var c_ff_1 = v1_mod/modulo_z1;
var c_ff_2 = v2_mod/modulo_z2;
var c_ff_3 = v3_mod/modulo_z3;

corrente_fase_1.value = (c_ff_1+" "+"A");
corrente_fase_2.value = (c_ff_2+" "+"A");
corrente_fase_3.value = (c_ff_3+" "+"A");
corrente_linha_1.value = (c_ff_1+" "+"A");
corrente_linha_2.value = (c_ff_2+" "+"A");
corrente_linha_3.value = (c_ff_3+" "+"A");


//FIM CORRENTES DE FASE E DE LINHA

//VAR FATORES P (FI)

var fatorp_f1;
var fatorp_f2;
var fatorp_f3;

var angulo_i_f1 = (angulo_v11)-(angulo_z1);
var angulo_i_f2 = (angulo_v22)-(angulo_z2);
var angulo_i_f3 = (angulo_v33)-(angulo_z3);

var fi_1 = (angulo_v11)-(angulo_i_f1);
var fi_2 = (angulo_v22)-(angulo_i_f2);
var fi_3 = (angulo_v33)-(angulo_i_f3);

//FIM FATORES P (FI)

//POTENCIA DE LINHA E FASE

var p_f_11 = v1_mod*c_ff_1*Math.cos(fi_1);
var p_f_22 = v2_mod*c_ff_2*Math.cos(fi_2);
var p_f_33 = v3_mod*c_ff_3*Math.cos(fi_3);

potencia_fase_1.value = (p_f_11+" "+"W");
potencia_fase_2.value = (p_f_22+" "+"W");
potencia_fase_3.value = (p_f_33+" "+"W");
potencia_linha_1.value = (p_f_11+" "+"W");
potencia_linha_2.value = (p_f_22+" "+"W");
potencia_linha_3.value = (p_f_33+" "+"W");

//FIM POTENCIA DE LINHA E FASE

//FIM ESTRELA********************************************************************************************

}






//TRIANGULO**********************************************************************************************








if(ti==1){

tensao_1 = 230*Math.sqrt(3);
tensao_2 = 230*Math.sqrt(3);
tensao_3 = 230*Math.sqrt(3);

angulo_1 = -30*(Math.PI/180);
angulo_2 =  30*(Math.PI/180);
angulo_3 =  90*(Math.PI/180);



//ANGULO IMPEDANCIA Z1*******************************************************************************************

if(reatancia_1>0 && resistencia_1==0){

var angulo_z1 = 90*(Math.PI/180);

}


if(reatancia_1<0 && resistencia_1==0){

var angulo_z1 = -90*(Math.PI/180);

}

else{

var angulo_z1=Math.atan(reatancia_1/resistencia_1)*(Math.PI/180); 
}

//FIM ANGULO IMPEDANCIA Z1***************************************************************************************

//ANGULO IMPEDANCIA Z2*******************************************************************************************

if(reatancia_2>0 && resistencia_2==0){

var angulo_z2 = 90*(Math.PI/180);

}


if(reatancia_2<0 && resistencia_2==0){

var angulo_z2 = -90*(Math.PI/180);

}

else{

var angulo_z2=Math.atan(reatancia_2/resistencia_2)*(Math.PI/180); 
}


//FIM ANGULO IMPEDANCIA Z2***************************************************************************************

//ANGULO IMPEDANCIA Z3*******************************************************************************************

if(reatancia_3>0 && resistencia_3==0){

var angulo_z3 = 90*(Math.PI/180);

}


if(reatancia_3<0 && resistencia_3==0){

var angulo_z3 = -90*(Math.PI/180);

}

else{

var angulo_z3=Math.atan(reatancia_3/resistencia_3)*(Math.PI/180); 
}


//FIM ANGULO IMPEDANCIA Z3***************************************************************************************


var modulo_z1 = Math.sqrt(Math.pow(resistencia_1, 2) + Math.pow (reatancia_1, 2));

var modulo_z2 = Math.sqrt(Math.pow(resistencia_2, 2) + Math.pow (reatancia_2, 2));

var modulo_z3 = Math.sqrt(Math.pow(resistencia_3, 2) + Math.pow (reatancia_3, 2));

//CORRENTES DAS CARGAS************************************************************

var ic1 = tensao_1/modulo_z1;
var ic2 = tensao_2/modulo_z2;
var ic3 = tensao_3/modulo_z3;

corrente_fase_1.value = (ic1+" "+"A");
corrente_fase_2.value = (ic2+" "+"A");
corrente_fase_3.value = (ic3+" "+"A");

//FIM CORRENTES DAS CARGAS*******************************************************

//CORRENTES DAS LINHAS***********************************************************

var c_z1_mod = tensao_1/modulo_z1;
var c_z2_mod = tensao_2/modulo_z2;
var c_z3_mod = tensao_3/modulo_z3;

var c_z1_ang = (angulo_1)-(angulo_z1);
var c_z2_ang = (angulo_2)-(angulo_z2);
var c_z3_ang = (angulo_3)-(angulo_z3);
var c_z1_lol = (-210*(Math.PI/180))-(angulo_z1);

var c_z1_real = c_z1_mod*Math.cos(c_z1_ang);
var c_z1_imag = c_z1_mod*Math.sin(c_z1_ang);

var c_z2_real = c_z2_mod*Math.cos(c_z2_ang);
var c_z2_imag = c_z2_mod*Math.sin(c_z2_ang);

var c_z3_real = c_z3_mod*Math.cos(c_z3_ang);
var c_z3_imag = c_z3_mod*Math.sin(c_z3_ang);

var c_z1_lol_real = c_z1_mod*Math.cos(c_z1_lol);
var c_z1_lol_imag = c_z1_mod*Math.sin(c_z1_lol);


var real_i_l1= c_z1_real+c_z2_real;
var imag_i_l1= c_z1_imag+c_z2_imag;

var real_i_l2= c_z1_lol_real+c_z3_real;
var imag_i_l2= c_z1_lol_imag+c_z3_imag;

var real_i_l3 = c_z2_real+c_z3_real;
var imag_i_l3 = c_z2_imag+c_z3_imag;


var mod_IL1 = Math.sqrt(Math.pow(real_i_l1, 2)+ Math.pow(imag_i_l1, 2));
var mod_IL2 = Math.sqrt(Math.pow(real_i_l2, 2)+ Math.pow(imag_i_l2, 2));
var mod_IL3 = Math.sqrt(Math.pow(real_i_l3, 2)+ Math.pow(imag_i_l3, 2));

corrente_linha_1.value=(mod_IL1+" "+"A");
corrente_linha_2.value=(mod_IL2+" "+"A");
corrente_linha_3.value=(mod_IL3+" "+"A");

//FIM CORRENTE DAS LINHAS



//ANGULOS CORRENTE***************************************************************************************

if(imag_i_l1>0 && real_i_l1==0){

var angulo_IL1 = 90*(Math.PI/180);

}

if(imag_i_l1<0 && real_i_l1==0){

var angulo_IL1 = -90*(Math.PI/180);

}

else{

var angulo_IL1 = Math.atan(imag_i_l1/real_i_l1)*(Math.PI/180); 
}



if(imag_i_l2>0 && real_i_l2==0){

var angulo_IL2 = 90*(Math.PI/180);

}

if(imag_i_l2<0 && real_i_l2==0){

var angulo_IL2 = -90*(Math.PI/180);

}

else{

var angulo_IL2 = Math.atan(imag_i_l2/real_i_l2)*(Math.PI/180); 
}




if(imag_i_l3>0 && real_i_l3==0){

var angulo_IL3 = 90*(Math.PI/180);

}

if(imag_i_l3<0 && real_i_l3==0){

var angulo_IL3 = -90*(Math.PI/180);

}

else{

var angulo_IL3 = Math.atan(imag_i_l3/real_i_l3)*(Math.PI/180); 

}

//FIM ANGULOS DE CORRENTE*********************************************************************

//POTENCIAS FASE

var angulo_c1 = angulo_1-((angulo_1)-(angulo_z1));
var angulo_c2 = angulo_2-((angulo_2)-(angulo_z2));
var angulo_c3 = angulo_3-((angulo_3)-(angulo_z3));

var p_c1 = tensao_1*ic1*Math.cos(angulo_c1);
var p_c2 = tensao_2*ic2*Math.cos(angulo_c2);
var p_c3 = tensao_3*ic3*Math.cos(angulo_c3);

potencia_fase_1.value=(p_c1+" "+"W");
potencia_fase_2.value=(p_c2+" "+"W");
potencia_fase_3.value=(p_c3+" "+"W");

//FIM POTENCIAS FASE

//POTENCIAS DE LINHA

var p_l_1_ = tensao_1 * mod_IL1 * Math.cos(angulo_IL1);
var p_l_2_ = tensao_2 * mod_IL2 * Math.cos(angulo_IL2);
var p_l_3_ = tensao_3 * mod_IL3 * Math.cos(angulo_IL3);

potencia_linha_1.value=(p_l_1_+" "+"W");
potencia_linha_2.value=(p_l_2_+" "+"W");
potencia_linha_3.value=(p_l_3_+" "+"W");

//FIM POTENCIAS DE LINHA
}

}



else{
corrente_fase_1.value="Dados em Falta!";
corrente_fase_2.value="Dados em Falta!";
corrente_fase_3.value="Dados em Falta!";

corrente_linha_1.value="Dados em Falta!";
corrente_linha_2.value="Dados em Falta!";
corrente_linha_3.value="Dados em Falta!";

potencia_fase_1.value="Dados em Falta!";
potencia_fase_2.value="Dados em Falta!";
potencia_fase_3.value="Dados em Falta!";

potencia_linha_1.value="Dados em Falta!";
potencia_linha_2.value="Dados em Falta!";
potencia_linha_3.value="Dados em Falta!";

}

if(resistencia_1<0 || resistencia_2<0 || resistencia_3<0){
corrente_fase_1.value="Dados Inválidos!";
corrente_fase_2.value="Dados Inválidos!";
corrente_fase_3.value="Dados Inválidos!";

corrente_linha_1.value="Dados Inválidos!";
corrente_linha_2.value="Dados Inválidos!";
corrente_linha_3.value="Dados Inválidos!";

potencia_fase_1.value="Dados Inválidos!";
potencia_fase_2.value="Dados Inválidos!";
potencia_fase_3.value="Dados Inválidos!";

potencia_linha_1.value="Dados Inválidos!";
potencia_linha_2.value="Dados Inválidos!";
potencia_linha_3.value="Dados Inválidos!";
}
}

//Function RollDown

var keeptrack=false;

function rolldown(){

var botao_rolldown = document.getElementById("botao_rolldown");
var texto_rolldown = document.getElementById("rolldown");

if(keeptrack==false){
texto_rolldown.style.display='block';
window.scrollTo(0,document.body.scrollHeight);
keeptrack=true;
}
else{
texto_rolldown.style.display='none';
keeptrack=false;
}
}