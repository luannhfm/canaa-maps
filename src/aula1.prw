#INCLUDE 'TOTVS.CH'
#INCLUDE 'FWMVCDEF.CH'
#INCLUDE "XMLXFUN.CH"
#include "protheus.ch"
#INCLUDE 'TCBROWSE.CH'
#INCLUDE 'RWMAKE.CH'
#INCLUDE 'FONT.CH'
#INCLUDE 'COLORS.CH'
#INCLUDE 'FILEIO.CH'
#INCLUDE 'TBICONN.CH'


/*
______________________________________________________________________________
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦+----------+-----------+-------+-----------------------+------+----------+¦¦
¦¦¦ Programa ¦ AULA1   ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
¦¦+----------+-----------+------ +-----------------------+------+----------+¦¦
¦¦¦Descrição ¦ AGENDAMENTO P/PROMOTOR                                      ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦ Uso      ¦ Agroindustrial Frutnaa Ltda                                 ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
User Function aula1()

Local oBrowse 
lOCAL nO


oBrowse := FWMBrowse():New()                                                      
oBrowse:SetAlias('ZP4')
oBrowse:SetDescription('AGENDAMENTO P/PROMOTOR')
oBrowse:SetMenuDef("AULA1")
oBrowse:AddLegend( "ZP4_STATUS == '1'  ", "BR_VERDE"                , "Agenda Aberta")
oBrowse:AddLegend( "ZP4_STATUS == '2'  ", "BR_VERMELHO"             , "Locacao Fechada")
oBrowse:AddLegend( "ZP4_STATUS == '3'  ", "BR_CANCEL"               , "Cancelada")
//oBrowse:SetFilterDefault( "ZP4_CODVEN = '"+cCodPromo+"' .and. ZP4_STATUS $ '1-2-3' ")
oBrowse:Activate()                                                    

Return()


/*
______________________________________________________________________________
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦+----------+-----------+-------+-----------------------+------+----------+¦¦
¦¦¦ Programa ¦ MenuDef   ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
¦¦+----------+-----------+------ +-----------------------+------+----------+¦¦
¦¦¦Descrição ¦ AGENDAMENTO P/PROMOTOR                                      ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦ Uso      ¦ Agroindustrial Frutnaa Ltda                                 ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

Static Function MenuDef()
                       
Local aRotina := {}              

ADD OPTION aRotina TITLE "Pesquisar"  		ACTION 'VIEWDEF.AULA1' OPERATION 1  ACCESS 0
ADD OPTION aRotina TITLE 'Visualizar' 		ACTION 'VIEWDEF.AULA1' OPERATION 2  ACCESS 0 
ADD OPTION aRotina TITLE 'Incluir'    		ACTION 'VIEWDEF.AULA1' OPERATION 3  ACCESS 0 
ADD OPTION aRotina TITLE 'Alterar'          ACTION 'VIEWDEF.AULA1' OPERATION 4  ACCESS 0 
ADD OPTION aRotina TITLE 'Excluir'       	ACTION 'VIEWDEF.AULA1' OPERATION 5  ACCESS 0 
ADD OPTION aRotina TITLE 'Positivacao'    	ACTION 'U_MpsCli()' OPERATION 5  ACCESS 0 

Return(aRotina)


/*
______________________________________________________________________________
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦+----------+-----------+-------+-----------------------+------+----------+¦¦
¦¦¦ Programa ¦ ModelDef  ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
¦¦+----------+-----------+------ +-----------------------+------+----------+¦¦
¦¦¦Descrição ¦ AGENDAMENTO P/PROMOTOR                                      ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦ Uso      ¦ Agroindustrial Frutnaa Ltda                                 ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
Static Function ModelDef()
                                     
oStruZP4  := FWFormStruct( 1, 'ZP4' )    //PARAMETROS DISTRATOS POR REGINAL     

oModel := MPFormModel():New( 'M_AULA1', , /*{ |oModel| F103TudOK( oModel ) } */, /*{ |oModel| F103GRV( oModel ) }*/ ) ////oModel := MPFormModel():New( 'GM001' )
oModel:AddFields( 'ZP4MASTER', /*cOwner*/, oStruZP4 )
oModel:SetPrimaryKey( { "ZP4_FILIAL", "ZP4_ID" } )
oModel:SetDescription( 'AGENDAMENTO POR VENDEDOR')
nOperacao := oModel:GetOperation()

Return oModel



/*
______________________________________________________________________________
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦+----------+-----------+-------+-----------------------+------+----------+¦¦
¦¦¦ Programa ¦ ViewDef   ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
¦¦+----------+-----------+------ +-----------------------+------+----------+¦¦
¦¦¦Descrição ¦ Agendamento P/Promotor                                      ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦ Uso      ¦ Agroindustrial Frutnaa Ltda                                 ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

Static Function ViewDef()

Local oModel    := FWLoadModel( 'AULA1' )    
Local oModelZP4 := oModel:GetModel( 'ZP4MASTER' )  //PAAMETROS DISTRATO POR REGIONAL

oStruZP4 := FWFormStruct( 2, 'ZP4' )

oView := FWFormView():New()
oView:SetModel( oModel )
                                              
oView:AddField( 'VIEW_ZP4'	, oStruZP4, 'ZP4MASTER' ) 
 
oView:EnableTitleView('VIEW_ZP4')
   
Return( oView )



/*
______________________________________________________________________________
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¦¦+----------+-----------+-------+-----------------------+------+----------+¦¦
¦¦¦ Programa ¦ ANEXZP4   ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
¦¦+----------+-----------+------ +-----------------------+------+----------+¦¦
¦¦¦Descrição ¦ Anexo do aplicativo para os supervisor                      ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦ Uso      ¦ Agroindustrial Frutnaa Ltda                                 ¦¦¦
¦¦+----------+-------------------------------------------------------------+¦¦
¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
User Function MpsCli()


Private cLati := ALLTRIM(ZP4->ZP4_LATITU)
Private cLong := ALLTRIM(ZP4->ZP4_LONGIT)

FwCallApp("maps-posi")

Return()


Static Function JsToAdvpl(oWebChannel,cType,cContent)
    Do Case
        // Se a interação que recebi for igual a mensagemJavascript
        Case cType == 'mensagemJavascript'
            // Imprimo a informação que recebi para trabalhar
            alert('O que veio do JS: ' + cContent)
        // Se a interação que recebi for igual a receberProtheus
        Case cType == 'receberProtheus'
            // Envio um comando ADVPL para minha aplicação Web
            oWebChannel:AdvPLToJS('mensagemProtheus', 'Comando ADVPL')
    End
Return .T.
