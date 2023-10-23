actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public func greetSlow(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
