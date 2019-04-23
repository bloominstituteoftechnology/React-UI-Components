module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)



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
    = BuildCalculation
    | PerformCalculation


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    let
        allBtns =
            [ Action (bigBtn "clear"), Action (smallBtn "/"), Number (smallBtn "7"), Number (smallBtn "8"), Number (smallBtn "9"), Action (smallBtn "x"), Number (smallBtn "4"), Number (smallBtn "5"), Number (smallBtn "6"), Number (smallBtn "1"), Number (smallBtn "2"), Number (smallBtn "3"), Action (smallBtn "+"), Number (bigBtn "0"), Action (smallBtn "=") ]
    in
    div [] (renderBtns allBtns)



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
                , onClick BuildCalculation
                ]
                [ text props.content ]

        Number props ->
            div
                [ classList
                    [ ( "btn", True )
                    , ( "number", True )
                    , ( "large", props.isLarge )
                    ]
                , onClick BuildCalculation
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
