@echo off
chcp 65001 >nul
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel% equ 0 (
    py iniciar.py
    goto fim
)
where python >nul 2>&1
if %errorlevel% equ 0 (
    python iniciar.py
    goto fim
)
echo Instale o Python 3 ou use o Live Server do VS Code.
echo Consulte APRESENTACAO.md para as instrucoes.
:fim
pause
