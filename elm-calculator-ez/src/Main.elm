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
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!" ]
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


renderBtn : Button -> Html Msg
renderBtn btn =
    case btn of
        Action content ->
            div [ class "btn action", onClick BuildCalculation ]
                [ text content ]

        Number content ->
            div [ class "btn number", onClick BuildCalculation ]
                [ text content ]
