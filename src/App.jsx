import { Route, Switch } from "react-router-dom";
import CharacterList from "./views/Characters/CharacterList";
import CharacterDetail from "./views/Characters/CharacterDetail";

export default function App() {
  return (
    <Switch>
      <Route path='/characters/:id'>
        <CharacterDetail />
      </Route>
      <Route path='/'>
        <CharacterList />
      </Route>
    </Switch>
  );
}
