const nav = (() => {
    const header = document.getElementById('header');
    header.innerHTML = `
                        <nav class="navbar navbar-light header">
                          <a class="navbar-brand text-dark" href="#">
                              <i class="fas fa-sort-numeric-down-alt p-2"></i>
                              Counter
                            </a>
                          <a class="navbar-brand text-dark" href="#">
                            <span class="px-4">
                                <i class="fas fa-id-badge"></i>
                                Jamezjaz
                            </span
                            <span>
                              <i class="fas fa-envelope"></i>
                              Jamezjaz@gmail.com
                            </span
                          </a>
                        </nav>
                        `;
  })();
  
  export default nav;