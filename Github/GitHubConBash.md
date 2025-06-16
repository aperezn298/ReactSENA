# Guía paso a paso de GitHub usando Bash

Esta guía te enseñará cómo utilizar GitHub desde los conceptos básicos hasta operaciones frecuentes como clonar repositorios y subir cambios, todo utilizando la terminal Bash.

## Índice
1. [Crear cuenta e iniciar sesión](#1-crear-cuenta-e-iniciar-sesión)
2. [Configurar Git en tu computadora](#2-configurar-git-en-tu-computadora)
3. [Clonar un repositorio existente](#3-clonar-un-repositorio-existente)
   - [Clonar un repositorio vacío](#clonar-un-repositorio-vacío)
   - [Crear un nuevo repositorio desde cero](#crear-un-nuevo-repositorio-desde-cero)
4. [Realizar cambios y subirlos a GitHub](#4-realizar-cambios-y-subirlos-a-github)
5. [Comandos útiles de Git en Bash](#5-comandos-útiles-de-git-en-bash)

## 1. Crear cuenta e iniciar sesión

### Crear una cuenta en GitHub
1. Ve al sitio web de [GitHub](https://github.com/)
2. Haz clic en "Sign up" (Registrarse) en la esquina superior derecha
3. Completa el formulario con tu correo electrónico, contraseña y nombre de usuario
4. Resuelve el desafío de verificación y haz clic en "Create account"
5. Verifica tu dirección de correo electrónico a través del enlace enviado

### Iniciar sesión en GitHub
1. Ve a [GitHub](https://github.com/)
2. Haz clic en "Sign in" (Iniciar sesión) en la esquina superior derecha
3. Ingresa tu nombre de usuario o correo electrónico y contraseña
4. Haz clic en "Sign in"

## 2. Configurar Git en tu computadora

### Instalar Git en sistemas basados en Unix/Linux
```bash
# En distribuciones basadas en Debian (Ubuntu, Mint, etc.)
sudo apt-get update
sudo apt-get install git

# En distribuciones basadas en Red Hat (Fedora, CentOS)
sudo dnf install git
# o
sudo yum install git

# Verificar la instalación
git --version
```

### Instalar Git en macOS
```bash
# Usando Homebrew (recomendado)
# Primero instalar Homebrew si no está instalado
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# Luego instalar Git
brew install git

# Alternativamente, puedes descargar el instalador desde git-scm.com
```

### Instalar Git en Windows (usando Bash)
1. Descarga Git desde [git-scm.com](https://git-scm.com/downloads)
2. Durante la instalación, asegúrate de seleccionar la opción "Git Bash"
3. Una vez instalado, puedes usar Git Bash como tu terminal Bash en Windows

### Configurar tu identidad en Git
Abre la terminal Bash y ejecuta:

```bash
# Configura tu nombre de usuario
git config --global user.name "Tu Nombre"

# Configura tu correo electrónico (usa el mismo correo que usaste para GitHub)
git config --global user.email "tu_email@ejemplo.com"

# Verifica la configuración
git config --list
```

## 3. Clonar un repositorio existente

1. Ve al repositorio que deseas clonar en GitHub
2. Haz clic en el botón verde "Code" 
3. Copia la URL del repositorio (HTTPS o SSH)
4. Abre la terminal Bash
5. Navega a la carpeta donde deseas guardar el repositorio:
   ```bash
   cd ruta/donde/guardar/repositorio
   ```
6. Ejecuta el comando git clone:
   ```bash
   git clone URL_del_repositorio
   ```

### Clonar un repositorio vacío
Sí, puedes clonar un repositorio vacío. Si el repositorio no tiene archivos ni commits iniciales:

1. El comando `git clone` creará una carpeta local con el nombre del repositorio
2. Configurará automáticamente el remoto llamado "origin" que apunta a tu repositorio GitHub
3. Aunque el repositorio esté vacío, se establecerá la conexión entre tu repositorio local y el remoto
4. Puedes empezar a añadir archivos, hacer commits y push normalmente

```bash
# Ejemplo de flujo con un repositorio vacío
git clone https://github.com/usuario/repo-vacio.git
cd repo-vacio
echo "# Mi Proyecto Nuevo" > README.md
git add README.md
git commit -m "Primer commit: README añadido"
git push origin main
```

### Crear un nuevo repositorio desde cero
Si prefieres crear un repositorio local primero y luego conectarlo a GitHub:

```bash
# Crear un directorio para tu proyecto
mkdir mi-proyecto
cd mi-proyecto

# Inicializar un repositorio Git local
git init

# Crear algunos archivos iniciales
echo "# Mi Proyecto" > README.md

# Añadir y confirmar los archivos
git add .
git commit -m "Commit inicial"

# Conectar a un repositorio remoto en GitHub (que debes crear primero en la web de GitHub)
git remote add origin https://github.com/tu-usuario/mi-proyecto.git

# Subir los cambios (para repos nuevos es posible que necesites especificar la rama)
git push -u origin main
```

### Configurar SSH para una conexión más segura (opcional pero recomendado)
```bash
# Generar una clave SSH nueva
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"

# Iniciar el agente SSH en segundo plano
eval "$(ssh-agent -s)"

# Añadir tu clave SSH al agente
ssh-add ~/.ssh/id_ed25519

# Mostrar la clave pública para copiarla a GitHub
cat ~/.ssh/id_ed25519.pub
```

Luego, ve a GitHub → Settings → SSH and GPG keys → New SSH key → Pega tu clave y guarda.

## 4. Realizar cambios y subirlos a GitHub

### Realizar cambios locales
1. Navega a la carpeta del repositorio clonado:
   ```bash
   cd nombre-del-repositorio
   ```
2. Realiza los cambios necesarios en los archivos usando tu editor preferido
3. Verifica el estado de los cambios:
   ```bash
   git status
   ```

### Confirmar los cambios (commit)
1. Añade los archivos modificados al área de preparación:
   ```bash
   # Para añadir un archivo específico
   git add nombre_archivo
   
   # Para añadir todos los archivos modificados
   git add .
   ```
2. Confirma los cambios con un mensaje descriptivo:
   ```bash
   git commit -m "Descripción breve de los cambios realizados"
   ```

### Subir los cambios a GitHub (push)
1. Sube tus cambios al repositorio remoto:
   ```bash
   git push origin nombre_de_la_rama
   ```
   > Nota: Por defecto, la rama principal suele llamarse `main` o `master`

2. Si es la primera vez que haces push, puede solicitar tus credenciales de GitHub

### En caso de conflictos
Si otras personas han modificado los mismos archivos, puedes encontrar conflictos. En ese caso:

1. Actualiza tu repositorio local:
   ```bash
   git pull origin nombre_de_la_rama
   ```
2. Resuelve los conflictos manualmente en los archivos afectados
3. Añade los archivos resueltos, haz commit y push nuevamente

## 5. Comandos útiles de Git en Bash

```bash
# Ver el estado actual del repositorio
git status

# Ver el historial de commits (presiona q para salir)
git log

# Ver el historial en formato resumido y gráfico
git log --oneline --graph

# Ver las ramas disponibles
git branch

# Crear una nueva rama
git checkout -b nombre_nueva_rama

# Cambiar a otra rama
git checkout nombre_rama

# Traer cambios del repositorio remoto
git pull

# Ver las diferencias entre archivos modificados
git diff

# Ver las diferencias de un archivo específico
git diff nombre_archivo

# Deshacer cambios en un archivo específico
git checkout -- nombre_archivo

# Deshacer el último commit (mantiene los cambios)
git reset --soft HEAD~1

# Crear un archivo .gitignore
echo "archivos_a_ignorar/" > .gitignore

# Eliminar un archivo del repositorio y del sistema de archivos
git rm nombre_archivo

# Eliminar un archivo solo del repositorio (manteniéndolo en local)
git rm --cached nombre_archivo

# Ver los repositorios remotos configurados
git remote -v

# Descartar todos los cambios locales y volver al último commit
git reset --hard HEAD
```

## Flujo de trabajo con ramas (Git Flow)

```bash
# Crear una rama de característica
git checkout -b feature/nombre-caracteristica

# Hacer cambios, commits, etc.
# ...

# Actualizar con los últimos cambios de la rama principal
git checkout main
git pull
git checkout feature/nombre-caracteristica
git merge main

# Resolver conflictos si es necesario
# Subir la rama de característica
git push -u origin feature/nombre-caracteristica

# Finalmente, para fusionar la característica a la rama principal
git checkout main
git merge feature/nombre-caracteristica
git push origin main
```

## Recursos adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Documentación de GitHub](https://docs.github.com/)
- [Oh My Zsh - Mejorar tu experiencia en terminal](https://ohmyz.sh/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Pro Git Book](https://git-scm.com/book/en/v2) - Libro gratuito y completo sobre Git

---

¡Feliz codificación! Si tienes preguntas adicionales, consulta la documentación o busca ayuda en la comunidad de GitHub.
