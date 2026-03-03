export default function Footer(){
    return(
      <footer className="py-10 text-center text-foreground/40 border-t">
        © {new Date().getFullYear()} FeatRush. All rights reserved.
      </footer>
    );
}