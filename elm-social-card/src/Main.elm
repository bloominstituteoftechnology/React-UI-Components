module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)



---- MODEL ----


type alias User =
    { name : String
    , bio : String
    , social : List String
    }


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


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


socialCards : Html Msg
socialCards =
    div
        [ classList
            [ ( "cards", True )
            , ( "cards--features", True )
            ]
        ]
        [ text "Social Cards" ]


socialCard : User -> Html Msg
socialCard user =
    article [ class "card" ]
        [ div [ class "card", class "card--feature" ]
            [ p [ class "card--feature__p" ] [ text user.name ]
            , p [ class "card--feature__p" ] [ text user.bio ]
            , div
                [ classList
                    [ ( "social", True )
                    , ( "card--feature", True )
                    , ( "social", True )
                    ]
                ]
                [ text "why wont line 97 work?" ]

            -- [ List.map (\x -> span [] [ text x.social ]) user.social ]
            ]
        ]
