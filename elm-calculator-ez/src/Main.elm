module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)



---- TYPES ----


type Button
    = Action String
    | Number String



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
            [ Action "clear", Action "/", Number "7", Number "8", Number "9", Action "x", Number "4", Number "5", Number "6", Number "1", Number "2", Number "3", Action "+", Number "0", Action "=" ]
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
        Action content ->
            div [ class "btn action", onClick BuildCalculation ]
                [ text content ]

        Number content ->
            div [ class "btn number", onClick BuildCalculation ]
                [ text content ]


renderBtns : List Button -> List (Html Msg)
renderBtns btns =
    List.map renderBtn btns
