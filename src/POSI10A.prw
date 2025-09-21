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
¦¦¦ Programa ¦ AULA01   ¦ Autor ¦ Renan Sousa de Araujo ¦ Data ¦ 23/10/23 ¦¦¦
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
oBrowse:SetMenuDef("AULA01")
oBrowse:AddLegend( "ZP4_STATUS == '1'  ", "BR_VERDE"                , "Agenda Aberta")
oBrowse:AddLegend( "ZP4_STATUS == '2'  ", "BR_VERMELHO"             , "Locacao Fechada")
oBrowse:AddLegend( "ZP4_STATUS == '3'  ", "BR_CANCEL"               , "Cancelada")
oBrowse:SetFilterDefault( "ZP4_CODVEN = '"+cCodPromo+"' .and. ZP4_STATUS $ '1-2-3' ")
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

ADD OPTION aRotina TITLE "Pesquisar"  		ACTION 'VIEWDEF.AULA01' OPERATION 1  ACCESS 0
ADD OPTION aRotina TITLE 'Visualizar' 		ACTION 'VIEWDEF.AULA01' OPERATION 2  ACCESS 0 
ADD OPTION aRotina TITLE 'Incluir'    		ACTION 'VIEWDEF.AULA01' OPERATION 3  ACCESS 0 
ADD OPTION aRotina TITLE 'Alterar'          ACTION 'VIEWDEF.AULA01' OPERATION 4  ACCESS 0 
ADD OPTION aRotina TITLE 'Excluir'       	ACTION 'VIEWDEF.AULA01' OPERATION 5  ACCESS 0 
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

oModel := MPFormModel():New( 'M_AULA01', , /*{ |oModel| F103TudOK( oModel ) } */, /*{ |oModel| F103GRV( oModel ) }*/ ) ////oModel := MPFormModel():New( 'GM001' )
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

Local oModel    := FWLoadModel( 'AULA01' )    
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

Local aSize       := MsAdvSize()
Local nPort       := 0
Local cUrl        := 'https://www.google.com/maps/place/'+ALLTRIM(ZP4->ZP4_LATITU)+','+ALLTRIM(ZP4->ZP4_LONGIT)
//Local cUrl := "https://www.google.com/maps/place/8%C2%B011'40.2%22S+34%C2%B055'15.9%22W/@-8.19451,-34.921088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-8.19451!4d-34.921088?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
Local oModal
Local oWebEngine 
Local cChave := "ZP4010"+ZP4->ZP4_ID
Local cITEM  := "99"
Local nOpca  := 0
Local aButtons := {}
Private oWebChannel := TWebChannel():New()

U_AbrArqSQL( cCHAVE, cITEM )

SA1->(DbSetOrder(1))
SA1->(DbSeek(xFilial("SA1")+ZP4->ZP4_CLIENT+ZP4->ZP4_LOJA))

oFont1     := TFont():New( "Courier New",0,-11,,.T.,0,,700,.F.,.F.,,,,,, )
//Modal := MSDialog():New(aSize[7],0,aSize[6],aSize[5], "Página Web",,,,,,,,,.T./*lPixel*/)
DEFINE MSDIALOG oModal STYLE DS_MODALFRAME/*remove o botão fechar*/ TITLE "Página Web" FROM aSize[7], 0 TO aSize[6],aSize[5] PIXEL
nPort := oWebChannel::connect()
oWebEngine := TWebEngine():New(oModal, 0, 0, 500, 350,/*cUrl*/, nPort)
oWebEngine:bLoadFinished := {|self, url| /*conout("Fim do carregamento da pagina " + url)*/ }
oWebEngine:navigate(cUrl)
//oWebEngine:Align := CONTROL_ALIGN_ALLCLIENT
oBmp1 := TBitmap():New( 000,480,200,500,,"\positivacao\"+Alltrim(ZP4->ZP4_ID)+".jpeg",.T.,oModal,,,.F.,.F.,,"",.T.,,.T.,,.F. )
oModal:lEscClose := .F.
ACTIVATE MSDIALOG oModal ON INIT EnchoiceBar(oModal,{|| nOpca := 2,oModal:End()},{|| nOpca := 1,oModal:End()},,aButtons)

If nOpca == 2
    If MSGYESNO("A Positivação esta correta ?")
        RECLOCK( "ZP4", .F. )
        ZP4->ZP4_STATUS := '4'
        ZP4->(MsUnLock())
    else
        If MsgYesno("Deseja confirmar a divergência na positivação ?")
            RECLOCK( "ZP4", .F. )
            ZP4->ZP4_STATUS := '5'
            ZP4->(MsUnLock())
        EndIf 
    EndIf
EndIf 

Return()
