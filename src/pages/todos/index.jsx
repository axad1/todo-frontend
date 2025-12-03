import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import Add from "./components/Add";
import List from "./components/List";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { todosApi } from "./services/todosApi";

export default function Todos() {
  return (
    <ApiProvider api={todosApi}>
      <Toaster position="bottom-right" />
      <header className="navbar bg-body-tertiary text-center d-block">
        <span className="navbar-brand h1 fs-2">Todos</span>
      </header>
      <main className="container my-4">
        <Add />
        <List />
      </main>
    </ApiProvider>
  );
}
