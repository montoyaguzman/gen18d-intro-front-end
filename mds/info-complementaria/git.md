#### **Commits Atómicos**
Un commit atómico es un commit que está enfocado en subir una sola cosa, puede ser un feature, resolver un bug, un refactor, una actualización, una tarea, etc.
<br>
<br>

#### **Conventional Commits**
Es una convención en el formato de los mensajes de los commits. Define una serie de reglas que hacen facilitan la legibilidad del histórico del repositorio.

**Estructura**
```
[optional scope]: [optional body][optional footer(s)]
```

**Tipos principales**
* feat: Nuevas características.
* chore: Cosas que no aportan un req funcional pero posiblemente si un req no funcional.
* fix: Corrección de errores.
* docs: Commits con documentación o comentarios.
* style: Cambios de legibilidad o formateo de código que no afecta a funcionalidad.
* refactor: cambio de código o arquitectura que no corrige errores ni añade funcionalidad, pero mejora el código.
* test: Para añadir o arreglar tests.
<br>
<br>

#### **Gitflow**
Es un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales.
**Nombrado en gitflow**
* main o master
* develop
* release/appV1.0.0
* feature/login
* hotfix/logo-app
<br>
<br>
<br>

### **Comandos Git**
<br>

#### **Información del repo**
```
# ver estado del working directory y staging area
git status

# ver historial de commits
git log --oneline
```
<br>

#### **Generar llave ssh**

```
# generar ssh key
ssh-keygen

# ver llave p[ublica
cat ~/.ssh/id_rsa.pub
```
<br>

#### **Hacer un commit**

```
# agregar al staging area
git add .

# quitar del staging area
git restore --staged namefile.txt

# hacer un commit al repo local
git commit -m "conventionalCommitScope: mi mensaje"

# actualiza el mensaje del ultimo commit realizado (no debe estar pusheado)
git commit --amend -m "an updated commit message"
```
<br>

#### **Remoto**

```
# ver los repos remotos a los que esta conectado el repo local
git remote -v

# bajar cambios
git pull origin branchName

# subir cambios
git push origin branchName

# subir cambios de una rama nueva para el remoto
git push -u origin branchName

# obtener los cambios de una rama remota y cambiarse a esa rama
git fetch && git checkout develop

#  bajar cambios de una rama remota a una local (cuando ya existe)
git pull origin branchName

# agregar una direccion remoto (origin)
git remote add origin myUrl

# modificar una direccion remoto (origin)
git remote set-url origin myUrl
```
<br>

#### **Administración de ramas**

```
# ver rama en la que se encuentra el head
git branch 

# crea una rama nueva
git branch newBranchName 

# cambiarse a una rama con el nombre nombreRama
git checkout branchName

# crear y cambiarse a una nueva rama
git checkout -b newBranchName

# crear y cambiarse a una nueva rama
git switch -c newBranchName 

# eliminar una rama
git branch -D branchName
```
<br>

#### **Trabajando con el stash**

```
# El codigo de working directory y staging area es eliminado temporalmente
git stash

# Muestra la lista de stash hechos
git stash list

# Regresa los cambios del stash al working directory
git stash pop

# Limpia la lista de stash
git stash clear
```
<br>

#### **Resets**

```
# Descartar cambios y eliminarlos del stagin y working directory
git reset --hard HEAD^

# Descartar cambios y eliminarlos del stagin y working directory
git reset --soft HEAD~1

```
<br>

#### **Otros comandos útiles**

```
# actualiza la cache de git para que tome ciertos cambios (.gitignore)
git rm --cached . r

# Muestra todas las ramas con sus distintos commit de forma gráfica
git log --all --decorate --oneline --graph -> 

```
<br>

#### **VSCode como editor de git**

```
git config --global core.editor"visual studio --wait"
git commit
# ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
# regresar a la consola a comprobar el commit

```