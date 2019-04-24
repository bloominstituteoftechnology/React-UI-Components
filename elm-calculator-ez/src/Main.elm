module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import List.FlatMap exposing (..)



---- TYPES ----


type alias ButtonProps =
    { content : String
    , isLarge : Bool
    }


type Button
    = Action ButtonProps
    | Number ButtonProps



---- MODEL ----


type alias Model =
    { value : String }


init : ( Model, Cmd Msg )
init =
    ( { value = "" }
    , Cmd.none
    )



---- UPDATE ----


type Msg
    = BuildCalculation String
    | PerformCalculation


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    let
        row1 =
            [ div [ id "display" ] [ text "0" ] ]

        row2 =
            renderBtns [ Action (bigBtn "clear"), Action (smallBtn "/") ]

        row3 =
            renderBtns [ Number (smallBtn "7"), Number (smallBtn "8"), Number (smallBtn "9"), Action (smallBtn "x") ]

        row4 =
            renderBtns [ Number (smallBtn "4"), Number (smallBtn "5"), Number (smallBtn "6"), Action (smallBtn "-") ]

        row5 =
            renderBtns [ Number (smallBtn "1"), Number (smallBtn "2"), Number (smallBtn "3"), Action (smallBtn "+") ]

        row6 =
            renderBtns [ Number (bigBtn "0"), Action (smallBtn "=") ]

        allBtnRows =
            [ row2, row3, row4, row5, row6 ]
    in
    div [ class "app" ]
        [ div [ class "calculator-display" ]
            (row1 ++ List.map renderRowFromList allBtnRows)
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }



---- HELPERS ----


renderRow : Html Msg -> Html Msg
renderRow element =
    div [ class "row" ] [ element ]


renderRowFromList : List (Html Msg) -> Html Msg
renderRowFromList elements =
    div [ class "row" ] elements


renderBtn : Button -> Html Msg
renderBtn btn =
    case btn of
        Action props ->
            div
                [ classList
                    [ ( "btn", True )
                    , ( "action", True )
                    , ( "large", props.isLarge )
                    ]
                , onClick (BuildCalculation props.content)
                ]
                [ text props.content ]

        Number props ->
            div
                [ classList
                    [ ( "btn", True )
                    , ( "number", True )
                    , ( "large", props.isLarge )
                    ]
                , onClick (BuildCalculation props.content)
                ]
                [ text props.content ]


renderBtns : List Button -> List (Html Msg)
renderBtns btns =
    List.map renderBtn btns


smallBtn : String -> ButtonProps
smallBtn content =
    ButtonProps content False


bigBtn : String -> ButtonProps
bigBtn content =
    ButtonProps content True
