.button {
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Exo 2', sans-serif;
  font-weight: 300;
  font-size: 30px;

  display: inline-block;
  position: relative;
  text-align: center;
  color: $col-primary;
  border: 1px solid $col-primary;
  border-radius: $corner-radius;

  line-height: 3em;
  padding-left: 5em;
  padding-right: 5em;

  box-shadow: 0 0 0 0 transparent;

  @include transition(all 0.2s ease-in);

  &:hover {
    color: white;
    box-shadow: 0 0 30px 0 transparentize($col-primary, 0.5);
    background-color: $col-primary;

    @include transition(all 0.2s ease-out);

    &:before {
      @include animation(shine 0.5s 0s linear);
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    @include transition(box-shadow 0.2s ease-in);
  }

  &:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;

    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    @include transform(skewX(-20deg));
  }
}

@include keyframes(shine) {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    left: 100%;
  }
}